"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { BiSolidCoffeeBean } from "react-icons/bi";
import Link from "next/link";

const faqItems = [
  {
    question: "مدت زمان ارسال سفارش‌ها چقدر است؟",
    answer:
      "سفارش‌های ثبت شده در Roastly معمولاً بین ۱ تا ۳ روز کاری پردازش و ارسال می‌شوند. زمان دقیق تحویل بسته به شهر مقصد و عملکرد شرکت حمل‌ونقل ممکن است متفاوت باشد. پس از ارسال سفارش، کد رهگیری در اختیار شما قرار می‌گیرد تا بتوانید وضعیت مرسوله خود را پیگیری کنید.",
  },
  {
    question: "آیا قهوه‌ها به صورت تازه رست ارسال می‌شوند؟",
    answer:
      "بله. تمامی دانه‌های قهوه Roastly پس از رست و در کوتاه‌ترین زمان ممکن بسته‌بندی و ارسال می‌شوند تا بیشترین تازگی، عطر و طعم را تجربه کنید.",
  },
  {
    question: "چگونه می‌توانم سفارش خود را پیگیری کنم؟",
    answer:
      "پس از ثبت و ارسال سفارش، کد رهگیری برای شما پیامک می‌شود. همچنین از طریق پنل کاربری و بخش سفارش‌ها می‌توانید وضعیت سفارش خود را مشاهده و پیگیری کنید.",
  },
  {
    question: "آیا امکان بازگشت یا تعویض کالا وجود دارد؟",
    answer:
      "در صورتی که محصول دریافتی دارای مشکل، آسیب‌دیدگی یا مغایرت با سفارش ثبت شده باشد، می‌توانید موضوع را با تیم پشتیبانی Roastly مطرح کنید تا درخواست شما بررسی و در صورت تأیید، فرآیند تعویض یا بازگشت کالا انجام شود.",
  },
  {
    question: "چه روش‌هایی برای پرداخت وجود دارد؟",
    answer:
      "در حال حاضر امکان پرداخت آنلاین از طریق درگاه بانکی امن برای تمامی سفارش‌ها فراهم است. همچنین در برخی کمپین‌ها یا طرح‌های ویژه، امکان استفاده از اعتبار کیف پول نیز در دسترس خواهد بود.",
  },
  {
    question: "چگونه مناسب‌ترین قهوه را انتخاب کنم؟",
    answer:
      "در صفحه هر محصول اطلاعات کاملی شامل میزان کافئین، درجه رست، عطر، طعم و وزن محصول درج شده است. اگر همچنان در انتخاب قهوه مناسب تردید دارید، می‌توانید با پشتیبانی Roastly تماس بگیرید تا بر اساس سلیقه شما راهنمایی شوید.",
  },
  {
    question: "آیا امکان خرید عمده یا همکاری با کافه‌ها وجود دارد؟",
    answer:
      "بله. Roastly آماده همکاری با کافه‌ها، رستوران‌ها، شرکت‌ها و فروشگاه‌های تخصصی قهوه است. برای دریافت شرایط همکاری و قیمت‌های عمده می‌توانید از طریق صفحه تماس با ما درخواست خود را ثبت کنید.",
  },
  {
    question: "آیا برای ثبت سفارش نیاز به حساب کاربری دارم؟",
    answer:
      "بله. برای ثبت سفارش، مشاهده تاریخچه خرید، پیگیری سفارش‌ها و استفاده از امکانات پنل کاربری، لازم است ابتدا وارد حساب کاربری خود شوید یا یک حساب جدید ایجاد کنید.",
  },
];

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <div dir="rtl" className="flex flex-col gap-4">
      {/* head titles */}
      <h3 className="font-bold text-base md:text-lg lg:text-xl">
        سوالات متداول
      </h3>

      <span className="text-sm md:text-base text-gray-400">
        پاسخ سوالات رایج شما درباره محصولات و خدمات Roastly
      </span>

      {/* questions */}
      <div className="flex flex-col gap-2">
        {faqItems.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setOpenQuestion(openQuestion === index ? null : index)
            }
            className="flex flex-col gap-2 border bg-white border-gray-100 shadow-sm rounded-lg cursor-pointer p-3 transition-all duration-300 ease-in-out"
          >
            {/* question */}
            <div className="flex items-center gap-2.5">
              {openQuestion === index ? (
                <FiMinus size={20} className="text-[#D1B378]" />
              ) : (
                <FaPlus size={18} className="text-[#D1B378]" />
              )}

              <h4 className="font-bold text-base md:text-lg">
                {item.question}
              </h4>
            </div>

            {/* answer */}
            {openQuestion === index && (
              <p className="text-sm md:text-base text-gray-500 leading-8 pr-7 ">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* contact us */}
      <div className="flex flex-col justify-center items-center gap-1 mt-2">
        <BiSolidCoffeeBean size={20} className="text-[#D1B378]" />

        <span className="text-sm md:text-base text-gray-500">
          اگر پاسخ سوال خود را پیدا نکردید، تیم پشتیبانی Roastly آماده پاسخگویی
          به شماست.
        </span>

        <Link
          href="/contact-us"
          className="text-sm md:text-base text-[#D1B378] font-medium"
        >
          تماس با پشتیبانی
        </Link>
      </div>
    </div>
  );
};

export { Faq };
