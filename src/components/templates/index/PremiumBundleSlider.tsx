"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import React from "react";
import Link from "next/link";
import PremiumBundlesSkeleton from "@/components/modules/skeleton/PremiumBundlesSkeleton";

const PremiumBundlSlider = ({ children }: React.PropsWithChildren) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <PremiumBundlesSkeleton />;
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
          350: { slidesPerView: 1.5 },
          450: { slidesPerView: 2.5 },
          500: { slidesPerView: 2.5 },
          640: { slidesPerView: 3.5 },
          768: { slidesPerView: 4 },
          1000: { slidesPerView: 4 },
        }}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PremiumBundlSlider;
