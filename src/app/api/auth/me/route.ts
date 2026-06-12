import { getUserFromToken } from "@/utils/auth";

export async function GET() {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    return Response.json(user);
  } catch (err) {
    if (err instanceof Error) {
      return Response.json(
        { message: "internal server erorr" },
        { status: 500 },
      );
    }
    return Response.json({ message: "internal server erorr" }, { status: 500 });
  }
}
