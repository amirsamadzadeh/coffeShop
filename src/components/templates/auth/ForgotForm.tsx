import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

export const ForgotForm = () => {
  return (
    <div className="flex flex-col mb-6 animate-fadeIn">
      {/* form get Data */}
      <form className="flex flex-col px-4 gap-2" dir="rtl">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
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
  );
};
