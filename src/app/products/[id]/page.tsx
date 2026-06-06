import connectDB from "@/configs/db";
import { model } from "@/models/Products";
import ProductDetail from "@/components/modules/products/ProductDetail";
import Tabs from "@/components/templates/products/Tabs";
import RelatedProducts from "@/components/templates/products/RelatedProducts";
import AddToCart from "@/components/templates/products/AddToCart";
type Props = {
  params: {
    id: string;
  };
};
type ProductTypes = {
  _id: string;
  name: string;
  price: number;
  image: string;
  caffein: string;
  weight: number;
  pakaging: string;
  aroma: string;
  roast: string;
  score: number;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  await connectDB();
  const product: ProductTypes = await model.findOne({ _id: id }, "-__v").lean();
  const products: ProductTypes[] = await model.find({}).limit(3).lean();
  return (
    <>
      <ProductDetail product={JSON.parse(JSON.stringify(product))} />
      <Tabs product={JSON.parse(JSON.stringify(product))} />
      <RelatedProducts products={JSON.parse(JSON.stringify(products))} />
      <AddToCart price={product.price} />
    </>
  );
}
