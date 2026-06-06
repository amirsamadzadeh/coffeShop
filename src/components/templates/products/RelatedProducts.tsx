"use client";
import ProductCard from "@/components/modules/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "@/components/templates/index/CategorieCard";
import "swiper/css";

type ProductTypes = {
  name: string;
  image: string;
  price: number;
  _id: string;
};
type ProductsPropTypes = {
  products: ProductTypes[];
};

const RelatedProducts = ({ products }: ProductsPropTypes) => {
  return (
    <div className="text-right h-full md:px-3 lg:px-5 xl:px-7 2xl:px-12 mb-25 lg:mb-6">
      <h3 className="text-lg md:text-xl font-bold mb-2 pr-2">محصولات مرتبط</h3>
      {/* slides */}
      <div dir="rtl" className="h-full">
        <Swiper
          slidesPerView={1.5}
          breakpoints={{
            350: {
              slidesPerView: 1.5,
            },
            450: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2.5,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3.5,
            },
            1000: {
              slidesPerView: 3.5,
            },
            1100: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
            1300: {
              slidesPerView: 6,
            },
          }}
          spaceBetween={12}
        >
          {products.map((product: ProductTypes) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
