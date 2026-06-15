import Link from "next/link";
import { FaAward, FaSeedling, FaShippingFast } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const AboutUs = () => {
  return (
    <div
      className="flex flex-col gap-16 px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-12 mt-5"
      dir="rtl"
    >
      {/* Hero */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12">
        <div className="flex flex-col gap-5 items-center text-center">
          <GiCoffeeBeans className="text-[#D1B378]" size={60} />

          <h1 className="text-3xl md:text-5xl font-black">
            هر فنجان، داستانی از کیفیت
          </h1>

          <p className="max-w-3xl text-gray-500 leading-8">
            در Roastly ما باور داریم که یک فنجان قهوه خوب فقط یک نوشیدنی نیست؛
            بلکه تجربه‌ای از عطر، طعم و لحظه‌های ارزشمند زندگی است. به همین دلیل
            تلاش می‌کنیم بهترین دانه‌های قهوه را انتخاب، رست و آماده کنیم تا
            کیفیتی ماندگار را به شما ارائه دهیم.
          </p>

          <Link
            href="/products"
            className="flex items-center gap-2 bg-[#D1B378] text-white px-6 py-3 rounded-xl"
          >
            مشاهده محصولات
            <MdOutlineKeyboardArrowLeft />
          </Link>
        </div>
      </section>

      {/* Story */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4">داستان Roastly</h2>

          <p className="text-gray-500 leading-8">
            Roastly با هدف ارائه قهوه‌ای تازه، باکیفیت و تخصصی متولد شد. ما از
            انتخاب دانه‌های مرغوب تا فرآیند رست و بسته‌بندی، تمام مراحل را با
            دقت انجام می‌دهیم تا هر محصولی که به دست شما می‌رسد نماینده
            استانداردهای بالای کیفیت باشد.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#D1B378]/10 to-[#D1B378]/20 rounded-2xl min-h-[300px] flex items-center justify-center">
          <GiCoffeeBeans size={120} className="text-[#D1B378]" />
        </div>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-center text-3xl font-black mb-10">ارزش‌های ما</h2>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <FaAward size={40} className="text-[#D1B378] mx-auto mb-4" />

            <h3 className="font-bold text-lg mb-2">کیفیت بی‌نقص</h3>

            <p className="text-gray-500 leading-7">
              انتخاب دقیق دانه‌ها و کنترل کیفیت در تمام مراحل.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <GiCoffeeBeans size={40} className="text-[#D1B378] mx-auto mb-4" />

            <h3 className="font-bold text-lg mb-2">رست تازه</h3>

            <p className="text-gray-500 leading-7">
              ارسال محصولات با حفظ تازگی و بیشترین عطر و طعم.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <FaShippingFast size={40} className="text-[#D1B378] mx-auto mb-4" />

            <h3 className="font-bold text-lg mb-2">ارسال سریع</h3>

            <p className="text-gray-500 leading-7">
              پردازش و ارسال سفارش‌ها در سریع‌ترین زمان ممکن.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <h3 className="text-3xl font-black text-[#D1B378]">1000+</h3>
          <p className="text-gray-500 mt-2">سفارش موفق</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <h3 className="text-3xl font-black text-[#D1B378]">50+</h3>
          <p className="text-gray-500 mt-2">محصول متنوع</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <h3 className="text-3xl font-black text-[#D1B378]">98%</h3>
          <p className="text-gray-500 mt-2">رضایت مشتریان</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <h3 className="text-3xl font-black text-[#D1B378]">24/7</h3>
          <p className="text-gray-500 mt-2">پشتیبانی</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D1B378] rounded-2xl p-10 text-center text-white">
        <h2 className="text-3xl font-black mb-4">
          آماده کشف طعم واقعی قهوه هستید؟
        </h2>

        <p className="opacity-90 mb-6">
          مجموعه‌ای از بهترین قهوه‌های تازه رست شده در انتظار شماست.
        </p>

        <Link
          href="/products"
          className="inline-flex bg-white text-[#D1B378] px-6 py-3 rounded-xl font-bold"
        >
          شروع خرید
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
