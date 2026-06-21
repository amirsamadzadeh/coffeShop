"use client";
import { useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { BsFilterLeft } from "react-icons/bs";
import { LuTag } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";

type categorieTypes = {
  name: string;
  slug: string;
};

type Props = {
  categories: categorieTypes[];
};

export const FilterBar = ({ categories }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (slug: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("category", slug);

    router.push(`/products?${params.toString()}`);
  };
  const handlePriceChange = (event: React.FormEvent) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams);

    params.set("minPrice", minPrice.toString());

    params.set("maxPrice", maxPrice.toString());

    router.push(`/products?${params.toString()}`);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:hidden w-full" dir="rtl">
      {/* filter menu title */}
      <div
        className="flex justify-end px-2 cursor-pointer mt-5 "
        onClick={() => setIsMenuOpen(true)}
      >
        <span className="flex text-nowrap text-md items-center  border border-[#D1B378] rounded-sm  py-1 px-2.5 gap-2 w-fit">
          فیلتر ها
          <BsFilterLeft />
        </span>
      </div>

      {/* menu */}
      <div
        className={`fixed bg-white bottom-0 w-full h-[70%] overflow-y-scroll scrollbar-gold z-50 shadow-2xl transition-all duration-300 ease-out ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-95"}`}
      >
        {/* wrapper */}
        <div className="flex flex-col pr-3 pl-1 py-3">
          {/* head titles and close button */}
          <div className="flex w-full justify-between items-center px-2 pb-1.5 border-b border-b-gray-100">
            <span className="text-md font-bold">فیلتر ها</span>
            <IoCloseOutline
              size={18}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer"
            />
          </div>

          {/* categories */}
          <div className="flex flex-col  mt-2">
            {/* title */}
            <div className="flex items-center gap-2 pb-2 pr-1">
              <LuTag size={16} className="text-[#D1B378]" />
              <span className="text-sm">دسته بندی ها</span>
            </div>

            {/* select category */}
            <form
              className="flex flex-col pb-2 pr-2 mt-2 gap-4 border-b border-b-gray-100"
              dir="rtl"
              onChange={(event) => handleCategoryChange(event.target.value)}
            >
              <div className="flex justify-start items-center gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="allProducts"
                    className="hidden peer"
                  />

                  <div className="flex items-center justify-center w-4 h-4 border border-gray-400 rounded-sm transition-all peer-checked:bg-[#D1B378] peer-checked:border-[#D1B378]">
                    <FaCheck size={14} className="text-white" />
                  </div>

                  <span className="text-sm">همه محصولات</span>
                </label>
              </div>
              {categories?.map((category: categorieTypes, index) => (
                <div
                  className="flex justify-start items-center gap-2"
                  key={index}
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={category.slug}
                      className="hidden peer"
                    />

                    <div className="flex items-center justify-center w-4 h-4 border border-gray-400 rounded-sm transition-all peer-checked:bg-[#D1B378] peer-checked:border-[#D1B378]">
                      <FaCheck size={14} className="text-white" />
                    </div>

                    <span className="text-xs">{category.name}</span>
                  </label>
                </div>
              ))}
            </form>
          </div>

          {/* min price max price filter */}
          <form
            className="flex flex-col gap-4 mt-2"
            dir="rtl"
            onSubmit={handlePriceChange}
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">حداقل قیمت</label>

              <input
                type="range"
                min={0}
                max={10000000}
                step={50000}
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="range-gold"
              />

              <span className="text-sm text-gray-500">
                {minPrice.toLocaleString("fa-IR")} تومان
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">حداکثر قیمت</label>

              <input
                type="range"
                min={0}
                max={10000000}
                step={50000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="range-gold"
              />

              <span className="text-sm text-gray-500">
                {maxPrice.toLocaleString("fa-IR")} تومان
              </span>
            </div>

            <button
              type="submit"
              className="bg-[#D1B378] text-white py-2 rounded-md hover:opacity-90 transition cursor-pointer"
            >
              اعمال فیلتر
            </button>
          </form>
        </div>
      </div>
      {/* layer */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`
          fixed inset-0 bg-black z-40
          transition-all duration-300 ease-out
          ${
            isMenuOpen
              ? "opacity-40 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />
      {isMenuOpen ? <div></div> : null}
    </div>
  );
};
