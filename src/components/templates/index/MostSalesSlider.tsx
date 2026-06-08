"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import React from "react";
import Link from "next/link";

const MostSalesSlider = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        dir="rtl"
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !bg-[#D1B378] w-3 h-3 rounded-full"></span>`;
          },
        }}
        modules={[Pagination]}
        breakpoints={{
          350: { slidesPerView: 2 },
          450: { slidesPerView: 2.5 },
          500: { slidesPerView: 3 },
          640: { slidesPerView: 3.5 },
          768: { slidesPerView: 4 },
          1000: { slidesPerView: 6 },
        }}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostSalesSlider;
