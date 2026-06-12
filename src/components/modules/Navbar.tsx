import { CiMenuBurger } from "react-icons/ci";
import { RiSearch2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { GiCoffeeBeans } from "react-icons/gi";
import { getUserFromToken } from "@/utils/auth";

export const Navbar = async () => {
  const user = await getUserFromToken();

  return (
    <div className="flex flex-col bg-white mx-auto m-0 2xl:px-12 xl:px-7 lg:px-5 md:px-3 px-2">
      {/* NavBar /logo search menu */}
      <div className="py-5">
        <div className="flex flex-row-reverse justify-between gap-3 sm:gap-4 items-center  ">
          {/* burger menu */}
          <CiMenuBurger size={30} className="block md:hidden" />

          <div className="flex flex-row-reverse items-center justify-center gap-4">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-18 h-full sm:w-22 md:w-25 lg:w-28 cursor-pointer"
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

          <div className="flex flex-row-reverse gap-2 items-center bg-gray-100 w-full  md:w-1/2 h-10 rounded-lg px-3">
            <RiSearch2Line size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="قهوه، اسپرسو، دم&zwnj;آوری و ..."
              className="w-full rounded-lg py-3 outline right-5 outline-none"
              dir="rtl"
            />
          </div>

          {/* md : visible */}
          <div className="hidden md:flex flex-row-reverse md: gap-4">
            {/* user section */}
            <div className="flex flex-row-reverse items-center justify-center gap-1 hover:bg-gray-100 rounded-sm cursor-pointer px-4 py-2 transition ease-in">
              {user ? (
                <Link
                  href="/dashboard"
                  className="flex flex-row-reverse items-center justify-center gap-2"
                >
                  <span>{user.name ? user.name : "حساب کاربری"}</span>
                  <MdKeyboardArrowDown size={16} />
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
            <div className="flex items-center justify-center p-2 border border-gray-100 hover:bg-gray-100 rounded-sm cursor-pointer transition ease-in ">
              <BsCart2 size={20} fontWeight={700} />
              <p className="hidden">0 تومان</p>
            </div>
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
          <li className="text-black opacity-75  hover:bg-[#f1f5f9] hover:opacity-100  hover:rounded-lg px-3 py-2  cursor-pointer">
            <Link href="/blogs">بلاگ</Link>
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
