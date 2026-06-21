"use server";

import connectDB from "@/configs/db";
import { cookies } from "next/headers";
import { model as UserModel } from "@/models/Users";
import { model as OtpModel } from "@/models/Otp";
import { model as ProductModel } from "@/models/Products";
import { writeFile } from "fs/promises";
import path from "path";

import {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  generateRefreshToken,
} from "@/utils/auth";
import { redirect } from "next/navigation";

export type AuthState = {
  success: boolean;
  message: string;
};

export async function loginAction(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  try {
    await connectDB();

    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    if (!email.trim() || !password.trim()) {
      return {
        success: false,
        message: "email or password is empty",
      };
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return {
        success: false,
        message: "invalid email or password",
      };
    }

    const isValidPassword = await verifyPassword(password, user.password);

    if (!isValidPassword) {
      return {
        success: false,
        message: "invalid email or password",
      };
    }

    const token = generateAccessToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    cookieStore.set("refresh", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 15,
      path: "/",
    });
  } catch {
    return {
      success: false,
      message: "internal server error",
    };
  }
  redirect("/dashboard");
}

export async function registerAction(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  try {
    await connectDB();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";

    if (!email.trim() || !password.trim() || !phone.trim() || !name.trim()) {
      return {
        success: false,
        message: "email phone or password or name is empty",
      };
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ email }, { phone }],
    });

    if (isUserExist) {
      return {
        success: false,
        message: "user already exists",
      };
    }

    const hashedPassword = await hashPassword(password);

    const usersCount = await UserModel.countDocuments();

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role: usersCount > 0 ? "USER" : "ADMIN",
    });

    const token = generateAccessToken({
      id: newUser._id,
      email,
      role: newUser.role,
    });

    const refreshToken = generateRefreshToken({
      id: newUser._id,
      email,
      role: newUser.role,
    });

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    cookieStore.set("refresh", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 15,
      path: "/",
    });
  } catch {
    return {
      success: false,
      message: "internal server error",
    };
  }
  redirect("/dashboard");
}

export async function logoutAction() {
  const cookieStore = await cookies();

  cookieStore.delete("token");
  cookieStore.delete("refresh");

  redirect("/");
}

export async function otpLoginAction(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const phone = formData.get("phone")?.toString() || "";
  const cookieStore = await cookies();
  try {
    await connectDB();
    const code = Math.floor(100000 + Math.random() * 900000);
    const now = Date.now();
    const expireAt = now + 2 * 60 * 1000;
    const response = await fetch(
      "https://api.iranpayamak.com/ws/v1/sms/pattern",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Api-Key": process.env.IRANPAYAMAK_API_KEY!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: process.env.IRANPAYAMAK_PATTERN_CODE,
          attributes: {
            code,
          },
          recipient: phone,
          line_number: "90008361",
          number_format: "english",
        }),
      },
    );

    cookieStore.set("otp-phone", phone, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 2 * 60,
      path: "/",
    });

    await OtpModel.create({
      phone: phone,
      code: code,
      expireAt,
    });

    return {
      success: true,
      message: "OTP sent successfully",
    };
  } catch (err) {
    return { success: false, message: "sms failed" };
  }
}

export async function verifyOtpAction(
  prevState: AuthState,
  formData: FormData,
) {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const phone = cookieStore.get("otp-phone")?.value;
    const code = formData.get("otp")?.toString() || "";

    if (!phone) {
      await OtpModel.deleteMany({ phone });
      return { success: false, message: "phone not found" };
    }

    const otpRecord = await OtpModel.findOne({ phone });

    if (!otpRecord) {
      return { success: false, message: "otp not found" };
    }

    if (Date.now() > otpRecord.expireAt) {
      await OtpModel.deleteMany({ phone });
      return { success: false, message: "otp expired" };
    }

    if (otpRecord.code !== code) {
      return { success: false, message: "invalid otp" };
    }

    const user = await UserModel.findOne({ phone });

    if (!user) {
      await OtpModel.deleteMany({ phone });
      return { success: false, message: "user not found" };
    }

    const token = generateAccessToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    cookieStore.set("refresh", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 15,
      path: "/",
    });
    await OtpModel.deleteMany({ phone });
    cookieStore.delete("otp-phone");

    redirect("/dashboard");
  } catch (err) {
    return { success: false, message: "verify failed" };
  }
}

export async function addProductAction(
  prevState: AuthState,
  formData: FormData,
) {
  try {
    await connectDB();
    const name = formData.get("name");
    const price = formData.get("price");
    const image = formData.get("image") as File;
    const weight = formData.get("weight");
    const packaging = formData.get("packaging");
    const aroma = formData.get("aroma");
    const roast = formData.get("roast");
    const category = formData.get("category");

    // Validation  (for now its a basic Validation)

    if (
      !name ||
      !image ||
      image.size === 0 ||
      !weight ||
      !packaging ||
      !aroma ||
      !roast ||
      !category ||
      !price
    ) {
      return {
        success: false,
        message: "not valid data",
      };
    }

    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = Date.now() + image.name;
    const imgPath = path.join(process.cwd(), "public/uploads/" + filename);

    await writeFile(imgPath, buffer);

    await ProductModel.create({
      name,
      image: `/uploads/${filename}`,
      packaging,
      aroma,
      roast,
      category,
      price: Number(price),
      weight: Number(weight),
    });
    return { success: true, message: "product added succesfully" };
  } catch (err) {
    return { success: false, message: "adding product failed" };
  }
}
/* TODO */
export async function forgotPasswordAction(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  return {
    success: false,
    message: "not implemented yet",
  };
}
