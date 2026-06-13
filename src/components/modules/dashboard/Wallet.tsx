import { IoWalletOutline } from "react-icons/io5";

export const Wallet = () => {
  return (
    <div
      className="flex flex-col sm:col-span-3 bg-white px-2 pl-4 pb-6 pt-4 rounded-md shadow-md"
      dir="rtl"
    >
      {/* head titles */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-[#D1B378]  rounded-md p-2">
            <IoWalletOutline size={20} className="text-white" />
          </div>
          <p className="text-md ">شارژ کیف پول</p>
        </div>
      </div>

      {/* contents */}
      <div className="flex flex-col justify-center px-2 py-4 mt-4">
        {/* balance */}
        <div className="flex flex-col gap-2 justify-center items-center border-b border-b-gray-100 pb-4">
          <p className="text-gray-400 text-sm">موجودی فعلی شما</p>
          <span className=" text-md">0</span>
          <span className="text-sm text-gray-400">تومان</span>
        </div>
        {/* charge balance */}
        <div className="flex flex-col justify-center items-center  gap-3 mt-5">
          <span className="textsm text-gray-400">مبلغ شارژ را وارد کنید</span>
          {/* input */}
          <div className="flex w-full flex-row-reverse justify-between border border-gray-100 rounded-md p-2.5">
            <span>تومان</span>
            <input type="text" className="outline-0 border-0 w-full" />
          </div>
          {/* quick prices */}
          <div className="flex flex-wrap items-end gap-3">
            <span className="p-1 sm:p-2 text-sm rounded-md bg-[#D1B378] text-gray-100">
              {Number(100000).toLocaleString("fa-IR")}
            </span>
            <span className="p-1 sm:p-2 text-sm rounded-md bg-[#D1B378] text-gray-100">
              {Number(300000).toLocaleString("fa-IR")}
            </span>
            <span className="p-1 sm:p-2 text-sm rounded-md bg-[#D1B378] text-gray-100">
              {Number(500000).toLocaleString("fa-IR")}
            </span>
            <span className="p-1 sm:p-2 text-sm rounded-md bg-[#D1B378] text-gray-100">
              {Number(1000000).toLocaleString("fa-IR")}
            </span>
          </div>
          <button className="py-3 w-full bg-[#D1B378] rounded-lg text-white text-md cursor-pointer">
            شارژ کیف پول
          </button>
        </div>
      </div>
    </div>
  );
};
