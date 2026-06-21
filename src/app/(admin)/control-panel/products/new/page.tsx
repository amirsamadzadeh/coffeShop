"use client";
import { useActionState } from "react";
import { addProductAction } from "@/actions/auth";

const page = () => {
  const [state, formAction, isPending] = useActionState(addProductAction, {
    success: false,
    message: "",
  });
  return (
    <div
      className="flex flex-col  bg-white px-2 pl-4 pb-6 pt-4 rounded-md shadow-md"
      dir="rtl"
    >
      <h3 className="text-base font-bold">افزودن محصول جدید</h3>

      <form action={formAction} className="grid grid-cols-12 mt-5 gap-2">
        {/* image */}
        <div className="col-span-6 flex flex-col gap-1">
          <label htmlFor="name">عکس محصول</label>
          <input
            type="file"
            name="image"
            className="border border-gray-100  outline-0 px-3 py-1 rounded-md"
          />
        </div>
        {/* product name */}
        <div className="col-span-6 flex flex-col gap-1">
          <label htmlFor="name">نام محصول</label>
          <input
            type="text"
            name="name"
            className="border border-gray-100  outline-0 px-3 py-1 rounded-md"
          />
        </div>
        {/* product price */}
        <div className="col-span-6 flex flex-col gap-1">
          <label htmlFor="price">قیمت </label>
          <input
            type="text"
            name="price"
            className="border border-gray-100  outline-0 px-3 py-1 rounded-md"
            placeholder="قیمت به تومان"
          />
        </div>
        {/* product weight */}
        <div className="col-span-6 flex flex-col gap-1">
          <label htmlFor="weight">وزن </label>
          <input
            type="text"
            name="weight"
            className="border border-gray-100  outline-0 px-3 py-1 rounded-md"
            placeholder="وزن به گرم"
          />
        </div>
        {/* product packaging */}
        <div className="col-span-6 flex flex-col gap-1">
          <label htmlFor="packaging">نوع بسته بندی </label>
          <input
            type="text"
            name="packaging"
            className="border border-gray-100  outline-0 px-3 py-1 rounded-md"
          />
        </div>
        {/* aroma */}
        <div className="col-span-6 flex flex-col gap-1">
          <label htmlFor="aroma">رایحه</label>
          <input
            type="text"
            name="aroma"
            className="border border-gray-100  outline-0 px-3 py-1 rounded-md"
          />
        </div>
        {/* roast */}
        <div className="col-span-6 flex flex-col gap-1">
          <label htmlFor="roast">نوع رست</label>
          <input
            type="text"
            name="roast"
            className="border border-gray-100  outline-0 px-3 py-1 rounded-md"
          />
        </div>
        {/* category */}
        <div className="col-span-6 flex flex-col gap-1">
          <label htmlFor="category">دسته بندی</label>
          <input
            type="text"
            name="category"
            className="border border-gray-100  outline-0 px-3 py-1 rounded-md"
          />
        </div>
        <button
          className="col-span-6 w-fit  bg-[#D1B378] cursor-pointer rounded-md text-center text-base text-white py-1.5 px-4 "
          type="submit"
        >
          {isPending ? "درحال اضافه کردن محصول" : "اضافه کردن محصول"}
        </button>
      </form>
    </div>
  );
};

export default page;
