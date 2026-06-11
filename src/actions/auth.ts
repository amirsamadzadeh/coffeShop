"use server";

import connectDB from "@/configs/db";
import { cookies } from "next/headers";
import { model as UserModel } from "@/models/Users";
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
    redirect("/dashboard", "push");
    return {
      success: true,
      message: "User Logged in Successfully",
    };
  } catch {
    return {
      success: false,
      message: "internal server error",
    };
  }
}

export async function registerAction(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  try {
    await connectDB();

    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";

    if (!email.trim() || !password.trim() || !phone.trim()) {
      return {
        success: false,
        message: "email phone or password is empty",
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

    return {
      success: true,
      message: "User created successfully",
    };
  } catch {
    return {
      success: false,
      message: "internal server error",
    };
  }
}

export async function logoutAction(): Promise<AuthState> {
  try {
    const cookieStore = await cookies();

    cookieStore.delete("token");
    cookieStore.delete("refresh");

    return {
      success: true,
      message: "User logged out successfully",
    };
  } catch {
    return {
      success: false,
      message: "internal server error",
    };
  }
}

/* TODO */
export async function otpLoginAction(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  return {
    success: false,
    message: "not implemented yet",
  };
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
