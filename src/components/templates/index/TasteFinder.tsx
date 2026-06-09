import React from "react";

export default function TasteFinder() {
  return (
    // <section className="bg-white shadow-sm px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-12 mt-11  lg:mt-10">
    //   <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
    //     {/* بخش تصویر - در موبایل بالا، در دسکتاپ راست */}
    //     <div className="w-full md:w-1/2 flex justify-center">
    //       <div className="relative w-72 h-72 md:w-96 md:h-96">
    //         <img
    //           src="/images/quiz-coffee.png"
    //           alt="طعم یاب روستلی"
    //           className="w-full h-full object-contain animate-pulse-slow"
    //         />
    //       </div>
    //     </div>

    //     {/* بخش محتوا و فرم - در موبایل پایین، در دسکتاپ چپ */}
    //     <div className="flex flex-col items-end w-full md:w-1/2 text-right">

    //       <span className="text-[#C49A45] font-medium text-sm md:text-base block mb-2">
    //         هنوز قهوه خودت رو پیدا نکردی؟
    //       </span>
    //       <h2 className="text-2xl md:text-4xl font-bold text-[#2B2B2B] mb-4 leading-tight">
    //         طعم‌یاب هوشمند روستلی
    //       </h2>
    //       <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
    //         با پاسخ به ۳ سوال ساده، هوش مصنوعی روستلی بهترین دانه قهوه را متناسب
    //         با ذائقه و دستگاه شما پیشنهاد می‌دهد.
    //       </p>

    //       {/* نمونه دکمه‌های تعاملی فرم */}
    //       <div className="space-y-4">
    //         <div>
    //           <p className="text-sm font-semibold text-gray-700 mb-2">
    //             ۱. قهوه را چگونه مینوشید؟
    //           </p>
    //           <div className="flex flex-wrap gap-2 justify-end">
    //             <button className="px-4 py-2 text-xs md:text-sm rounded-full bg-white border border-gray-200 text-gray-700 hover:border-[#C49A45] hover:text-[#C49A45] transition-all">
    //               با شیر (لاته، کاپوچینو)
    //             </button>
    //             <button className="px-4 py-2 text-xs md:text-sm rounded-full bg-[#C49A45] text-white font-medium">
    //               سیاه و خالص (اسپرسو، دمی)
    //             </button>
    //           </div>
    //         </div>
    //         <button className="mt-6 w-full md:w-auto px-8 py-3 bg-[#2B2B2B] text-white text-sm font-bold rounded-lg hover:bg-[#C49A45] transition-all shadow-lg cursor-pointer">
    //           یافتن قهوه من
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    <div className="bg-white w-full mx-auto py-5 md:py-0 px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-12 mt-11 lg:mt-15 shadow-sm">
      {/* wrapper */}
      <div className="flex flex-col md:flex-row-reverse">
        {/* image / Mobile : Up section Desktop:Right Section */}
        <div className="w-full md:w-1/2 p-4 min-[500px]:p-10 md:p-10">
          <img
            src="/images/quiz-coffee.png"
            alt="طعم یاب روستلی"
            className="w-full h-auto object-contain animate-pulse-slow"
          />
        </div>

        {/* contents and form / Mobile : bottom section Desktop:left Section */}
        <div className="flex flex-col md:w-1/2 items-end pr-4 md:pr-0 text-right justify-center gap-2">
          <span className="text-[#C49A45] font-medium text-sm md:text-base  mb-2">
            هنوز قهوه خودت رو پیدا نکردی؟
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#2B2B2B] leading-tight">
            طعم‌یاب هوشمند روستلی
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
            با پاسخ به ۳ سوال ساده، هوش مصنوعی روستلی بهترین دانه قهوه را متناسب
            با ذائقه و دستگاه شما پیشنهاد می‌دهد.
          </p>

          <button className=" w-full md:w-auto px-8 py-3 bg-[#2B2B2B] text-white text-sm font-bold rounded-lg hover:bg-[#C49A45] transition-all shadow-lg cursor-pointer">
            یافتن قهوه من
          </button>
          {/* نمونه دکمه‌های تعاملی فرم */}
          {/* <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 ">
                ۱. قهوه را چگونه مینوشید؟
              </p>
              <div className="flex flex-wrap gap-2 justify-end">
                <button className="px-4 py-2 text-xs md:text-sm rounded-full bg-white border border-gray-200 text-gray-700 hover:border-[#C49A45] hover:text-[#C49A45] transition-all">
                  با شیر (لاته، کاپوچینو)
                </button>
                <button className="px-4 py-2 text-xs md:text-sm rounded-full bg-[#C49A45] text-white font-medium">
                  سیاه و خالص (اسپرسو، دمی)
                </button>
              </div>
            </div>
            <button className="mt-6 w-full md:w-auto px-8 py-3 bg-[#2B2B2B] text-white text-sm font-bold rounded-lg hover:bg-[#C49A45] transition-all shadow-lg cursor-pointer">
              یافتن قهوه من
            </button>
          </div> */}
        </div>
      </div>
    </div>

    // </section>
  );
}
