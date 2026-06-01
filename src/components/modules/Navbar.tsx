import { CiMenuBurger } from "react-icons/ci";
import { RiSearch2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-white py-5">
      <div className="flex flex-row-reverse justify-between gap-4 items-center w-[90%] mx-auto ">
        {/* burger menu */}
        <CiMenuBurger size={30} className="block md:hidden" />

        <div className="flex flex-row-reverse items-center justify-center gap-4">
          <Link href="/">
            <img
              src="images/logo1.svg"
              alt="Logo"
              className="w-12 h-auto sm:w-18 lg:w-20 cursor-pointer"
            />
          </Link>
          <Link href="/">
            <img
              src="images/logo2.svg"
              alt="Logo"
              className="h-auto w-24 cursor-pointer hidden xl:flex"
            />
          </Link>
        </div>

        <div className="flex flex-row-reverse gap-2 items-center bg-gray-100 w-full  md:w-1/2 h-10 rounded-lg px-3">
          <RiSearch2Line size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="قهوه، اسپرسو، دم&zwnj;آوری و ..."
            className="w-full rounded-lg py-3 outline right-5 outline-none"
            dir="rtl"
          />
        </div>

        {/* md : visible */}
        <div className="hidden md:flex flex-row-reverse md: gap-4">
          {/* user section */}
          <div className="flex flex-row-reverse items-center justify-center gap-1 hover:bg-gray-100 rounded-sm cursor-pointer px-4 py-2 transition ease-in">
            <FiUser size={20} />
            <MdKeyboardArrowDown size={16} />
          </div>
          {/* cart section */}
          <div className="flex items-center justify-center p-2 border border-gray-100 hover:bg-gray-100 rounded-sm cursor-pointer transition ease-in ">
            <BsCart2 size={20} fontWeight={700} />
            <p className="hidden">0 تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
};
