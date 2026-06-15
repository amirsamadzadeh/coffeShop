import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Roastly | فروشگاه تخصصی قهوه و تجهیزات دم‌آوری",
  description:
    "خرید انواع قهوه تازه رست، دانه قهوه تخصصی، تجهیزات دم‌آوری و اکسسوری‌های قهوه. تجربه‌ای متفاوت از طعم و عطر قهوه با Roastly.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`${vazirmatn.className} bg-[#1e1e200d]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
