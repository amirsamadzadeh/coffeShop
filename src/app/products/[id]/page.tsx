import connectDB from "@/configs/db";
import { model } from "@/models/Products";
import ProductDetail from "@/components/modules/products/ProductDetail";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  await connectDB();
  const product = await model.findOne({ _id: id }, "-__v").lean();
  return (
    <>
      <ProductDetail product={product} />
    </>
  );
}
