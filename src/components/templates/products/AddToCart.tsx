import { LuShoppingCart } from "react-icons/lu";

type PropsType = {
  price: number;
};

const AddToCart = ({ price }: PropsType) => {
  return (
    <div className="fixed lg:hidden shadow-sm z-50 inset-x-0 bottom-0 bg-white">
      <div className="flex justify-between p-3 border border-gray-100 rounded-tr-lg rounded-tl-lg gap-2">
        <p className="flex flex-row-reverse items-center justify-end gap-1 mb-2 text-lg">
          {price.toLocaleString("fa-IR")}
          <span className="text-sm font-black">تومان</span>
        </p>
        <button className="flex flex-row-reverse justify-center items-center gap-2 text-white bg-[#D1B378] py-3 px-5 rounded-lg cursor-pointer text-sm">
          افزودن به سبد خرید
          <LuShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
