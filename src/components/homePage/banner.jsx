"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Parallax } from "swiper/modules";
import "./banner.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        // navigation={true}
        autoplay={{
          delay: 3000, // Change slide every 3 seconds
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: "url('/assets/bannertest3.png')"
          }}

          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="flex items-center justify-center h-full w-full flex-col text-center py-8 lg:py-14 my-6 md:my-16">
            <div
              className="title text-5xl font-bold text-white"
              data-swiper-parallax="-300"
            >
              Welcome to QuizPulse
            </div>
            <div
              className="text text-xl text-white mt-4"
              data-swiper-parallax="-100"
            >
              <p className="mb-4">
                Get the chance to test your knowledge and improve your skills by
                taking this quiz.
              </p>
              <Link
                href="/register"
                className="inline-block px-8 py-3 rounded-lg bg-[#5C0096] text-white hover:bg-[#500081] transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center  h-full w-full flex-col text-center py-8 lg:py-14 my-6 md:my-16">
            <div
              className="title text-4xl font-bold text-white"
              data-swiper-parallax="-300"
            >
              Boost Your Knowledge
            </div>
            <div
              className="text text-xl text-white mt-4"
              data-swiper-parallax="-100"
            >
              <p className="mb-4">
                The quiz tournaments will give you a chance to have fun, learn,
                and grow at the same time.
              </p>
              <Link
                href="/login"
                className="inline-block px-8 py-3 rounded-lg bg-[#5C0096] text-white hover:bg-[#500081] transition"
              >
                Join Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center  h-full w-full flex-col text-center py-8 lg:py-14 my-6 md:my-16">
            <div
              className="title text-4xl font-bold text-white"
              data-swiper-parallax="-300"
            >
              Compete and Win
            </div>
            <div
              className="text text-xl text-white mt-4"
              data-swiper-parallax="-100"
            >
              <p className="mb-4">
                You will have the chance to compete in QuizPulse and become a
                champion if you challenge yourself.
              </p>
              <Link
                href="/quizes"
                className="inline-block px-8 py-3 rounded-lg bg-[#5C0096] text-white hover:bg-[#500081] transition"
              >
                Compete Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
