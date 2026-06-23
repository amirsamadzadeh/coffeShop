import { Search } from "../templates/navbar/Search";
import { CiMenuBurger } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import Link from "next/link";
import { GiCoffeeBeans } from "react-icons/gi";
import { getUserFromToken } from "@/utils/auth";
import { logoutAction } from "@/actions/auth";
import CartSection from "../templates/navbar/CartSection";
import MobileMenu from "../templates/navbar/MobileMenu";
import Image from "next/image";

type userTypes = {
  _id: string;
  name: string;
  email: string;
  phone: number;
  password: number;
  role: string;
};

export const Navbar = async () => {
  const user = await getUserFromToken();

  return (
    <div className="flex flex-col bg-white mx-auto m-0 2xl:px-12 xl:px-7 lg:px-5 md:px-3 px-2">
      {/* NavBar /logo search menu */}
      <div className="py-5">
        <div className="flex flex-row-reverse justify-between gap-3 sm:gap-4 items-center  ">
          {/* burger menu */}
          <MobileMenu user={user} />

          <div className="flex flex-row-reverse items-center justify-center gap-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="w-10 h-5 h-full sm:w-22 md:w-25 lg:w-28 cursor-pointer"
                width={200}
                height={200}
              />
            </Link>
            {/* <Link href="/">
            <img
              src="/images/logo2.svg"
              alt="Logo"
              className="h-auto w-24 cursor-pointer hidden xl:flex"
            />
          </Link> */}
          </div>

          {/* Search input  */}
          <Search />

          {/* md : visible */}
          <div className="hidden md:flex flex-row-reverse md: gap-4">
            {/* user section */}
            <div
              className={`relative group flex flex-row-reverse items-center justify-center gap-1 rounded-sm cursor-pointer px-4 py-2 transition ease-in ${!user && "hover:bg-gray-100"}`}
            >
              {user ? (
                <Link
                  href="/dashboard"
                  className=" group flex flex-row-reverse items-center justify-center gap-2"
                >
                  <span>{user.name ? user.name : "حساب کاربری"}</span>
                  <MdKeyboardArrowDown size={16} />
                  <div className="absolute hidden p-1 group-hover:flex flex-col text-right gap-2  top-full right-0 bg-white border border-gray-100 rounded-lg shadow-md z-50">
                    <span className="text-sm md:text-md  hover:bg-gray-100 w-full py-1 px-3 rounded-md">
                      داشبورد
                    </span>
                    <span className="text-sm md:text-md  hover:bg-gray-100 w-full py-1 px-3 rounded-md">
                      سفارش ها
                    </span>
                    <span className="text-sm md:text-md border-b border-b-gray-100 hover:bg-gray-100 w-full pt-1 pb-2 px-3 rounded-md">
                      اطلاعات کاربری
                    </span>

                    <span
                      className="text-sm md:text-md text-red-700 hover:bg-gray-100 w-full py-1 px-3 rounded-md cursor-pointer text-right"
                      onClick={logoutAction}
                    >
                      خروج
                    </span>
                  </div>
                </Link>
              ) : (
                <Link
                  href="/login-register"
                  className="flex flex-row-reverse items-center justify-center gap-1"
                >
                  <FiUser size={20} />
                  <span>ورود / ثبت نام</span>
                  {/* <MdKeyboardArrowDown size={16} /> */}
                </Link>
              )}
            </div>
            {/* cart section */}
            <CartSection />
          </div>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-end gap-4 mb-2 ">
        <ul className="flex flex-row-reverse items-start gap-4">
          <li className=" text-black hover:bg-[#f1f5f9] transition-colors ease-in delay-75 hover:rounded-lg px-3 py-2 cursor-pointer">
            <Link href="/products" className="flex items-center gap-2">
              محصولات
              <GiCoffeeBeans />
            </Link>
          </li>

          <li className="text-black opacity-75 hover:bg-[#f1f5f9] hover:opacity-100  hover:rounded-lg px-3 py-2 cursor-pointer">
            <Link href="/faq">سوالات متداول</Link>
          </li>
          <li className="text-black opacity-75  hover:bg-[#f1f5f9] hover:opacity-100 hover:rounded-lg px-3 py-2  cursor-pointer">
            <Link href="/about-us">درباره ما</Link>
          </li>
          <li className="text-black opacity-75  hover:bg-[#f1f5f9] hover:opacity-100 hover:rounded-lg  px-3 py-2 cursor-pointer">
            <Link href="/contact-us" className="flex items-center gap-2">
              <LuPhoneCall />
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
