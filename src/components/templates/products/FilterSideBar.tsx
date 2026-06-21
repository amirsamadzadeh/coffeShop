"use client";
import { BsFilterRight } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { FormEvent, useState } from "react";
import "@/styles/FilterSideBar.module.css";
import { useRouter, useSearchParams } from "next/navigation";

type categorieTypes = {
  name: string;
  slug: string;
};

type Props = {
  categories: categorieTypes[];
};

export const FilterSideBar = ({ categories }: Props) => {
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
  };

  return (
    <div className="hidden md:flex flex-col rounded-r-md col-span-4 px-2 py-6 bg-white border-l border-l-gray-100 pl-2">
      {/* categories */}
      <div className="flex flex-col px-4">
        {/* title */}
        <div className="flex items-center gap-2 pb-2 border-b border-b-gray-100">
          <BsFilterRight size={20} className="text-[#D1B378]" />
          <span className="text-sm font-bold">دسته بندی ها</span>
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

              <div className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded-sm transition-all peer-checked:bg-[#D1B378] peer-checked:border-[#D1B378]">
                <FaCheck size={14} className="text-white" />
              </div>

              <span>همه محصولات</span>
            </label>
          </div>
          {categories?.map((category: categorieTypes, index) => (
            <div className="flex justify-start items-center gap-2" key={index}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category.slug}
                  className="hidden peer"
                />

                <div className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded-sm transition-all peer-checked:bg-[#D1B378] peer-checked:border-[#D1B378]">
                  <FaCheck size={14} className="text-white" />
                </div>

                <span>{category.name}</span>
              </label>
            </div>
          ))}
        </form>
      </div>

      {/* price Range */}
      <div className="flex flex-col px-4">
        {/* title */}
        <div className="flex items-center gap-2 pb-2 border-b border-b-gray-100 mt-5 mb-2">
          <FaCheck size={20} className="text-[#D1B378]" />
          <span className="text-sm font-bold">رنج قیمت</span>
        </div>

        {/* min price max price filter */}
        <form
          className="flex flex-col gap-4"
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
  );
};
