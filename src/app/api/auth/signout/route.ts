import { cookies } from "next/headers";
export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    cookieStore.delete("refresh");
    return Response.json(
      { message: "user Logged out Successfuly" },
      { status: 200 },
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Response.json({ message: err.message }, { status: 500 });
    }
    return Response.json({ message: err }, { status: 500 });
  }
}
