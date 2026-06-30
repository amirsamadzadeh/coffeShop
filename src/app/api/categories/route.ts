import connectDB from "@/configs/db";
import {model as CategoryModel} from "@/models/Categorie";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, slug } = body;

    if (name.trim() === "" || slug.trim() === "") {
      return Response.json(
        { message: "name and slug is required" },
        { status: 400 },
      );
    }

    const isCategoryExist = await CategoryModel.findOne({
      $or: [{ slug }, { name }],
    });

    if (isCategoryExist) {
      return Response.json(
        { message: "Category is already exist." },
        { status: 409 },
      );
    }

    await CategoryModel.create({ name, slug });

    return Response.json(
      { message: "Category created Successfully" },
      { status: 201 },
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Response.json({ message: err.message }, { status: 500 });
    }
  }
}
