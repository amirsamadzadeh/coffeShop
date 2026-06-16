"use client";

import { BsCart2 } from "react-icons/bs";
import useCartStore from "@/store/cart";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

type CartItem = {
  name: string;
  id: string;
  price: number;
  image: string;
  quantity: number;
};

const CartSection = () => {
  const products: CartItem[] = useCartStore((state) => state.products);

  const count: number = products.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <div className="relative group">
      {/* cart button */}
      <div className="relative flex items-center justify-center p-2 border border-gray-100 hover:bg-gray-100 rounded-sm cursor-pointer transition ease-in">
        <BsCart2 size={20} fontWeight={700} />

        <span className="absolute text-center w-fit -top-2 -right-1 translate-x-1/2  bg-[#D1B378] rounded-sm text-gray-200 py-1 px-2 text-[8px]">
          {count.toLocaleString("fa-IR")}
        </span>
      </div>

      {/* dropdown */}
      <div
        dir="rtl"
        className="absolute left-0 top-full z-50 hidden w-80 flex-col gap-2 rounded-lg border border-gray-100 bg-white p-3 text-right shadow-lg group-hover:flex"
      >
        {count > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-[56px_1fr_auto] items-center gap-3 border-b border-gray-100 pb-2 last:border-b-0 last:pb-0"
            >
              <Link href={`/products/${product.id}`}>
                <Image
                  alt="product"
                  src={product.image}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-md object-cover"
                />
              </Link>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-gray-800">
                  {product.name}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  عدد {product.quantity.toLocaleString("fa-IR")}
                </p>
              </div>

              <span className="whitespace-nowrap text-sm font-bold text-gray-900">
                {product.price.toLocaleString("fa-IR")}
                <span className="mr-1 text-xs font-normal text-gray-500">
                  تومان
                </span>
              </span>
            </div>
          ))
        ) : (
          <div className="p-3 text-center text-sm text-gray-500">
            سبد خرید خالی است
          </div>
        )}
        {count > 0 ? (
          <Link
            href="/cart"
            className="flex gap-2 text-white text-md bg-[#D1B378] opacity-95 items-center justify-center rounded-md py-2.5 hover:opacity-100"
          >
            تکمیل خرید
            <IoIosArrowBack />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default CartSection;
