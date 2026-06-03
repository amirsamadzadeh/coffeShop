"use client";
import { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import ScrollToTop from "@/utils/ScrollToTop";

function Footer() {
  const [pageStatus, setPagestatus] = useState<boolean>(false);
  const [linksStatus, setlinksStatus] = useState<boolean>(false);
  const [categorieStatus, setCategorieStatus] = useState<boolean>(false);
  const [accountStatus, setAccountPage] = useState<boolean>(false);
  return (
    <div className="w-full bg-white mt-10 shadow-sm ">
      {/* wrapper */}
      <div className="w-[90%] mx-auto pt-5 ">
        {/* contact section  && link section*/}
        <div
          className="flex flex-col lg:grid lg:grid-cols-6 lg:gap-4 lg:py-10 "
          dir="rtl"
        >
          {/* contact section */}
          <div className="lg:col-span-2">
            {/* Mobile */}
            <div className="flex flex-col lg:hidden text-right py-4">
              <h3 className="text-[#1e1e20] text-base md:text-lg font-black">
                اطلاعات تماس
              </h3>
              <p className="text-[#1e1e20cc] text-sm md:text-base">
                تهران، میرداماد پاساژ ایران, پلاک 220
              </p>
              <div
                className="grid grid-cols-6 mt-2 py-5 gap-5 items-start "
                dir="rtl"
              >
                <div className=" col-span-3 gap-1 flex flex-col ">
                  <h3 className="text-[#1e1e20] text-base font-black">
                    شماره تماس
                  </h3>
                  <a href="02100" className="text-[#1e1e20cc] text-sm">
                    021-00
                  </a>
                </div>

                <div className=" col-span-3 gap-1 flex flex-col">
                  <h3 className="text-[#1e1e20] text-base font-black">
                    ساعت کاری
                  </h3>
                  <p className="text-[#1e1e20cc] text-sm">09:00 الی 20:00</p>
                </div>

                <div className=" col-span-3 gap-1 flex flex-col py-4">
                  <h3 className="text-[#1e1e20] text-base font-black">ایمیل</h3>
                  <a
                    href="mailto:info@test.com"
                    className="text-[#1e1e20cc] text-sm"
                  >
                    info@test.com
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex flex-col  text-right ">
              <h3 className="text-[#1e1e20] text-xl font-black">
                اطلاعات تماس
              </h3>
              <p className="text-[#1e1e20cc] text-base md:text-base">
                تهران، میرداماد پاساژ ایران, پلاک 220
              </p>
              <div
                className="grid grid-cols-6 mt-2 py-5 gap-5 items-start "
                dir="rtl"
              >
                <div className=" col-span-3 gap-1 flex flex-col ">
                  <h3 className="text-[#1e1e20] text-xl font-black">
                    شماره تماس
                  </h3>
                  <a href="02100" className="text-[#1e1e20cc] text-base">
                    021-00
                  </a>
                </div>

                <div className=" col-span-3 gap-1 flex flex-col">
                  <h3 className="text-[#1e1e20] text-xl font-black">
                    ساعت کاری
                  </h3>
                  <p className="text-[#1e1e20cc] text-base">09:00 الی 20:00</p>
                </div>

                <div className=" col-span-3 gap-1 flex flex-col py-4">
                  <h3 className="text-[#1e1e20] text-xl font-black">ایمیل</h3>
                  <a
                    href="mailto:info@test.com"
                    className="text-[#1e1e20cc] text-base"
                  >
                    info@test.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* links section */}
          <div className="lg:col-span-4 lg:justify-between">
            {/* Mobile */}
            <div className="flex flex-col lg:hidden">
              <div className="border-b border-b-gray-100  pb-3">
                {/* title */}
                <div
                  className="flex flex-row justify-between items-center curser-pointer hover:text-[#E3BD69] transition-all ease-in"
                  onClick={() => setPagestatus((prevState) => !prevState)}
                >
                  <h3 className=" text-[#1e1e20] md:text-lg font-black hover:text-[#E3BD69]">
                    صفحات
                  </h3>
                  <MdKeyboardArrowDown />
                </div>
                {/* links */}
                <div
                  className={`flex flex-col  gap-2.5 lg:gap-4 mt-1 ${pageStatus ? "visible" : "hidden"}`}
                >
                  <Link
                    href="/cuprio"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69] transition-color ease-out"
                  >
                    کاپریو
                  </Link>
                  <Link
                    href="/about-us"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    درباره ما
                  </Link>
                  <Link
                    href="/posts"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    بلاگ
                  </Link>
                  <Link
                    href="/about-us"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    تماس با ما
                  </Link>
                  <Link
                    href="/cooperate_with_us"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    همکاری با ما
                  </Link>
                  <Link
                    href="/faq"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    سوالات متداول
                  </Link>
                </div>
              </div>

              <div className="border-b border-b-gray-100  pb-3">
                {/* title */}
                <div
                  className="flex flex-row justify-between text-[#1e1e20] font-black pb-3 pt-3 items-center curser-pointer hover:text-[#E3BD69]"
                  onClick={() => setlinksStatus((prevState) => !prevState)}
                >
                  <h3 className=" text-[#1e1e20] font-black  md:text-lg hover:text-[#E3BD69]">
                    لینک های مفید
                  </h3>
                  <MdKeyboardArrowDown />
                </div>
                {/* links */}
                <div
                  className={`flex flex-col  gap-2.5 lg:gap-4 mt-1 ${linksStatus ? "visible" : "hidden"}`}
                >
                  <Link
                    href="/privacy-policy"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    حریم خصوصی
                  </Link>
                  <Link
                    href="/rules"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    قوانین و مقررات
                  </Link>
                  <Link
                    href="/shipment"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    روش های ارسال
                  </Link>
                  <Link
                    href="/experience"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    اشتراک تجربه
                  </Link>
                </div>
              </div>

              <div className="border-b border-b-gray-100 pb-3">
                {/* title */}
                <div
                  className="flex flex-row justify-between text-[#1e1e20] font-black pb-3 pt-3 items-center curser-pointer hover:text-[#E3BD69]"
                  onClick={() => setCategorieStatus((prevState) => !prevState)}
                >
                  <h3 className=" text-[#1e1e20] font-black md:text-lg hover:text-[#E3BD69]">
                    دسته بندی محصولات
                  </h3>
                  <MdKeyboardArrowDown />
                </div>
                {/* links */}
                <div
                  className={`flex flex-col  gap-2.5 lg:gap-4 mt-1 ${categorieStatus ? "visible" : "hidden"}`}
                >
                  <Link
                    href="/categories/turkish-coffe"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    قهوه ترک
                  </Link>
                  <Link
                    href="/categories/espresso-coffe"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    قهوه اسپرسو
                  </Link>
                  <Link
                    href="/categories/brewed-coffe"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    قهوه دمی
                  </Link>
                  <Link
                    href="/categories/horeca"
                    className="text-[#1e1e20b2] text-sm md:text-base  hover:text-[#E3BD69]"
                  >
                    قهوه هورکا
                  </Link>
                </div>
              </div>

              <div className="border-b border-b-gray-100 pb-3">
                {/* title */}
                <div
                  className="flex flex-row justify-between  font-black text-[#1e1e20b2] hover:text-[#E3BD69] pb-3 pt-3 items-center curser-pointer"
                  onClick={() => setAccountPage((prevState) => !prevState)}
                >
                  <h3 className=" text-[#1e1e20] md:text-lg font-black hover:text-[#E3BD69]">
                    حساب کاربری
                  </h3>
                  <MdKeyboardArrowDown />
                </div>
                {/* links */}
                <div
                  className={`flex flex-col  gap-2.5 lg:gap-4 mt-1 ${accountStatus ? "visible" : "hidden"}`}
                >
                  <Link
                    href="/user/profile/orders"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    سفارشات من
                  </Link>
                  <Link
                    href="/user/profile"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    اطلاعات حساب
                  </Link>
                  <Link
                    href="/user/addresses"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    آدرس ها
                  </Link>
                  <Link
                    href="/user/wishLists"
                    className="text-[#1e1e20b2] text-sm md:text-base hover:text-[#E3BD69]"
                  >
                    علاقه مندی ها
                  </Link>
                </div>
              </div>
            </div>
            {/* Desktop */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-8 text-right">
              <div>
                <h3 className="text-[#1e1e20] md:text-base font-black mb-2">
                  صفحات
                </h3>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="/cuprio"
                    className="text-[#1e1e20b2] text-base md:text-base hover:text-[#E3BD69] transition-color ease-out"
                  >
                    کاپریو
                  </Link>
                  <Link
                    href="/about-us"
                    className="text-[#1e1e20b2] text-base md:text-base hover:text-[#E3BD69]"
                  >
                    درباره ما
                  </Link>
                  <Link
                    href="/posts"
                    className="text-[#1e1e20b2] text-base hover:text-[#E3BD69]"
                  >
                    بلاگ
                  </Link>
                  <Link
                    href="/about-us"
                    className="text-[#1e1e20b2] text-base hover:text-[#E3BD69]"
                  >
                    تماس با ما
                  </Link>
                  <Link
                    href="/cooperate_with_us"
                    className="text-[#1e1e20b2] text-base hover:text-[#E3BD69]"
                  >
                    همکاری با ما
                  </Link>
                  <Link
                    href="/faq"
                    className="text-[#1e1e20b2] text-base hover:text-[#E3BD69]"
                  >
                    سوالات متداول
                  </Link>
                </div>
              </div>

              <div>
                {/* title */}
                <h3 className=" text-[#1e1e20] font-black mb-2 text-base cursor-pointer">
                  لینک های مفید
                </h3>

                {/* links */}
                <div className="flex flex-col  gap-2.5  mt-1">
                  <Link
                    href="/privacy-policy"
                    className="text-[#1e1e20b2] text-base  hover:text-[#E3BD69]"
                  >
                    حریم خصوصی
                  </Link>
                  <Link
                    href="/rules"
                    className="text-[#1e1e20b2] text-base  hover:text-[#E3BD69]"
                  >
                    قوانین و مقررات
                  </Link>
                  <Link
                    href="/shipment"
                    className="text-[#1e1e20b2] text-base  hover:text-[#E3BD69]"
                  >
                    روش های ارسال
                  </Link>
                  <Link
                    href="/experience"
                    className="text-[#1e1e20b2] text-base  hover:text-[#E3BD69]"
                  >
                    اشتراک تجربه
                  </Link>
                </div>
              </div>

              <div>
                {/* title */}
                <h3 className=" text-[#1e1e20] text-nowrap tracking-tight font-black mb-2 text-base cursor-pointer">
                  دسته بندی محصولات
                </h3>

                {/* links */}
                <div className="flex flex-col  gap-2.5 lg:gap-4 mt-1 ">
                  <Link
                    href="/categories/turkish-coffe"
                    className="text-[#1e1e20b2] text-base hover:text-[#E3BD69]"
                  >
                    قهوه ترک
                  </Link>
                  <Link
                    href="/categories/espresso-coffe"
                    className="text-[#1e1e20b2] text-base hover:text-[#E3BD69]"
                  >
                    قهوه اسپرسو
                  </Link>
                  <Link
                    href="/categories/brewed-coffe"
                    className="text-[#1e1e20b2] text-base hover:text-[#E3BD69]"
                  >
                    قهوه دمی
                  </Link>
                  <Link
                    href="/categories/horeca"
                    className="text-[#1e1e20b2] text-base  hover:text-[#E3BD69]"
                  >
                    قهوه هورکا
                  </Link>
                </div>
              </div>

              <div>
                {/* title */}
                <h3 className=" text-[#1e1e20] mb-2 text-base font-black cursor-pointer">
                  حساب کاربری
                </h3>

                {/* links */}
                <div className="flex flex-col  gap-2.5 lg:gap-4 mt-1 ">
                  <Link
                    href="/user/profile/orders"
                    className="text-[#1e1e20b2] text-base hover:text-[#E3BD69]"
                  >
                    سفارشات من
                  </Link>
                  <Link
                    href="/user/profile"
                    className="text-[#1e1e20b2] text-base hover:text-[#E3BD69]"
                  >
                    اطلاعات حساب
                  </Link>
                  <Link
                    href="/user/addresses"
                    className="text-[#1e1e20b2] text-base hover:text-[#E3BD69]"
                  >
                    آدرس ها
                  </Link>
                  <Link
                    href="/user/wishLists"
                    className="text-[#1e1e20b2] text-base hover:text-[#E3BD69]"
                  >
                    علاقه مندی ها
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of contact section && link section */}

        {/* history */}
        <div className="flex flex-col items-end py-10">
          <p className="text-black text-base text-right">
            نخستین تولیدکننده قهوه در ایران از سال ۱۳۱۱، با افتخار نزدیک به یک
            قرن همراه شماست. با تهیه بهترین دانه‌های قهوه از سراسر جهان و ارائه
            ابزارهای دم‌آوری حرفه‌ای، تجربه‌ای اصیل و لذت‌بخش از قهوه را برای
            شما فراهم کرده‌ایم.
          </p>
        </div>

        {/* icons and Scroll to Top*/}
        <div className="flex justify-between items-center gap-3 py-8 ">
          <div className="flex gap-3 items-center">
            <FaInstagram className=" size-5 opacity-50 hover:opacity-100 cursor-pointer" />
            <RiTelegram2Fill className=" size-5 opacity-50 hover:opacity-100 cursor-pointer" />
            <RiTwitterXLine className=" size-5 opacity-50 hover:opacity-100 cursor-pointer" />
          </div>

          <ScrollToTop />
        </div>
      </div>
    </div>
  );
}

export default Footer;
