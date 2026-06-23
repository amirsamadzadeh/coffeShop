"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

export const HeroSection = () => {
  return (
    <div>
      {/* Mobile Banners until 450px Banners Slider */}
      <div className="mt-6 mx-auto m-0 2xl:px-12 xl:px-7 lg:px-5 md:px-3 px-2 min-[450px]:hidden">
        <Swiper
          slidesPerView={1}
          rewind={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={12}
          className="block w-full"
        >
          <SwiperSlide>
            <Image
              src="/images/index/HeroMobile2.png"
              alt="coffePhoto"
              width={400}
              height={400}
              className="w-full h-125 object-cover rounded-lg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/images/index/HeroMobile1.png"
              alt="coffePhoto"
              width={400}
              height={400}
              className="w-full h-125 object-cover rounded-lg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/images/index/HeroMobile3.png"
              alt="coffePhoto"
              width={400}
              height={400}
              className="w-full h-125 object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* After 450px Banners Slider */}
      <div className="mt-6 mx-auto m-0 2xl:px-12 xl:px-7 lg:px-5 md:px-3 px-2 hidden min-[450px]:block"> 
        <Swiper
          slidesPerView={1}
          rewind={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={12}
          className="w-full lg:h-112.5"
        >
          <SwiperSlide>
            <Image
              src="/images/index/HeroDesktop1.png"
              alt="coffePhoto"
              width={1200}
              height={400}
              className="w-full h-full object-cover lg:object-bottom  rounded-lg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/images/index/HeroDesktop2.png"
              alt="coffePhoto"
              width={1200}
              height={400}
              className="w-full h-full object-cover lg:object-top rounded-lg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/images/index/HeroDesktop3.png"
              alt="coffePhoto"
              width={1200}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
