"use client";
import Link from "next/link";
import {
  IoPersonSharp,
  IoWalletOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/actions/auth";

export const SideBar = () => {
  const pathName = usePathname();

  return (
    <div className="hidden lg:flex lg:flex-col gap-4" dir="rtl">
      {/* profile Section */}
      <div className="flex  w-full gap-2 p-2 bg-white border border-gray-100 rounded-lg">
        {/* profile icon */}
        <div className="flex items-center justify-center p-2 border border-gray-200 bg-gray-100 rounded-sm">
          <IoPersonSharp size={20} fontWeight={700} />
        </div>

        {/* User Name */}
        <div className="flex w-full justify-between items-center pl-4">
          <span>امیرحسین</span>
          <Link href="/dashboard/profile">
            <MdEdit className="cursor-pointer" size={20} />
          </Link>
        </div>
      </div>

      {/* Dashboard  Menu */}
      <div className="flex flex-col p-2 bg-white border border-gray-100 rounded-lg shadow-lg">
        {/* Menus */}
        <ul className="flex flex-col border-b border-b-gray-100 gap-1 ">
          <li
            className={`py-4 pr-4 hover:text-[#D1B378] ${pathName === "/dashboard" && "text-bold text-[#D1B378]"}`}
          >
            <Link href="/dashboard" className="flex gap-3 hover:text-[#D1B378]">
              <RxDashboard size={24} />
              پیشخوان
            </Link>
          </li>

          <li
            className={`py-4 pr-4 hover:text-[#D1B378] ${pathName === "/dashboard/wallet" && "text-bold text-[#D1B378]"}`}
          >
            <Link href="/dashboard/wallet" className="flex gap-3">
              <IoWalletOutline size={24} />
              کیف پول
            </Link>
          </li>

          <li
            className={`py-4 pr-4 hover:text-[#D1B378] ${pathName === "/dashboard/orders" && "text-bold text-[#D1B378]"}`}
          >
            <Link href="/dashboard/orders" className="flex gap-3">
              <HiOutlineShoppingBag size={24} />
              سفارش ها
            </Link>
          </li>

          <li
            className={`py-4 pr-4 hover:text-[#D1B378] ${pathName === "/dashboard/addresses" && "text-bold text-[#D1B378]"}`}
          >
            <Link href="/dashboard/addresses" className="flex gap-3">
              <IoLocationOutline size={24} />
              آدرس ها
            </Link>
          </li>

          <li
            className={`py-4 pr-4 hover:text-[#D1B378] ${pathName === "/dashboard/wishlist" && "text-bold text-[#D1B378]"}`}
          >
            <Link href="/dashboard/wishlist" className="flex gap-3">
              <FaRegHeart size={24} />
              لیست علاقه مندی
            </Link>
          </li>

          <li
            className={`py-4 pr-4 hover:text-[#D1B378] ${pathName === "/dashboard/reviews" && "text-bold text-[#D1B378]"}`}
          >
            <Link href="/dashboard/reviews" className="flex gap-3">
              <GoComment size={24} />
              دیدگاه ها
            </Link>
          </li>

          <li
            className={`py-4 pr-4 hover:text-[#D1B378] ${pathName === "/dashboard/profile" && "text-bold text-[#D1B378]"}`}
          >
            <Link href="/dashboard/profile" className="flex gap-3">
              <MdEdit size={24} />
              ویرایش اطلاعات کاربری
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <form action={logoutAction} className="w-full ">
          <button className="flex w-full gap-3 text-red-600 rounded-sm hover:bg-red-100 transition-colors delay-75 text-right pr-4 py-4 cursor-pointer">
            <FiLogOut size={24} />
            خروج
          </button>
        </form>
      </div>
    </div>
  );
};
