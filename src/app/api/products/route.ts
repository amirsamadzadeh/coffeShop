import connectDB from "@/configs/db";
import { model } from "@/models/Products";
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      name,
      image,
      caffein,
      weight,
      packaging,
      aroma,
      roast,
      category,
      price,
    } = body;

    // Validation  (for now its a basic Validation)

    if (
      !name ||
      !image ||
      !caffein ||
      !weight ||
      !packaging ||
      !aroma ||
      !roast ||
      !category ||
      !price
    ) {
      return Response.json(
        { message: "not valid data for product" },
        { status: 422 },
      );
    }

    const newProduct = {
      name,
      image,
      caffein,
      weight,
      packaging,
      aroma,
      roast,
      category,
      price,
    };

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

export async function GET(req: Request) {
  try {
    await connectDB();
    let products = await model.find({});
    return Response.json(products, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Response.json({ err: err.message }, { status: 500 });
    }
  }
}
