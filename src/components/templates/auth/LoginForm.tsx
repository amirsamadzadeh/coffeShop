import { MdOutlineMail } from "react-icons/md";
import { LuKeyRound } from "react-icons/lu";
import { Dispatch, SetStateAction } from "react";

import { useActionState } from "react";
import { loginAction } from "@/actions/auth";

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

export const LoginForm = ({ setFormStatus }: Props) => {
  const [state, formAction, isPending] = useActionState(loginAction, {
    success: false,
    message: "",
  });

  return (
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
      <form className="flex flex-col px-4 gap-2" dir="rtl" action={formAction}>
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          ایمیل
        </label>
        <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md bg-gray-50 focus-within:border-[#D1B378] transition-colors">
          <input
            type="email"
            id="email"
            name="email"
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
            name="password"
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
            onClick={() => setFormStatus("LOGIN_NUMBER")}
          >
            ورود با رمز یکبارمصرف
          </span>
        </div>

        <button
          type="submit"
          className="w-full text-center py-2.5 text-white bg-[#D1B378] rounded-lg mt-6 cursor-pointer hover:bg-[#bfa165] transition-colors font-bold"
          disabled={isPending}
        >
          {isPending ? "درحال ورود  ..." : " ورود به حساب کاربری"}
        </button>
        {state.message && (
          <p className="text-red-500 text-sm mt-2">{state.message}</p>
        )}
      </form>
    </div>
  );
};
