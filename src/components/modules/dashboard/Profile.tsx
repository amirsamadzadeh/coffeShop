import { VscCircleLargeFilled } from "react-icons/vsc";
import Image from "next/image";
import { getUserFromToken } from "@/utils/auth";
export const Profile = async () => {
  const user = await getUserFromToken();
  return (
    <div
      className="flex flex-col  bg-white px-2 pl-4 pb-6 pt-4 rounded-md shadow-md"
      dir="rtl"
    >
      {/* heads */}
      <p className="text-base text-bold">اطلاعات کاربری</p>
      <span className="text-gray-400 text-md pr-2 mt-1">
        اطلاعات حساب کاربری خود را مدیریت کنید
      </span>

      <div className="flex flex-col">
        {/* picture */}
        <div className="w-full flex justify-center items-center">
          <Image
            src="/images/dashboard/profile.png"
            width={400}
            height={400}
            quality={80}
            alt="empty-orders"
            className="max-w-50  aspect-square object-cover"
          />
        </div>

        {/* form */}
        <form action="" className="grid grid-cols-6 gap-4 ">
          <div className="col-span-3 pr-4">
            <label htmlFor="name" className="flex items-center gap-2">
              <VscCircleLargeFilled size={8} className="text-[#D1B378]" />
              نام و نام خوانوادگی
            </label>
            <input
              type="text"
              id="name"
              className="w-full outline-0 border border-gray-100 px-2 py-2.5 focus:border-[#D1B378] rounded-md"
            />
          </div>

          <div className="col-span-3 pr-4">
            <label htmlFor="email" className="flex items-center gap-2">
              <VscCircleLargeFilled size={8} className="text-[#D1B378]" />
              ایمیل
            </label>
            <input
              type="text"
              id="email"
              defaultValue={user.email.toLocaleString()}
              className="w-full outline-0 border border-gray-100 px-2 py-2.5 focus:border-[#D1B378] rounded-md"
            />
          </div>

          <div className="col-span-3 pr-4">
            <label htmlFor="phone" className="flex items-center gap-2">
              <VscCircleLargeFilled size={8} className="text-[#D1B378]" />
              شماره همراه
            </label>
            <input
              type="text"
              id="phone"
              defaultValue={user.phone.toString()}
              className=" w-full outline-0 border border-gray-100 px-2 py-2.5 focus:border-[#D1B378] rounded-md"
            />
          </div>

          <div className="col-span-3 pr-4">
            <label htmlFor="password" className="flex items-center gap-2">
              <VscCircleLargeFilled size={8} className="text-[#D1B378]" />
              رمز عبور جدید
            </label>
            <input
              type="password"
              id="password"
              className="w-full outline-0 border border-gray-100 px-2 py-2.5 focus:border-[#D1B378] rounded-md"
            />
          </div>

          <button className="col-span-3 w-fit px-8 py-3 bg-[#2B2B2B] text-white text-sm font-bold rounded-lg hover:bg-[#C49A45] transition-all shadow-lg cursor-pointer mr-4">
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
};
