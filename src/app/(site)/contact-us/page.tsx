import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { BiSolidCoffeeBean } from "react-icons/bi";

const Page = () => {
  return (
    <div
      className="flex flex-col gap-12 px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-12 mt-5"
      dir="rtl"
    >
      {/* Hero */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <BiSolidCoffeeBean size={60} className="text-[#D1B378]" />

          <h1 className="text-3xl md:text-5xl font-black">
            با Roastly در ارتباط باشید
          </h1>

          <p className="max-w-3xl text-gray-500 leading-8">
            اگر سوالی درباره محصولات، سفارش‌ها، همکاری یا خدمات ما دارید، خوشحال
            می‌شویم پیام شما را دریافت کنیم. تیم Roastly در سریع‌ترین زمان ممکن
            پاسخگوی شما خواهد بود.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="grid lg:grid-cols-[350px_1fr] gap-6">
        {/* Contact Information */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <FiPhone className="text-[#D1B378]" size={22} />
              <h3 className="font-bold">شماره تماس</h3>
            </div>

            <p className="text-gray-500">021-12345678</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <FiMail className="text-[#D1B378]" size={22} />
              <h3 className="font-bold">ایمیل</h3>
            </div>

            <p className="text-gray-500">support@roastly.ir</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <FiMapPin className="text-[#D1B378]" size={22} />
              <h3 className="font-bold">آدرس</h3>
            </div>

            <p className="text-gray-500 leading-7">
              تهران، خیابان نمونه، پلاک ۱۲۳
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold mb-3">ساعات پاسخگویی</h3>

            <p className="text-gray-500 leading-7">
              شنبه تا پنجشنبه
              <br />
              ساعت ۹ صبح تا ۶ عصر
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-2">ارسال پیام به مدیریت</h2>

          <p className="text-gray-500 mb-8">
            پیام خود را از طریق فرم زیر برای ما ارسال کنید.
          </p>

          <form className="flex flex-col gap-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  نام و نام خانوادگی
                </label>

                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-[#D1B378]"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">ایمیل</label>

                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-[#D1B378]"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                موضوع پیام
              </label>

              <input
                type="text"
                className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-[#D1B378]"
                placeholder="موضوع پیام"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">متن پیام</label>

              <textarea
                rows={7}
                className="w-full border border-gray-200 rounded-xl p-3 resize-none outline-none focus:border-[#D1B378]"
                placeholder="پیام خود را بنویسید..."
              />
            </div>

            <button
              type="submit"
              className="bg-[#D1B378] text-white py-3 rounded-xl font-bold hover:bg-[#c2a064] transition-colors"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          نیاز به راهنمایی بیشتر دارید؟
        </h2>

        <p className="text-gray-500 mb-5">
          تیم پشتیبانی Roastly آماده پاسخگویی به سوالات شماست.
        </p>

        <Link
          href="/faq"
          className="inline-flex bg-[#D1B378] text-white px-6 py-3 rounded-xl"
        >
          مشاهده سوالات متداول
        </Link>
      </section>
    </div>
  );
};

export default Page;
