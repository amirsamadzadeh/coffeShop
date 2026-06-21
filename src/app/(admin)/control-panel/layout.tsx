import "@/app/(site)/globals.css";
import { Navbar } from "@/components/modules/Navbar";
import SideBar  from "@/components/templates/admin/SideBar";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

export const metadata: Metadata = {
  title: "Roastly | داشبورد ادمین",
  icons: {
    icon: "/favicon.png",
  },
};

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={`${vazirmatn.className} bg-[#1e1e200d]`}>
        <Navbar />
        <div className="lg:grid lg:grid-cols-[1fr_280px] px-2 2xl:px-12 xl:px-7 lg:px-5 md:px-3 my-5 lg:gap-2">
          <main>{children}</main>
          <SideBar />
        </div>
      </body>
    </html>
  );
}
