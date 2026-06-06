import Image from "next/image";
import ProductCard from "@/components/modules/ProductCard";
import Categories from "@/components/templates/index/Categories";
import connectDB from "@/configs/db";
import { model } from "@/models/Products";
export default async function Home() {
  await connectDB();
  const products = await model.find(
    {},
    "-__v -caffein -weight -score -packaging -roast -aroma",
  );

  return (
    <div className="">
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 md:px-3 lg:px-5 xl:px-7 2xl:px-12 gap-2 mx-auto">
        {products.map((product) => (
          <ProductCard
            product={JSON.parse(JSON.stringify(product))}
            key={product._id}
          />
        ))}
      </div>

      {/* <Categories /> */}
    </div>
  );
}
