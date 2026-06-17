import "@/app/(site)/globals.css";
import { Navbar } from "@/components/modules/Navbar";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

export const metadata: Metadata = {
  title: "Roastly | سبد خرید",
  description:
    "خرید انواع قهوه تازه رست، دانه قهوه تخصصی، تجهیزات دم‌آوری و اکسسوری‌های قهوه. تجربه‌ای متفاوت از طعم و عطر قهوه با Roastly.",
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
        {children}
      </body>
    </html>
  );
}
