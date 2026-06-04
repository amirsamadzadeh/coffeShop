import Image from "next/image";
import { Navbar } from "@/components/modules/Navbar";
import ProductCard from "@/components/modules/ProductCard";
import Categories from "@/components/templates/index/Categories";
import Footer from "@/components/modules/Footer";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* <div className="grid grid-cols-6 lg:grid-col-8  gap-2 w-[90%] mx-auto">
        <ProductCard />
        <ProductCard />
      </div> */}

      {/* <Categories /> */}
      <Footer />
    </div>
  );
}
