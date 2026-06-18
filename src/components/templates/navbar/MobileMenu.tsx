"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { GiShoppingBag } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { PiQuestionBold } from "react-icons/pi";
import { GiCoffeeBeans } from "react-icons/gi";
import { RiContactsBook3Line } from "react-icons/ri";

type UserType = {
  _id: string;
  name: string;
  email: string;
  phone: number;
  password: number;
  role: string;
};

type PropsType = {
  user: UserType;
};

const MobileMenu = ({ user }: PropsType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <CiMenuBurger
        size={20}
        className="cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
      />
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
      {/* menu */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-72 bg-white z-50 shadow-2xl
          transition-all duration-300 ease-out
          px-4 py-5
          ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-95"
          }
        `}
      >
        <div className="flex flex-col ">
          {/* dashboard btn and close icon */}
          <div className="flex justify-between items-center pb-4 border-b border-b-gray-100">
            {/* close button */}
            <div className="flex items-start">
              <IoClose
                size={24}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl cursor-pointer"
              />
            </div>
            {/* logo */}
            <Image
              src="/images/logo.png"
              width={100}
              height={50}
              className="w-fit h-fit "
              alt="logo"
            />
          </div>
        </div>
        {/* links */}
        <div className="flex flex-col gap-7 mt-5" dir="rtl">
          <div className="flex gap-3">
            <FaUserAlt className="text-[#D1B378]" size={20} />
            <Link
              className="text-base font-bold "
              href={`${user ? "/dashboard" : "/login-register"}`}
            >
              {user ? "داشبورد" : "ورود / ثبت نام"}
            </Link>
          </div>

          <div className="flex gap-3">
            <GiShoppingBag className="text-[#D1B378]" size={20} />
            <Link className="text-base font-bold" href="/products">
              فروشگاه
            </Link>
          </div>

          <div className="flex gap-3">
            <PiQuestionBold className="text-[#D1B378]" size={20} />
            <Link className="text-base font-bold" href="/faq">
              سوالات متداول
            </Link>
          </div>

          <div className="flex gap-3">
            <GiCoffeeBeans className="text-[#D1B378]" size={20} />
            <Link className="text-base font-bold" href="/about-us">
              درباره ما
            </Link>
          </div>

          <div className="flex gap-3">
            <RiContactsBook3Line className="text-[#D1B378]" size={20} />
            <Link className="text-base font-bold" href="/contact-us">
              تماس با ما
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
