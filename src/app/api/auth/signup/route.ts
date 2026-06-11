import connectDB from "@/configs/db";
import {
  hashPassword,
  generateAccessToken,
  generateRefreshToken,
} from "@/utils/auth";
import { model as UserModel } from "@/models/Users";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { email, password, phone } = body;
    // validation
    if (!password.trim() || !email.trim() || !phone.trim()) {
      return Response.json(
        { message: "email phone or password is empty" },
        { status: 422 },
      );
    }
    const isUserExist = await UserModel.findOne({
      $or: [{ email }, { phone }],
    });

    if (isUserExist) {
      return Response.json(
        { message: "user with this infos is already exist" },
        { status: 409 },
      );
    }

    // create new User
    const hashedPassword = await hashPassword(password);
    const usersCount = await UserModel.countDocuments();
    const newUser = await UserModel.create({
      email: email,
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
    // set cookies
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
    // Response
    return Response.json(
      {
        message: "User created Successfuly",
      },
      { status: 201 },
    );
  } catch (err) {
    if (err instanceof Error) {
      return Response.json(
        { message: "internal server error", err: err.message },
        { status: 500 },
      );
    }
    return Response.json({ message: err }, { status: 500 });
  }
}
