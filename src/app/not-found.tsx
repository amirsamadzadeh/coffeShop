import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
import "@/app/(site)/globals.css";
export default function NotFound() {
  return (
    <div className="">
      <Navbar />

      <div className="w-full flex flex-col justify-center items-center gap-2">
        <Image
          src="/images/cart/emptyCart.png"
          width={300}
          height={300}
          alt="404 NOT FOUND"
        />

        <span className="text-sm sm:text-md md:text-base lg:text-lg font-bold">
          صفحه ای که دنبالش بودید پیدا نشد
        </span>
        <Link
          href="/"
          className="text-white text-sm sm:text-md md:text-base lg:text-lg bg-[#D1B378] py-1 px-4  border border-[#D1B378] rounded-md"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>

      <Footer />
    </div>
  );
}
