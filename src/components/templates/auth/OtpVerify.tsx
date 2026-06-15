import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { Dispatch, SetStateAction } from "react";
import { verifyOtpAction } from "@/actions/auth";
import { useActionState } from "react";
type Props = {
  setFormStatus: Dispatch<
    SetStateAction<
      "LOGIN" | "LOGIN_NUMBER" | "REGISTER" | "FORGOT-PASSWORD" | "OTP_VERIFY"
    >
  >;
};

export const OtpVerify = ({ setFormStatus }: Props) => {
  const [state, formAction, isPending] = useActionState(verifyOtpAction, {
    success: false,
    message: "",
  });
  return (
    <div className="flex flex-col mb-6 animate-fadeIn">
      {/* form get Data */}
      <form className="flex flex-col px-4 gap-2" dir="rtl" action={formAction}>
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          کد یکبار مصرف ارسال شده را وارد کنید
        </label>
        <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md bg-gray-50 focus-within:border-[#D1B378] transition-colors">
          <input
            type="text"
            id="otp"
            name="otp"
            className="border-none outline-0 w-full bg-transparent text-sm"
            placeholder="09"
          />
          <HiMiniDevicePhoneMobile className="text-gray-400" size={20} />
        </div>

        <div className="flex flex-col gap-2 mt-1">
          <span
            className="text-xs text-[#D1B378] cursor-pointer hover:underline"
            onClick={() => setFormStatus("LOGIN_NUMBER")}
          >
            شماره را اشتباه وارد کرده اید؟
          </span>
        </div>

        <button
          type="submit"
          className="w-full text-center py-2.5 text-white bg-[#D1B378] rounded-lg mt-6 cursor-pointer hover:bg-[#bfa165] transition-colors font-bold"
        >
          اعتبار سنجی
        </button>
      </form>
    </div>
  );
};
