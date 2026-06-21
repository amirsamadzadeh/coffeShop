"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

export const Search = () => {
  const [searchParam, setSearchParam] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchParam);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchParam]);

  useEffect(() => {
    if (!debouncedSearch.trim()) return;

    router.push(`/search?param=${encodeURIComponent(debouncedSearch.trim())}`);
  }, [debouncedSearch, router]);

  return (
    <div className="flex flex-row-reverse gap-2 items-center bg-gray-100 w-full md:w-1/2 h-10 rounded-lg px-3">
      <RiSearch2Line size={20} className="text-gray-500" />

      <input
        type="text"
        value={searchParam}
        onChange={handleChange}
        placeholder="قهوه، اسپرسو، دم‌آوری و ..."
        className="w-full rounded-lg py-3 outline-none bg-transparent"
        dir="rtl"
      />
    </div>
  );
};
