import connectDB from "@/configs/db";
import { model } from "@/models/Products";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    const product = await model.findById(id);

    if (!product) {
      return Response.json({ message: "product not found" }, { status: 404 });
    }

    return Response.json({ product }, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Response.json(
        {
          err: err.message,
        },
        { status: 500 },
      );
    }
  }
}
