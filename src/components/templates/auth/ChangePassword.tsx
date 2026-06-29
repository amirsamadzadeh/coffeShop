"use client";

import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { IoKeyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import {
  verifyOTpForgotPasswordAction,
  changePasswordAction,
} from "@/actions/auth";

type FormStatus = "VERIFY_OTP" | "CHANGE_PASSWORD";

export const ChangePassword = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>("VERIFY_OTP");

  const [verifyState, verifyAction, verifyPending] = useActionState(
    verifyOTpForgotPasswordAction,
    {
      success: false,
      message: "",
    },
  );

  const [changeState, changeAction, changePending] = useActionState(
    changePasswordAction,
    {
      success: false,
      message: "",
    },
  );

  useEffect(() => {
    if (verifyState.success) {
      setFormStatus("CHANGE_PASSWORD");
    }
  }, [verifyState.success]);

  return (
    <div className="flex flex-col mb-6 animate-fadeIn">
      {formStatus === "VERIFY_OTP" ? (
        <form
          className="flex flex-col px-4 gap-2"
          dir="rtl"
          action={verifyAction}
        >
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            کد تایید ارسال شده را وارد نمایید
          </label>

          <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md bg-gray-50 focus-within:border-[#D1B378] transition-colors">
            <input
              type="text"
              id="phone"
              name="phone"
              className="border-none outline-0 w-full bg-transparent text-sm"
              placeholder="کد تایید"
            />

            <HiMiniDevicePhoneMobile className="text-gray-400" size={20} />
          </div>

          <span className="text-sm text-red-600">{verifyState.message}</span>

          <button
            type="submit"
            disabled={verifyPending}
            className="w-full text-center py-2.5 text-white bg-[#D1B378] rounded-lg mt-6 cursor-pointer hover:bg-[#bfa165] transition-colors font-bold disabled:opacity-60"
          >
            {verifyPending ? "درحال بررسی..." : "تایید کد"}
          </button>
        </form>
      ) : (
        <form
          className="flex flex-col px-4 gap-2"
          dir="rtl"
          action={changeAction}
        >
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            رمز عبور جدید
          </label>

          <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md bg-gray-50 focus-within:border-[#D1B378] transition-colors">
            <input
              type="password"
              id="password"
              name="password"
              className="border-none outline-0 w-full bg-transparent text-sm"
              placeholder="رمز عبور جدید"
            />

            <IoKeyOutline className="text-gray-400" size={20} />
          </div>

          <span className="text-sm text-red-600">{changeState.message}</span>

          <button
            type="submit"
            disabled={changePending}
            className="w-full text-center py-2.5 text-white bg-[#D1B378] rounded-lg mt-6 cursor-pointer hover:bg-[#bfa165] transition-colors font-bold disabled:opacity-60"
          >
            {changePending ? "درحال تغییر رمز..." : "تغییر رمز عبور"}
          </button>
        </form>
      )}
    </div>
  );
};
