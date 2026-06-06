"use client";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiBars3BottomRight } from "react-icons/hi2";
import { BiComment } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

type productDataTypes = {
  _id: string;
  name: string;
  price: Number;
  image: string;
  caffein: string;
  weight: number;
  pakaging: string;
  aroma: string;
  roast: string;
  score: number;
};
type ProductTypes = {
  product: productDataTypes;
};

const Tabs = ({ product }: ProductTypes) => {
  const [tabDescription, setTabDescription] = useState(true);
  const [tabAttribute, setTabAttribute] = useState(false);
  const [tabComment, setTabComment] = useState(false);

  const setTab = (action: string) => {
    switch (action) {
      case "Description": {
        setTabAttribute(false);
        setTabComment(false);
        setTabDescription(true);
        break;
      }
      case "Attribute": {
        setTabComment(false);
        setTabDescription(false);
        setTabAttribute(true);
        break;
      }
      case "Comment": {
        setTabDescription(false);
        setTabAttribute(false);
        setTabComment(true);
      }
    }
  };

  return (
    <div className="md:px-3 lg:px-5 xl:px-7 2xl:px-12 mb-4">
      {/* wrapper */}
      <div className="flex flex-col bg-white w-full md:rounded-lg md:border md:border-gray-100  mt-6 ">
        {/* Head Titles */}
        <div className="flex flex-row-reverse w-full gap-2 sm:gap-3 md:gap-3.5 lg:gap-4 px-4 border-b border-b-gray-100  border-t border-t-gray-100 py-2 ">
          <p
            className={`flex gap-1 justify-center items-center px-2 pt-1 cursor-pointer text-nowrap ${tabDescription ? `text-[#D1B378]` : `text-[#1e1e20]`}`}
            onClick={() => setTab("Description")}
          >
            <MdKeyboardArrowDown />
            نقد و برسی
            <CiSearch />
          </p>

          <p
            className={`flex gap-1 justify-center items-center px-2 pt-1 cursor-pointer text-nowrap ${tabAttribute ? `text-[#D1B378]` : `text-[#1e1e20]`}`}
            onClick={() => setTab("Attribute")}
          >
            <MdKeyboardArrowDown />
            ویژگی ها
            <HiBars3BottomRight />
          </p>

          <p
            className={`flex  gap-1 justify-center items-center px-2 pt-1 cursor-pointer text-nowrap ${tabComment ? `text-[#D1B378]` : `text-[#1e1e20]`}`}
            onClick={() => setTab("Comment")}
          >
            دیدگاه ها
            <BiComment />
          </p>
        </div>

        {/* Description section */}
        <div
          className={`${tabDescription ? "w-full mt-6 mb-6 px-6 flex flex-col gap-3 text-right " : "hidden"}`}
        >
          <h3 className="text-base md:text-lg font-black">{product.name}</h3>
          <p className="text-sm sm:text-md md:text-base font-light leading-8 text-pretty ">
            قهوه همواره فراتر از یک نوشیدنی ساده بوده و بخشی از سبک زندگی افراد
            در سراسر جهان به شمار می‌رود. این محصول با هدف ارائه تجربه‌ای مطلوب
            از عطر و طعم قهوه تهیه شده و می‌تواند همراه مناسبی برای شروع روز،
            جلسات کاری یا لحظات استراحت باشد.
          </p>
          <p className="text-sm sm:text-md md:text-base font-light leading-8 text-pretty">
            دانه‌های قهوه مورد استفاده در این محصول با دقت انتخاب شده‌اند تا
            تعادلی مناسب میان تلخی، شیرینی طبیعی و رایحه دلنشین ایجاد شود.
            فرآیند برشته‌کاری کنترل‌شده به حفظ ویژگی‌های اصلی دانه کمک کرده و
            طعمی یکنواخت و باکیفیت را در هر فنجان تضمین می‌کند.
          </p>
          <p className="text-sm sm:text-md md:text-base font-light leading-8 text-pretty">
            این محصول برای انواع روش‌های دم‌آوری مناسب بوده و بسته به شیوه
            آماده‌سازی، می‌تواند ویژگی‌های طعمی متفاوتی را ارائه دهد. استفاده از
            آب باکیفیت و رعایت نسبت مناسب قهوه به آب، بهترین نتیجه را برای
            مصرف‌کننده به همراه خواهد داشت.
          </p>

          <p className="text-sm font-light sm:text-base leading-8 text-pretty">
            ما تلاش کرده‌ایم محصولی ارائه دهیم که علاوه بر کیفیت مطلوب، تجربه‌ای
            لذت‌بخش و ماندگار از نوشیدن قهوه را برای شما فراهم کند.
          </p>
        </div>

        {/* Attribute Section */}
        <div
          className={`${tabAttribute ? "flex flex-col gap-5 px-6 pb-8 items-start my-5" : "hidden"}`}
          dir="rtl"
        >
          <h4 className="text-base sm:text-lg md:text-xl font-semibold">
            مشخصات کلی
          </h4>

          <div className="flex w-full item-start items-center ">
            <div className="flex w-full items-start ">
              <div className="w-1/3 flex items-center">
                <p className=" text-sm sm:text-base  text-nowrap opacity-75 pl-5 ">
                  رایحه (Aroma)
                </p>
                <span className="border-t border-t-gray-100 w-full rounded-xl"></span>
              </div>
              <p className="w-2/3 text-[#1e1e20] text-sm sm:text-base  pr-5">
                {product.aroma}
              </p>
            </div>
          </div>

          <div className="flex w-full item-start items-center">
            <div className="flex w-full items-start ">
              <div className="w-1/3 flex items-center">
                <p className=" text-sm sm:text-base text-nowrap opacity-75 pl-5  ">
                  کافئین
                </p>
                <span className="border-t border-t-gray-100 w-full rounded-xl"></span>
              </div>
              <p className="w-2/3 text-[#1e1e20] text-sm sm:text-base pr-5">
                {product.caffein}
              </p>
            </div>
          </div>

          <div className="flex w-full item-start items-center">
            <div className="flex w-full items-start ">
              <div className="w-1/3 flex items-center">
                <p className=" text-sm sm:text-base text-nowrap opacity-75 pl-5 ">
                  روست
                </p>
                <span className="border-t border-t-gray-100 w-full rounded-xl"></span>
              </div>
              <p className="w-2/3 text-[#1e1e20] text-sm sm:text-base pr-5">
                {product.roast}
              </p>
            </div>
          </div>

          <div className="flex w-full item-start items-center">
            <div className="flex w-full items-start ">
              <div className="w-1/3 flex items-center">
                <p className=" text-sm sm:text-base text-nowrap opacity-75 pl-5 ">
                  وزن
                </p>
                <span className="border-t border-t-gray-100 w-full rounded-xl"></span>
              </div>
              <p className="w-2/3 text-[#1e1e20] text-sm sm:text-base pr-5">
                {product.weight}
              </p>
            </div>
          </div>

          <div className="flex w-full item-start items-center">
            <div className="flex w-full items-start ">
              <div className="w-1/3 flex items-center">
                <p className=" text-sm sm:text-base text-nowrap opacity-75 pl-5 ">
                  نوع بسته بندی
                </p>
                <span className="border-t border-t-gray-100 w-full rounded-xl"></span>
              </div>
              <p className="w-2/3 text-[#1e1e20] text-sm sm:text-base pr-5">
                {product.pakaging}
              </p>
            </div>
          </div>
        </div>

        {/* comment Section */}
        <div
          className={`${tabComment ? "flex flex-col px-6 py-6 border-b border-b-gray-100" : "hidden"}`}
        >
          {/* add comment */}
          <div
            className="flex flex-col md:flex-row md:justify-between gap-5 justify-start items-start border border-[#CCAB69] rounded-md p-5 "
            dir="rtl"
          >
            <div className="flex flex-col gap-1">
              <p className="text-base font-black text-nowrap">
                به این محصول امتیاز دهید !
              </p>
              <span className="text-sm md:text-xs md:text-wrap opacity-75 ">
                شما هم نظر خودتون رو راجع به این محصول با ما و بقیه کاربران به
                اشتراک بگذارید.
              </span>
            </div>

            <button className="flex justify-center items-center text-center  gap-1.5 text-white bg-[#CCAB69] opacity-85 hover:opacity-100 cursor-pointer  rounded-lg py-2 px-5">
              ثبت دیدگاه جدید
              <IoIosArrowBack />
            </button>
          </div>
          {/* render comments */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
