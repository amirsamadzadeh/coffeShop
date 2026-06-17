"use client";

import { LuShoppingCart } from "react-icons/lu";
import useCartStore from "@/store/cart";

type CartProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  weight: number;
  roast: string;
};

type Props = {
  product: CartProduct;
};

const AddToCartButton = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addProduct);

  return (
    <button
      onClick={() => addToCart(product)}
      className="flex justify-center items-center gap-2 text-white bg-[#D1B378] py-2 px-4 rounded-lg cursor-pointer"
    >
      افزودن به سبد خرید
      <LuShoppingCart />
    </button>
  );
};

export default AddToCartButton;
