import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAccessToken } from "./utils/auth";

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const { pathname } = req.nextUrl;

  const isAuthPage = pathname === "/login-register";

  const isProtectedRoute =
    pathname.startsWith("/dashboard") || pathname.startsWith("/profile");

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login-register", req.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  const AdminRoute = pathname.startsWith("/control-panel");

  if (!token && AdminRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (token && AdminRoute) {
    const user = verifyAccessToken(token);

    if (!user || user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}
