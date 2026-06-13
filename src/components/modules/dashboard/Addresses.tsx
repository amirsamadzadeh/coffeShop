import Image from "next/image";
import { GoPlus } from "react-icons/go";

export const Addresses = () => {
  return (
    <div
      className="flex flex-col sm:col-span-3 bg-white pb-10 pl-4 pr-2 pt-4 rounded-md shadow-md"
      dir="rtl"
    >
      {/* head titles */}
      <div className="w-fit border border-[#D1B378] rounded-md ">
        <button className="flex gap-2 py-2 pl-6 pr-2 text-md items-center text-[#D1B378] cursor-pointer">
          <GoPlus size={18} />
          افزودن آدرس جدید
        </button>
      </div>

      {/* if Addresses empty */}
      <div className="flex flex-col sm:h-full gap-1 items-center justify-center">
        <Image
          src="/images/dashboard/address.png"
          width={400}
          height={400}
          quality={80}
          alt="empty-orders"
          className="max-w-50 aspect-square object-cover"
        />

        <p className="text-md font-black tracking-wide">
          هنوز آدرسی ثبت نکرده اید
        </p>
      </div>
    </div>
  );
};
