import connectDB from "@/configs/db";
import { model } from "@/models/Products";
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, image, caffein, weight, pakaging, aroma, roast } = body;

    // Validation  (for now its a basic Validation)

    if (
      !name ||
      !image ||
      !caffein ||
      !weight ||
      !pakaging ||
      !aroma ||
      !roast
    ) {
      return Response.json(
        { message: "not valid data for product" },
        { status: 422 },
      );
    }

    const newProduct = { name, image, caffein, weight, pakaging, aroma, roast };
    await model.create(newProduct);
    return Response.json(
      { message: "product added successfully" },
      { status: 201 },
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Response.json(
        { message: "Internal Server Erorr", err: err.message },
        { status: 500 },
      );
    }
  }
}
