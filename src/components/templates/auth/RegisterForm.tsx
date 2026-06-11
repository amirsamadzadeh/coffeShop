import { MdOutlineMail } from "react-icons/md";
import { LuKeyRound } from "react-icons/lu";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { useActionState } from "react";
import { registerAction } from "@/actions/auth";

export const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerAction, {
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
          ایجاد حساب کاربری جدید
        </span>
      </div>

      {/* form get Data */}
      <form className="flex flex-col px-4 gap-2" dir="rtl" action={formAction}>
        <label
          htmlFor="reg-email"
          className="text-sm font-medium text-gray-700"
        >
          ایمیل
        </label>
        <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md bg-gray-50 focus-within:border-[#D1B378] transition-colors">
          <input
            type="email"
            name="email"
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
            name="password"
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
            name="phone"
            id="reg-phone"
            className="border-none outline-0 w-full bg-transparent text-sm"
            placeholder="09"
          />
          <HiMiniDevicePhoneMobile className="text-gray-400" size={20} />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full text-center py-2.5 text-white bg-[#D1B378] rounded-lg mt-6 cursor-pointer hover:bg-[#bfa165] transition-colors font-bold"
        >
          {isPending ? "ثبت نام کاربر ..." : "ثبت نام"}
        </button>
        {state.message && state.success === false && (
          <p className="text-red-500 text-sm mt-2">{state.message}</p>
        )}
      </form>
    </div>
  );
};
