import { getUserFromToken } from "@/utils/auth";

export async function GET() {
  const user = await getUserFromToken();

  if (!user) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  return Response.json(user);
}
