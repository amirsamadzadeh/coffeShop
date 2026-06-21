"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoPersonSharp } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiPlusSquare, FiBox } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

import { logoutAction } from "@/actions/auth";

const SideBar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "داشبورد",
      href: "/control-panel",
      icon: RxDashboard,
    },
    {
      label: "افزودن محصول",
      href: "/control-panel/products/new",
      icon: FiPlusSquare,
    },
    {
      label: "مدیریت محصولات",
      href: "/control-panel/products",
      icon: FiBox,
    },
    {
      label: "سفارش‌ها",
      href: "/control-panel/orders",
      icon: HiOutlineShoppingBag,
    },
  ];

  return (
    <div className="hidden lg:flex lg:flex-col gap-4" dir="rtl">
      {/* admin profile */}
      <div className="flex w-full gap-2 p-2 bg-white border border-gray-100 rounded-lg">
        <div className="flex items-center justify-center p-2 border border-gray-200 bg-gray-100 rounded-sm">
          <IoPersonSharp size={20} />
        </div>

        <div className="flex w-full justify-between items-center pl-4">
          <span>Admin Panel</span>
        </div>
      </div>

      {/* menu */}
      <div className="flex flex-col p-2 bg-white border border-gray-100 rounded-lg shadow-lg">
        <ul className="flex flex-col gap-1 border-b border-gray-100">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <li
                key={item.href}
                className={`py-4 pr-4 transition-colors ${
                  active ? "text-[#D1B378]" : "hover:text-[#D1B378]"
                }`}
              >
                <Link href={item.href} className="flex gap-3 items-center">
                  <Icon size={22} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* logout button */}
        <form action={logoutAction}>
          <button className="flex w-full gap-3 text-red-600 hover:bg-red-100 transition-colors pr-4 py-4 cursor-pointer">
            <FiLogOut size={22} />
            خروج
          </button>
        </form>
      </div>
    </div>
  );
};

export default SideBar;
