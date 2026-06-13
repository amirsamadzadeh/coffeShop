import Link from "next/link";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiStoreAlt } from "react-icons/bi";

export const Orders = () => {
  return (
    <div
      className="flex flex-col  bg-white px-2 pl-4 pb-6 pt-4 rounded-md shadow-md"
      dir="rtl"
    >
      {/* head titles */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-[#D1B378]  rounded-md p-2">
            <HiOutlineShoppingBag size={20} className="text-white" />
          </div>
          <p className="text-md ">سفارش های اخیر</p>
        </div>

        <Link
          href={"/dashboard/orders"}
          className="flex items-center gap-2 text-[#D1B378]"
        >
          مشاهده همه
          <FaArrowLeftLong size={18} />
        </Link>
      </div>
      {/* if orders empty */}
      <div className="flex flex-col gap-1 items-center justify-center">
        <Image
          src="/images/dashboard/emptyPoket.png"
          width={400}
          height={400}
          quality={80}
          alt="empty-orders"
          className="max-w-50 aspect-square object-cover"
        />

        <p className="text-md font-black tracking-wide">
          هیچ سفارشی پیدا نشد !
        </p>
        <span className="text-sm tracking-wide opacity-75">
          وقتشه اولین قهوه ات رو سفارش بدی
        </span>
        <Link
          className="flex items-center gap-2 py-2 px-8 text-white bg-[#D1B378] rounded-md mt-1"
          href="/products"
        >
          <BiStoreAlt size={18} />
          <span className="text-center text-md ">مشاهده فروشگاه</span>
        </Link>
      </div>
    </div>
  );
};
