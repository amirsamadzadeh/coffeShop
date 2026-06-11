import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { model as UserModel } from "@/models/Users";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
  const isValidPassword = await compare(password, hashedPassword);
  return isValidPassword;
};

const generateAccessToken = (data) => {
  const token = sign({ ...data }, process.env.AccessTokenSecretKey, {
    expiresIn: "7d",
  });
  return token;
};

const generateRefreshToken = (data) => {
  const refreshToken = sign({ ...data }, process.env.RefreshTokenSecretKey, {
    expiresIn: "15d",
  });
  return refreshToken;
};

const verifyAccessToken = (token) => {
  const tokenPayload = verify(token, process.env.AccessTokenSecretKey);
  return tokenPayload;
};

const getUserFromToken = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;

  let user = null;
  if (token) {
    try {
      const tokenPayload = verifyAccessToken(token);
      if (tokenPayload) {
        user = await UserModel.findOne({ email: tokenPayload.email });
      }
      return user;
    } catch {
      return user;
    }
  }
};

export {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  getUserFromToken,
};
