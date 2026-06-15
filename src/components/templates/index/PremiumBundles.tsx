import { model as CategoryModel } from "@/models/Categorie";
import { model as ProductModel } from "@/models/Products";
import connectDB from "@/configs/db";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import PremiumBundlSlider from "@/components/templates/index/PremiumBundleSlider";
import ProductCard from "@/components/modules/ProductCard";

type ProductTypes = {
  _id: string;
  name: string;
  image: string;
  price: number;
  category: {
    name: string;
    slug: string;
  };
};

// type CategoriesType = {
//     _id : string,
//     name : string,
//     slug :string
// }

export const PremiumBundles = async () => {
  await connectDB();
  const categorie = await CategoryModel.findOne({ slug: "premium" });
  const products: ProductTypes[] = await ProductModel.find({
    category: categorie._id,
  }).populate("category");
  console.log(products);
  return (
    <div className="flex flex-col px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-12 mt-11  lg:mt-10">
      {/* Head */}
      <div className="flex flex-row-reverse justify-between">
        <h3 className="tracking-tight text-sm min-[300px]:text-md min-[400px]:tracking-normal min-[400px]:text-lg  md:text-xl lg:text-2xl font-black">
          پک های ویژه
        </h3>
        <Link
          href="/products"
          className="flex items-center gap-2 text-xs min-[400px]:text-sm tracking-tight sm:tracking-normal opacity-75 "
        >
          <MdOutlineKeyboardArrowLeft />
          مشاهده همه محصولات
        </Link>
      </div>

      {/* Premium Bundles Products */}
      <PremiumBundlSlider>
        {products.map((product) => (
          <ProductCard
            product={JSON.parse(JSON.stringify(product))}
            key={product._id}
          />
        ))}
      </PremiumBundlSlider>
    </div>
  );
};
