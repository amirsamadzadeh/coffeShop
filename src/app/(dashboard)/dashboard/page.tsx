import Link from "next/link";
import { getUserFromToken } from "@/utils/auth";
import { IoPersonSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { Orders } from "@/components/modules/dashboard/orders";
import { Wallet } from "@/components/modules/dashboard/Wallet";
import { Addresses } from "@/components/modules/dashboard/Addresses";
import { WishList } from "@/components/modules/dashboard/WishList";
import { Profile } from "@/components/modules/dashboard/Profile";
import { Reviews } from "@/components/modules/dashboard/Reviews";

const Dashboard = async () => {
  const user = await getUserFromToken();
  return (
    <div className="flex flex-col gap-2" dir="rtl">
      {/* head */}
      <div className="flex lg:hidden w-full gap-2 p-2 bg-white border border-gray-100 rounded-lg ">
        {/* profile icon */}
        <div className="flex items-center justify-center p-2 border border-gray-200 bg-gray-100 rounded-md">
          <IoPersonSharp size={20} fontWeight={700} />
        </div>

        {/* User Name */}
        <div className="flex w-full justify-between items-center pl-4">
          <span className="text-base tracking-wide">سلام, امیرحسین 👋</span>
          <Link href="/dashboard/profile">
            <MdEdit className="cursor-pointer" size={20} />
          </Link>
        </div>
      </div>

      <Orders />
      {/* wallet / addresses */}
      <div className="flex flex-col gap-2 sm:grid sm:grid-cols-6 ">
        <Wallet />
        <Addresses />
      </div>
      <WishList />
      <Reviews />
      <Profile />
    </div>
  );
};

export default Dashboard;
