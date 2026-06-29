"use client";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { Dispatch, SetStateAction } from "react";
import { useActionState, useState, useEffect } from "react";
import { forgotPasswordAction } from "@/actions/auth";

type Props = {
  setFormStatus: Dispatch<
    SetStateAction<
      | "LOGIN"
      | "LOGIN_NUMBER"
      | "REGISTER"
      | "FORGOT-PASSWORD"
      | "CHANGE_PASSWORD"
      | "OTP_VERIFY"
    >
  >;
};

export const ForgotForm = ({ setFormStatus }: Props) => {
  const [state, formAction, isPending] = useActionState(forgotPasswordAction, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (state.success) {
      setFormStatus("CHANGE_PASSWORD");
    }
  }, [state.success]);

  return (
    <div className="flex flex-col mb-6 animate-fadeIn">
      {/* form get Data */}
      <form className="flex flex-col px-4 gap-2" dir="rtl" action={formAction}>
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          فراموشی رمز عبور
        </label>
        <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md bg-gray-50 focus-within:border-[#D1B378] transition-colors">
          <input
            type="text"
            id="phone"
            name="phone"
            className="border-none outline-0 w-full bg-transparent text-sm"
            placeholder="09"
          />
          <HiMiniDevicePhoneMobile className="text-gray-400" size={20} />
        </div>

        <button
          type="submit"
          className="w-full text-center py-2.5 text-white bg-[#D1B378] rounded-lg mt-6 cursor-pointer hover:bg-[#bfa165] transition-colors font-bold"
        >
          {isPending ? "درحال ارسال کد ..." : "بازیابی رمز عبور"}
        </button>
        <span className="text-red-600 text-md">{state.message}</span>
      </form>
    </div>
  );
};
