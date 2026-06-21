import connectDB from "@/configs/db";
import { model as CategoryModel } from "@/models/Categorie";
import { model as ProductModel } from "@/models/Products";
import ProductCard from "@/components/modules/ProductCard";
import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleLeftSolid } from "react-icons/lia";
import Link from "next/link";

type Params = {
  params: {
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: string;
  };
};

export const ShowFilteredProducts = async ({ params }: Params) => {
  await connectDB();
  const query: any = {};
  const categorySlug = params.category;
  const currentPage: number = Number(params?.page) || 1;
  const skip = (currentPage - 1) * 8;
  const minPrice = params.minPrice ? Number(params.minPrice) : undefined;
  const maxPrice = params.maxPrice ? Number(params.maxPrice) : undefined;
  const category = await CategoryModel.findOne({
    slug: categorySlug,
  });

  if (categorySlug !== "allProducts" && category) {
    query.category = category._id;
  }
  if (minPrice !== undefined || maxPrice !== undefined) {
    query.price = {};

    if (minPrice !== undefined) {
      query.price.$gte = minPrice;
    }

    if (maxPrice !== undefined) {
      query.price.$lte = maxPrice;
    }
  }
  const products = await ProductModel.find({ ...query })
    .skip(skip)
    .limit(8);

  const totalProducts = await ProductModel.countDocuments(query);
  const productsPerPage = 8;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="flex flex-col md:col-span-8 pb-6 px-2.5 justify-between ">
      <div className="flex flex-col">
        {/* head titles */}
        <div className="flex justify-between pb-2 ">
          <h3 className="text-md md:text-base font-bold">فروشگاه</h3>
        </div>

        {/* products items */}
        <div className="grid grid-cols-12 gap-2.5 mt-5">
          {/* wrapper */}
          {products.length !== 0 ? (
            products.map((product) => (
              <div
                className="col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-3 drop-shadow-md transition-transform
      duration-500
      ease-out
      hover:scale-105"
                key={product._id.toString()}
              >
                <ProductCard
                  product={{
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    _id: product._id,
                  }}
                />
              </div>
            ))
          ) : (
            <div>محصولی برای این فیلتر یافت نشد</div>
          )}
        </div>
      </div>
      {/* pagination buttons */}
      <div className="flex flex-row-reverse gap-2 items-center justify-center mt-4">
        {/* back page button */}
        <div className="flex items-center justify-center h-full px-2 border border-gray-100 rounded-sm cursor-pointer">
          <Link
            href={
              currentPage !== 1
                ? `/products?category=${categorySlug}&page=${currentPage - 1}`
                : ``
            }
          >
            <LiaAngleLeftSolid size={16} />
          </Link>
        </div>
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            className={`text-center  px-2.5 py-0.5 rounded-sm cursor-pointer ${Number(currentPage) === i + 1 ? `bg-[#D1B378] text-white` : `bg-gray-100 text-black`}`}
            key={i}
            href={`/products?category=${categorySlug}&page=${i + 1}`}
          >
            {(i + 1).toLocaleString("fa-IR")}
          </Link>
        ))}
        {/* forward page button */}
        <div className="flex items-center justify-center h-full px-2 border border-gray-100 rounded-sm cursor-pointer">
          <Link
            href={
              currentPage !== totalPages
                ? `/products?category=${categorySlug}&page=${currentPage + 1}`
                : ``
            }
          >
            <LiaAngleRightSolid size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
