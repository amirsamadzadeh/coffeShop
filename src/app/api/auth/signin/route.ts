import connectDB from "@/configs/db";
import {
  verifyPassword,
  generateAccessToken,
  generateRefreshToken,
} from "@/utils/auth";
import { model as UserModel } from "@/models/Users";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { email, password } = body;

    if (!email.trim() || !password.trim()) {
      return Response.json(
        { message: "email or password is empty" },
        { status: 422 },
      );
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return Response.json({ message: "user is not exist " }, { status: 404 });
    }
    const isUserPassValid = await verifyPassword(password, user.password);

    if (!isUserPassValid) {
      return Response.json(
        { message: "invalid email or password" },
        { status: 401 },
      );
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
        message: "User Loged in Successfuly",
      },
      { status: 200 },
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Response.json({ message: err.message }, { status: 500 });
    }
    return Response.json({ message: err }, { status: 500 });
  }
}
