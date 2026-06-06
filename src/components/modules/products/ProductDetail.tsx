import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { BiComment } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { LuShield } from "react-icons/lu";
// import setTab from '@/components/templates/products/Tabs'

type productDataTypes = {
  _id: string;
  name: string;
  price: Number;
  image: string;
  caffein: string;
  weight: number;
  pakaging: string;
  aroma: string;
  roast: string;
  score: number;
};

type ProductTypes = {
  product: productDataTypes;
};
function ProductDetail({ product }: ProductTypes) {
  return (
    <div className="md:px-3 lg:px-5 xl:px-7 2xl:px-12">
      <div
        className="lg:flex border border-gray-100 rounded-tr-lg rounded-tl-lg lg:rounded-xl w-full  md:px-3 lg:px-0  md:mx-auto bg-white lg:border-b lg:border-b-[#E2E8F0] lg:mb-4 lg:pb-10 lg:mt-8"
        dir="rtl"
      >
        {/* product Image */}
        <div className="flex justify-center items-center lg:border-b lg:border-b-gray-100 lg:border-l lg:border-l-gray-100">
          <Image
            src={product.image}
            fetchPriority="high"
            alt={product.name}
            width={800}
            height={800}
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="w-[90%] mx-auto mt-5 lg:pb-5 lg:border-b lg:border-b-gray-100  lg:pr-4 lg:pl-6">
          {/* product name */}
          <h1 className="text-sm sm:text-base md:text-lg font-semibold  lg:text-xl lg:font-black lg:">
            {product.name}
          </h1>

          {/* rates score comment  / recomendation*/}
          <div className="flex flex-col my-6">
            <div className="lg:grid grid-cols-7 items-start">
              {/* score / comments / add to cart Dekstop */}
              <div className="flex lg:col-span-4 gap-4">
                {/* score */}
                <div className=" flex gap-1 col-span-2 rounded-lg items-center px-1 py-2 border border-gray-100 hover:bg-[#f1f5f9] cursor-pointer">
                  <FaRegStar color="#1e1e20b2" />
                  <span className="text-sm">{product.score}</span>
                  <span className="text-[#1e1e20b2] text-[10px] font-ligth">
                    نمره (از 1 امتیاز)
                  </span>
                </div>

                {/* comments */}
                <div className="flex flex-nowrap gap-1 col-span-2 items-center rounded-lg px-1 py-2 border border-gray-100 hover:bg-[#f1f5f9] cursor-pointer">
                  <BiComment color="#1e1e20b2" />
                  <span className="text[#1e1e20b2] text-[10px] font-light">
                    1 دیدگاه
                  </span>
                </div>
              </div>

              {/* add to cart Desktop */}
              <div className="hidden lg:flex flex-col lg:col-span-3">
                <div className="lg:flex-col py-4 px-5 border border-gray-100 rounded-tr-lg rounded-tl-lg gap-2">
                  <p className="flex justify-end gap-1 items-baseline mb-2 text-3xl font-black">
                    {product.price.toLocaleString("fa-IR")}
                    <span className="text-sm font-medium">تومان</span>
                  </p>
                  <button className="flex justify-center items-end gap-2 text-white bg-[#D1B378] py-2 px-4 rounded-lg cursor-pointer">
                    افزودن به سبد خرید
                    <LuShoppingCart />
                  </button>
                </div>
                <div className="flex flex-col gap-2 py-4 px-5 items-start justify-end border-t-0 border border-gray-100 rounded-br-lg rounded-bl-lg">
                  <p className="flex flex-row-reverse gap-2 text-[#D1B378]">
                    گارانتی اصالت و سلامت فیزیکی کالا
                    <LuShield />
                  </p>
                  <span className="text-[#1e1e2099] text-sm">
                    گارانتی اصالت و سلامت فیزیکی کالا
                  </span>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          {/* Some Property Details */}
          <div className="flex flex-col mb-9 ">
            <h4 className="text-base font-black text-[#1e1e20] my-5">
              ویژگی ها
            </h4>
            <div className="grid grid-cols-6 md:grid-cols-8 gap-2">
              <div className="col-span-3 md:col-span-2  py-2 px-3  gap-1 flex flex-col text-right bg-[#F3F3F4] rounded-lg">
                <span className="opacity-75 text-[1e1e20] text-sm">
                  رایحه (Aroma)
                </span>
                <p>{product.aroma}</p>
              </div>

              <div className="col-span-3 md:col-span-2  py-2 px-3  gap-1 flex flex-col text-right bg-[#F3F3F4] rounded-lg">
                <span className="opacity-75 text-[1e1e20] text-sm">کافئین</span>
                <p>{product.caffein}</p>
              </div>

              <div className="col-span-3  md:col-span-2 py-2 px-3 gap-1 flex flex-col text-right bg-[#F3F3F4] rounded-lg">
                <span className="opacity-75 text-[1e1e20] text-sm">وزن</span>
                <p>{product.weight}</p>
              </div>

              <button className="col-span-3  md:col-span-2 flex items-center justify-center text-sm font-medium whitespace-nowrap text[#1e1e20] p-4 border border-gray-100 rounded-lg hover:bg-[#f1f5f9] cursor-pointer tracking-tighter">
                مشاهده همه ویژگی ها
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
