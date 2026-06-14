import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

const page = () => {
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
      <form className="flex flex-col px-4 gap-2" dir="rtl">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          کد یکبار مصرف ارسال شده را وارد کنید
        </label>
        <div className="flex px-3 py-2 items-center justify-between border border-gray-200 rounded-md bg-gray-50 focus-within:border-[#D1B378] transition-colors">
          <input
            type="text"
            id="otp"
            name="ot"
            className="border-none outline-0 w-full bg-transparent text-sm"
            placeholder="09"
          />
          <HiMiniDevicePhoneMobile className="text-gray-400" size={20} />
        </div>

        <div className="flex flex-col gap-2 mt-1">
          <span className="text-xs text-[#D1B378] cursor-pointer hover:underline">
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

export default page;
