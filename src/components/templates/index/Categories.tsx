"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryCard from "./CategorieCard";
import Link from "next/link";
import CategoriesSkeleton from "@/components/modules/skeleton/CategoriesSkeleton";

type CategoriesType = {
  title: string;
  slug: string;
  image: string;
};
export default function Categories() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <CategoriesSkeleton />;

  const categorieDatas: CategoriesType[] = [
    {
      title: "قهوه اسپرسو",
      slug: "espresso",
      image: "/images/categories/espressoCoffe.png",
    },
    {
      title: "قهوه فوری",
      slug: "instant-coffee",
      image: "/images/categories/instantCoffe.png",
    },
    {
      title: "قهوه ترک",
      slug: "turkish-coffee",
      image: "/images/categories/turkishCoffe.png",
    },
    {
      title: "فرنچ پرس",
      slug: "french-press",
      image: "/images/categories/frenchPress.png",
    },
    {
      title: "سیروپ ها",
      slug: "syrups",
      image: "/images/categories/syrup.png",
    },
    {
      title: "قهوه دمی",
      slug: "pour-over",
      image: "/images/categories/pour-overCoffe.png",
    },
    {
      title: "موکاپات",
      slug: "moka-pot",
      image: "/images/categories/mokaPot.png",
    },
    {
      title: "لوازم جانبی قهوه",
      slug: "accessories",
      image: "/images/categories/coffeAccessories.png",
    },
  ];

  return (
    <div className="px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-12 mt-5 lg:mt-8">
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
        spaceBetween={35}
        dir="rtl"
      >
        {categorieDatas?.map((data, index) => (
          <SwiperSlide key={index}>
            <Link href={`/categories/${data.slug}`}>
              <CategoryCard {...data} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
