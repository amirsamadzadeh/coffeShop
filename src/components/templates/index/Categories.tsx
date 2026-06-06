"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryCard from "./CategorieCard";

export default function Categories() {
  return (
    <Swiper
      slidesPerView={1.5}
      breakpoints={{
        350: {
          slidesPerView: 2,
        },
        450: {
          slidesPerView: 2.5,
        },
        500: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 3.5,
        },
        768: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 6,
        },
      }}
      spaceBetween={12}
      className="md:px-3 lg:px-5 xl:px-7 2xl:px-12 mt-5"
    >
      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>
    </Swiper>
  );
}
