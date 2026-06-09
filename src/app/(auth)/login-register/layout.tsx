import { Vazirmatn } from "next/font/google";
import "@/app/(site)/globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={`${vazirmatn.className} bg-[#1e1e200d]`}>
        {children}
      </body>
    </html>
  );
}
