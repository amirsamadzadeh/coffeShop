import connectDB from "@/configs/db";
import Category from "@/models/Categorie";
import { model as Products } from "@/models/Products";
import { notFound } from "next/navigation";

interface CategoriesSlugProps {
  params: Promise<{
    slug: string;
  }>;
}

const CategoriesSlug = async ({ params }: CategoriesSlugProps) => {
  await connectDB();
  const { slug } = await params;
  const category = await Category.findOne({ slug });

  if (!category) {
    notFound();
  }

  const products = await Products.find({ category: category._id });

  return (
    <div>
      <h1>دسته بندی: {category.name}</h1>

      {products.length === 0 ? (
        <p>در حال حاضر هیچ محصولی در این دسته بندی موجود نیست.</p>
      ) : (
        <div className="product-list">{/* Products Mapping */}</div>
      )}
    </div>
  );
};

export default CategoriesSlug;
