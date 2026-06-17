"use client";
import useCartStore from "@/store/cart";
import Image from "next/image";
import { MdClear } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiOutlineTag } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoTrashOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import Link from "next/link";
type productsType = {
  id: string;
  name: string;
  price: number;
  image: string;
  weight: number;
  roast: string;
};

type AddProductProps = {
  name: string;
  id: string;
  price: number;
  image: string;
  weight: number;
  roast: string;
};

type CartStore = {
  products: productsType[];
  addProduct: (product: AddProductProps) => void;
  removeProduct: (product: productsType) => void;
  increaseQuantity: (product: productsType) => void;
  decreaseQuantity: (product: productsType) => void;
};

const Cart = () => {
  const { products, increaseQuantity, decreaseQuantity, removeProduct } =
    useCartStore();

  const totalPrice = products.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <>
      {products.length > 0 ? (
        <div
          className="mt-5 mb-5 px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-12"
          dir="rtl"
        >
          {/* wrapper */}

          {/* Mobile until 640px */}
          <div
            className="md:hidden flex flex-col bg-white shadow-sm border border-gray-100 rounded-lg p-2"
            dir="rtl"
          >
            {/* head */}
            <div className="flex items-center gap-2.5">
              {/* icon */}
              <div className="flex items-center justify-center bg-[#D1B378] rounded-full p-2">
                <HiOutlineShoppingBag size={20} className="text-white" />
              </div>
              {/* titles */}
              <div className="flex flex-col gap-1 ">
                <h3 className="font-bold text-md">سبد خرید</h3>
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  <span>{products.length.toLocaleString("fa-IR")}</span>
                  کالا در سبد خرید شما
                </span>
              </div>
            </div>

            {/* product items */}
            <div className="flex flex-col gap-2.5 mt-5">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-1 border border-gray-100 rounded-lg shadow-sm"
                >
                  {/* produt image */}
                  <div className="flex items-center">
                    <Image
                      src={item.image}
                      height={200}
                      width={200}
                      className="w-22 h-22 object-cover"
                      alt="product image"
                    />
                  </div>

                  {/* Details / name / price / increase decrease buttons / remove item*/}
                  <div className="flex w-full flex-col gap-1">
                    {/* name / roast / remove item button */}
                    <div className="flex pt-4 justify-between">
                      <div className="flex flex-col">
                        <span className="flex text-wrap text-bold text-md sm:text-base">
                          {item.name}
                        </span>
                      </div>

                      {/* clear cart icon */}
                      <div className="flex pl-2 cursor-pointer">
                        <MdClear onClick={() => removeProduct(item)} />
                      </div>
                    </div>

                    {/* increase / decrease buttons and price */}
                    <div className="flex flex-col gap-2.5 pl-2 items-end">
                      {/* buttons and roast/weight */}
                      <div className="flex flex-row-reverse w-full justify-between">
                        {/* buttons */}
                        <div className="flex border border-gray-100 rounded-lg">
                          <button
                            className="border-l py-1 min-[400px]:py-2 px-1.5 min-[400px]:px-3 border-l-gray-100"
                            onClick={() => decreaseQuantity(item)}
                          >
                            -
                          </button>
                          <span className="py-1 min-[400px]:py-2 px-2 min-[400px]:px-4">
                            {item.quantity}
                          </span>
                          <button
                            className="border-r py-1 min-[400px]:py-2 px-1.5 min-[400px]:px-3 border-r-gray-100"
                            onClick={() => increaseQuantity(item)}
                          >
                            +
                          </button>
                        </div>
                        {/* weight and roast  */}
                        <div className="flex gap-1 text-xs min-[400px]:text-sm text-gray-400">
                          <span>
                            {item.weight}
                            گرم
                          </span>
                          <span>
                            روست&nbsp;
                            {item.roast}
                          </span>
                        </div>
                      </div>
                      {/* price */}
                      <div className="flex gap-1">
                        <span className="text-md">
                          {item.price.toLocaleString("fa-IR")}
                        </span>
                        <span className="text-sm ">تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* final price checkout */}
            <div className="flex flex-col bg-linear-to-br from-[#D1B378]/10 to-[#D1B378]/20 rounded-md p-2 mt-3">
              {/* prices and shipping*/}
              <div className="flex flex-col">
                {/* price */}
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">
                    جمع جزء &nbsp; ({products.length.toLocaleString("fa-IR")}
                    کالا )
                  </span>

                  <span className="text-sm text-gray-400">
                    {totalPrice.toLocaleString("fa-IR")} &nbsp;
                    <span className="text-xs">تومان</span>
                  </span>
                </div>
                {/* shipping fee */}
                <div className="flex justify-between pb-2 border-b border-b-gray-100">
                  <span className="text-sm text-gray-400">هزینه ارسال</span>
                  <span className="text-sm text-green-500">رایگان</span>
                </div>
                {/* all prices after calc */}
                <div className="flex flex-col gap-2">
                  {/* final price */}
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">مجموع</span>
                    <span className="text-md text-[#D1B378]">
                      {totalPrice.toLocaleString("fa-IR")}
                      &nbsp;
                      <span className="text-xs">تومان</span>
                    </span>
                  </div>
                </div>

                {/* discount input */}
                <div className="flex justify-between border border-gray-200 rounded-md mt-3">
                  <div className="flex gap-2 items-center px-2 py-2.5 overflow-hidden">
                    <HiOutlineTag
                      size={18}
                      className="text-gray-400 ml-2.5 border-l border-l-gray-100"
                    />
                    <input
                      type="text"
                      className="outline-0 border-0"
                      placeholder="کد تخفیف"
                    />
                  </div>
                  <div className="flex items-center rounded-l-sm bg-[#D1B378] px-1.5 py-1.5">
                    <IoIosArrowRoundBack
                      size={20}
                      className=" text-white cursor-pointer"
                    />
                  </div>
                </div>

                <button className="flex rounded-lg py-2 items-center justify-center gap-2.5 text-[#D1B378] bg-gray-950 mt-5 cursor-pointer">
                  <HiOutlineShoppingBag />
                  تایید و پرداخت
                </button>
              </div>
            </div>
          </div>

          {/* Desktop After 640px*/}
          <div className="hidden md:flex flex-col bg-white border border-gray-100 rounded-lg shadow-sm p-2">
            {/* head */}
            <div className="flex items-center gap-2.5">
              {/* icon */}
              <div className="flex items-center justify-center bg-[#D1B378] rounded-full p-2">
                <HiOutlineShoppingBag size={20} className="text-white" />
              </div>
              {/* titles */}
              <h3 className="font-bold text-lg">سبد خرید</h3>
            </div>
            {/* cart */}
            <div className="grid grid-cols-6 items-start mt-5 sm:gap-5 md:gap-4">
              {/* product items*/}
              <div className="flex flex-col h-fit  col-span-4 gap-4 ">
                {/* items */}
                {products.map((item) => (
                  <div
                    className="flex justify-between border border-gray-100 rounded-md"
                    key={item.id}
                  >
                    {/* product Detail > image,name,price */}
                    <div className="flex gap-2.5 items-center">
                      <Image
                        src={item.image}
                        width={250}
                        height={250}
                        className="w-48 h-48 object-cover border-l border-l-gray-100"
                        alt="product image"
                      />

                      <div className="flex flex-col items-start text-wrap whitespace-break-spaces gap-2.5">
                        {/* name */}
                        <span className="text-bold text-wrap sm:max-w-20 md:max-w-full overflow-hidden sm:text-sm md:text-base">
                          {item.name}
                        </span>
                        {/* price */}
                        <span className="flex gap-2 sm:text-md md:text-base">
                          {item.price.toLocaleString("fa-IR")}
                          <span className="text-md">تومان</span>
                        </span>
                      </div>
                    </div>

                    {/* increase/deacrease entity or clear cart */}
                    <div className="flex gap-4 items-center pl-4">
                      {/* buttons */}
                      <div className="flex flex-col items-center border border-gray-100 md:border-0 md:flex-row text-center">
                        <button
                          className="w-fit h-fit p-1 border-b border-b-gray-100 md:border-t md:border-r md:border-b md:border-t-gray-100 md:border-r-gray-100 md:border-b-gray-100 cursor-pointer"
                          onClick={() => decreaseQuantity(item)}
                        >
                          -
                        </button>
                        <span className="w-fit h-fit py-1 px-3 md:border md:border-gray-100">
                          {item.quantity}
                        </span>

                        <button
                          className="w-fit h-fit p-1 border-t border-t-gray-100 md:border-t md:border-l md:border-b md:border-t-gray-100 md:border-l-gray-100 md:border-b-gray-100 cursor-pointer"
                          onClick={() => increaseQuantity(item)}
                        >
                          +
                        </button>
                      </div>

                      {/* clear cart icon */}
                      <div className="flex items-start cursor-pointer">
                        <MdClear onClick={() => removeProduct(item)} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* summary detail / copoun code / total price */}
              <div className="flex flex-col h-fit items-self-start col-span-2 p-2 lg:p-2.5 border border-gray-100 rounded-lg">
                <h4 className="text-lg font-bold">خلاصه سفارش</h4>
                {/* details */}
                <div className="flex flex-col border-b border-b-gray-100 pb-3 gap-3.5 mt-6">
                  {/* total */}
                  <div className="flex justify-between">
                    <span className="text-md">جمع جزء</span>
                    <span className="flex gap-2 text-base">
                      {totalPrice.toLocaleString("fa-IR")}
                      <span className="text-sm">تومان</span>
                    </span>
                  </div>
                  {/* shipping fee */}
                  <div className="flex justify-between">
                    <span className="text-md">هزینه ارسال</span>
                    <span className="text-md text-green-400">رایگان</span>
                  </div>

                  {/* discount */}
                  <div className="flex justify-between">
                    <span className="text-md">تخفیف</span>
                    <span>---</span>
                  </div>
                </div>

                {/* final price */}
                <div className="flex justify-between mt-4">
                  <span className="text-lg">مجموع</span>

                  {/* price detail */}
                  <div className="flex flex-col gap-1">
                    <div className="gap-1.5 w-full ">
                      <span className="flex w-full gap-2 justify-end items-center text-lg font-bold text-[#D1B378]">
                        {totalPrice.toLocaleString("fa-IR")}
                        <span className="text-sm">تومان</span>
                      </span>
                    </div>

                    <span className="text-sm text-gray-400">
                      (شامل مالیات بر ارزش افزوده)
                    </span>
                  </div>
                </div>
                {/* discount input */}
                <div className="flex justify-between border border-gray-100 rounded-md mt-3">
                  <div className="flex gap-2 items-center px-2 py-2.5 overflow-hidden">
                    <HiOutlineTag size={20} className="text-gray-400 ml-2.5" />
                    <input
                      type="text"
                      className="outline-0 border-0"
                      placeholder="کد تخفیف"
                    />
                  </div>
                  <div className="flex items-center rounded-l-md bg-[#D1B378] px-2.5 py-2.5">
                    <IoIosArrowRoundBack
                      size={20}
                      className=" text-white cursor-pointer"
                    />
                  </div>
                </div>
                <span className="text-sm text-gray-400 mt-2">
                  اگر کد تخفیف دارید , در این قسمت وارد کنید.
                </span>

                <button className="flex rounded-lg py-3 items-center justify-center gap-2.5 text-[#D1B378] bg-gray-950 mt-5 cursor-pointer">
                  <HiOutlineShoppingBag />
                  ادامه و ثبت سفارش
                </button>
              </div>
            </div>

            {/* support */}
            <div className="grid grid-cols-6 border border-gray-100 rounded-md my-5 py-2">
              <div className="flex gap-2.5 col-span-2 items-center justify-center border-l border-l-gray-100">
                <BiSupport className="text-md text-[#D1B378]" size={26} />
                <div className="flex flex-col text-md text-gray-400">
                  <span>پشتیبانی 24/7</span>
                  <span>همیشه در کنار شما هستیم</span>
                </div>
              </div>

              <div className="flex gap-2.5 col-span-2 items-center justify-center border-l border-l-gray-100">
                <FaShippingFast className="text-[#D1B378]" size={26} />
                <div className="flex flex-col">
                  <span className="text-[#D1B378]">ارسال رایگان</span>
                  <span className="text-md text-gray-400">
                    همیشه در کنار شما هستیم
                  </span>
                </div>
              </div>

              <div className="flex gap-2.5 col-span-2 items-center justify-center">
                <LuShieldCheck className="text-[#D1B378]" size={26} />
                <div className="flex flex-col">
                  <span className="text-[#D1B378]">پشتیبانی 24/7</span>
                  <span className="text-md text-gray-400">
                    همیشه در کنار شما هستیم
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <h4 className="text-lg font-bold">سبد خرید شما خالی است !</h4>
            <span className="hidden min-[400px]:flex text-sm text-gray-400">
              به نظر می رسد هنوز هیچ محصولی به سبد خرید خود اضافه نکرده اید.
            </span>
            <Link
              className="text-md py-2 px-7 sm:px-8 sm:py-2 rounded-sm text-white bg-gray-950 hover:bg-[#D1B378] transition-color duration-75 ease-in-out"
              href="/products"
            >
              بازگشت به فروشگاه
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
