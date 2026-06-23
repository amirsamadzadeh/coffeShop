import connectDB from "@/configs/db";
import { model as ProductModel } from "@/models/Products";
import ProductCard from "@/components/modules/ProductCard";

const page = async () => {
  await connectDB();

  const products = await ProductModel.find({});
  return (
    <div className="flex flex-col mt-5">
      <h3 className="text-base font-bold">مدیریت محصولات</h3>

      {/* all products */}
      {products.length < 0 ? (
        <div className="grid grid-cols-9">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      ) : (
        <div>هیچ محصولی هنوز وجود ندارد</div>
      )}
    </div>
  );
};

export default page;
