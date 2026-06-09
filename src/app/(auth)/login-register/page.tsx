"use client";
import { useState } from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { LuKeyRound } from "react-icons/lu";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { IoMdArrowBack } from "react-icons/io";

import Link from "next/link";

const LoginOrRegister = () => {
  const [formStatus, setFormStatus] = useState("LOGIN");

  const setForm = (status: string) => {
    switch (status) {
      case "LOGIN": {
        setFormStatus("LOGIN");
        break;
      }
      case "LOGIN_NUMBER": {
        setFormStatus("LOGIN_NUMBER");
        break;
      }
      case "REGISTER": {
        setFormStatus("REGISTER");
        break;
      }
      case "FORGOT-PASSWORD": {
        setFormStatus("FORGOT-PASSWORD");
        break;
      }
      default: {
        setFormStatus("LOGIN");
        break;
      }
    }
  };

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center mx-auto bg-gray-50">
      {/* wrapper */}
      <div className="w-[90%] md:w-112.5 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        {/* Tabs => Login / Register */}
        {formStatus === "FORGOT-PASSWORD" ? null : (
          <div className="flex w-full opacity-75 mb-10">
            {/* Login Tab*/}
            <div
              className="w-1/2 flex items-center flex-col gap-1 relative pb-2 cursor-pointer group"
              onClick={() => setForm("LOGIN")}
            >
              <span className="absolute bottom-0 left-0 w-full h-px bg-gray-100"></span>

              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#D1B378] transition-transform duration-300 origin-center w-full
                ${formStatus === "LOGIN" || formStatus === "LOGIN_NUMBER" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"}
              `}
              ></span>

              <div className="flex items-center gap-2 py-2 px-6">
                <p
                  className={`text-base font-black transition-colors ${formStatus === "LOGIN" ? "text-[#D1B378]" : "text-black opacity-75"}`}
                >
                  ورود
                </p>
                <HiOutlineLogin
                  size={20}
                  className={
                    formStatus === "LOGIN"
                      ? "text-[#D1B378]"
                      : "text-black opacity-75"
                  }
                />
              </div>
            </div>

            {/* Register Tab*/}
            <div
              className="w-1/2 flex items-center flex-col gap-1 relative pb-2 cursor-pointer group"
              onClick={() => setForm("REGISTER")}
            >
              <span className="absolute bottom-0 left-0 w-full h-px bg-gray-100"></span>

              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#D1B378] transition-transform duration-300 origin-center w-full
                ${formStatus === "REGISTER" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"}
              `}
              ></span>

              <div className="flex items-center gap-2 py-2 px-6">
                <p
                  className={`text-base font-black transition-colors ${formStatus === "REGISTER" ? "text-[#D1B378]" : "text-black opacity-75"}`}
                >
                  ثبت نام
                </p>
                <BsFillPersonPlusFill
                  size={20}
                  className={
                    formStatus === "REGISTER"
                      ? "text-[#D1B378]"
                      : "text-black opacity-75"
                  }
                />
              </div>
            </div>
          </div>
        )}

        {/* Login form */}
        {formStatus === "LOGIN" ? (
          <div className="flex flex-col mb-6 animate-fadeIn">
            {/* head title */}
            <div className="flex flex-col gap-2 items-center justify-center mb-6">
              <p className="text-base font-bold" dir="rtl">
                به
                <span className="text-[#D1B378] text-lg mx-2">Roastly</span>
                خوش آمدید
              </p>
              <span className="text-sm opacity-90 text-gray-500">
                ورود به حساب کاربری
              </span>
            </div>
            {/* form get Data */}
            <form className="flex flex-col px-4 gap-2" dir="rtl">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                ایمیل
              </label>
              <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md bg-gray-50 focus-within:border-[#D1B378] transition-colors">
                <input
                  type="email"
                  id="email"
                  className="border-none outline-0 w-full bg-transparent text-sm"
                  placeholder="ایمیل خود را وارد نمایید"
                />
                <MdOutlineMail className="text-gray-400" size={20} />
              </div>

              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 mt-2"
              >
                پسوورد
              </label>
              <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md mb-2 bg-gray-50 focus-within:border-[#D1B378] transition-colors">
                <input
                  type="password"
                  id="password"
                  className="border-none outline-0 w-full bg-transparent text-sm"
                  placeholder="پسوورد خود را وارد کنید"
                />
                <LuKeyRound className="text-gray-400" size={20} />
              </div>

              <div className="flex flex-col gap-2 mt-1">
                <span
                  className="text-xs text-[#D1B378] cursor-pointer hover:underline"
                  onClick={() => setFormStatus("FORGOT-PASSWORD")}
                >
                  فراموشی رمز عبور
                </span>
                <span
                  className="text-xs text-[#D1B378] cursor-pointer hover:underline"
                  onClick={() => setForm("LOGIN_NUMBER")}
                >
                  ورود با رمز یکبارمصرف
                </span>
              </div>

              <button
                type="submit"
                className="w-full text-center py-2.5 text-white bg-[#D1B378] rounded-lg mt-6 cursor-pointer hover:bg-[#bfa165] transition-colors font-bold"
              >
                ورود به حساب کاربری
              </button>
            </form>
          </div>
        ) : null}
        {/* Login OTP */}
        {formStatus === "LOGIN_NUMBER" ? (
          <div className="flex flex-col mb-6 animate-fadeIn">
            {/* head title */}
            <div className="flex flex-col gap-2 items-center justify-center mb-6">
              <p className="text-base font-bold" dir="rtl">
                به
                <span className="text-[#D1B378] text-lg mx-2">Roastly</span>
                خوش آمدید
              </p>
              <span className="text-sm opacity-90 text-gray-500">
                ورود به حساب کاربری
              </span>
            </div>
            {/* form get Data */}
            <form className="flex flex-col px-4 gap-2" dir="rtl">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                شماره تلفن
              </label>
              <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md bg-gray-50 focus-within:border-[#D1B378] transition-colors">
                <input
                  type="text"
                  id="phone"
                  className="border-none outline-0 w-full bg-transparent text-sm"
                  placeholder="09"
                />
                <HiMiniDevicePhoneMobile className="text-gray-400" size={20} />
              </div>

              <div className="flex flex-col gap-2 mt-1">
                <span
                  className="text-xs text-[#D1B378] cursor-pointer hover:underline"
                  onClick={() => setForm("LOGIN")}
                >
                  ورود با ایمیل
                </span>
              </div>

              <button
                type="submit"
                className="w-full text-center py-2.5 text-white bg-[#D1B378] rounded-lg mt-6 cursor-pointer hover:bg-[#bfa165] transition-colors font-bold"
              >
                ارسال کد یکبار مصرف
              </button>
            </form>
          </div>
        ) : null}
        {/* Register Form */}
        {formStatus === "REGISTER" ? (
          <div className="flex flex-col mb-6 animate-fadeIn">
            {/* head title */}
            <div className="flex flex-col gap-2 items-center justify-center mb-6">
              <p className="text-base font-bold" dir="rtl">
                به
                <span className="text-[#D1B378] text-lg mx-2">Roastly</span>
                خوش آمدید
              </p>
              <span className="text-sm opacity-90 text-gray-500">
                ایجاد حساب کاربری جدید
              </span>
            </div>

            {/* form get Data */}
            <form className="flex flex-col px-4 gap-2" dir="rtl">
              <label
                htmlFor="reg-email"
                className="text-sm font-medium text-gray-700"
              >
                ایمیل
              </label>
              <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md bg-gray-50 focus-within:border-[#D1B378] transition-colors">
                <input
                  type="email"
                  id="reg-email"
                  className="border-none outline-0 w-full bg-transparent text-sm"
                  placeholder="ایمیل خود را برای ثبت نام وارد نمایید"
                />
                <MdOutlineMail className="text-gray-400" size={20} />
              </div>

              <label
                htmlFor="reg-password"
                className="text-sm font-medium text-gray-700 mt-2"
              >
                پسوورد
              </label>
              <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md mb-2 bg-gray-50 focus-within:border-[#D1B378] transition-colors">
                <input
                  type="password"
                  id="reg-password"
                  className="border-none outline-0 w-full bg-transparent text-sm"
                  placeholder="یک پسوورد امن انتخاب کنید"
                />
                <LuKeyRound className="text-gray-400" size={20} />
              </div>
              <label
                htmlFor="reg-phone"
                className="text-sm font-medium text-gray-700 mt-2"
              >
                شماره تلفن
              </label>
              <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md mb-2 bg-gray-50 focus-within:border-[#D1B378] transition-colors">
                <input
                  type="text"
                  id="reg-phone"
                  className="border-none outline-0 w-full bg-transparent text-sm"
                  placeholder="09"
                />
                <HiMiniDevicePhoneMobile className="text-gray-400" size={20} />
              </div>
              <button
                type="submit"
                className="w-full text-center py-2.5 text-white bg-[#D1B378] rounded-lg mt-6 cursor-pointer hover:bg-[#bfa165] transition-colors font-bold"
              >
                ثبت نام
              </button>
            </form>
          </div>
        ) : null}

        {/* ForgotPassword */}
        {formStatus === "FORGOT-PASSWORD" ? (
          <div className="flex flex-col mb-6 animate-fadeIn">
            {/* form get Data */}
            <form className="flex flex-col px-4 gap-2" dir="rtl">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                فراموشی رمز عبور
              </label>
              <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md bg-gray-50 focus-within:border-[#D1B378] transition-colors">
                <input
                  type="text"
                  id="phone"
                  className="border-none outline-0 w-full bg-transparent text-sm"
                  placeholder="09"
                />
                <HiMiniDevicePhoneMobile className="text-gray-400" size={20} />
              </div>

              <button
                type="submit"
                className="w-full text-center py-2.5 text-white bg-[#D1B378] rounded-lg mt-6 cursor-pointer hover:bg-[#bfa165] transition-colors font-bold"
              >
                بازیابی رمز عبور
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LoginOrRegister;
