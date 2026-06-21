import connectDB from "@/configs/db";
import { model as ProductModel } from "@/models/Products";
import ProductCard from "@/components/modules/ProductCard";
import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleLeftSolid } from "react-icons/lia";
import Image from "next/image";
type Props = {
  searchParams: Promise<{
    param: string;
    page?: string;
  }>;
};

const page = async ({ searchParams }: Props) => {
  await connectDB();
  const params = await searchParams;
  const search = params.param;
  const query: any = {};
  const currentPage: number = Number(params?.page) || 1;
  const skip = (currentPage - 1) * 8;
  if (search) {
    query.name = {
      $regex: search,
      $options: "i",
    };
  }
  const products = await ProductModel.find({ ...query })
    .skip(skip)
    .limit(8);

  const totalProducts = await ProductModel.countDocuments(query);
  const productsPerPage = 8;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div
      className="flex flex-col gap-2 px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-12 mt-5"
      dir="rtl"
    >
      {/* wrapper */}
      <div className="flex flex-col bg-white rounded-md shadow-xl mt-5">
        <h3 className="text-base font-md pr-2 mt-3">
          نتایج :
          <span className="text-sm text-gray-400">({totalProducts} محصول)</span>
        </h3>

        {/* products items */}
        {totalProducts > 0 ? (
          <>
            <div className="grid grid-cols-12 gap-2.5 mt-5 px-2">
              {/* wrapper */}
              {products.length !== 0 ? (
                products.map((product) => (
                  <div
                    className="col-span-6 min-[500px]:col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-3 drop-shadow-md transition-transform
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
            {/* pagination buttons */}
            <div className="flex flex-row-reverse gap-2 items-center justify-center my-4">
              {/* back page button */}
              <div className="flex items-center justify-center h-full px-2 py-0.5 border border-gray-100 rounded-sm cursor-pointer">
                <Link
                  href={
                    currentPage !== 1
                      ? `/search?param=${search}&page=${currentPage - 1}`
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
                  href={`/search?param=${search}&page=${i + 1}`}
                >
                  {(i + 1).toLocaleString("fa-IR")}
                </Link>
              ))}
              {/* forward page button */}
              <div className="flex items-center justify-center h-full px-2 py-0.5 border border-gray-100 rounded-sm cursor-pointer">
                <Link
                  href={
                    currentPage !== totalPages
                      ? `/search?param=${search}&page=${currentPage + 1}`
                      : ``
                  }
                >
                  <LiaAngleRightSolid size={16} />
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-12 h-1/2 ">
            {/* wrapper */}
            <div
              className="flex flex-col w-full gap-2 bg-white items-center jusitfy-center rounded-lg mt-5 mb-5 py-5"
              dir="rtl"
            >
              <Image
                alt="empty cart :("
                src="/images/cart/emptyCart.png"
                width={200}
                height={200}
                className="object-cover "
              />
              <h4 className="text-lg font-bold">محصولی یافت نشد</h4>
              <span className="hidden min-[400px]:flex text-sm text-gray-400">
                به نظر میرسد محصولی که دنبالش بودید یافت نشده است
              </span>
              <Link
                className="text-md py-2 px-7 sm:px-8 sm:py-2 rounded-sm text-white bg-gray-950 hover:bg-[#D1B378] transition-color duration-75 ease-in-out"
                href="/"
              >
                بازگشت به صفحه اصلی
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
