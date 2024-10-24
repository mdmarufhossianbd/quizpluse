// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // import required modules
// import Link from "next/link";
// import { Autoplay, Pagination, Parallax } from "swiper/modules";
// import "./banner.css";

// const Banner = () => {
//   return (
//     <div className="">
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         speed={600}
//         parallax={true}
//         pagination={{
//           clickable: true,
//         }}
//         loop={true}
//         // navigation={true}
//         autoplay={{
//           delay: 5000, // Change slide every 3 seconds
//           disableOnInteraction: false, // Continue autoplay after interaction
//         }}
//         modules={[Parallax, Pagination, Autoplay]}
//         className="mySwiper min-[800px]"
//       >
//         <div
//           slot="container-start"
//           className="parallax-bg"
//           style={{
//             backgroundImage: "url('/assets/banner1.png')"
//           }}

//           data-swiper-parallax="-23%"
//         ></div>
//         <SwiperSlide>
//           <div className="flex items-center justify-center h-full w-full flex-col text-center py-8 lg:py-14 my-6 md:my-16">
//             <div
//               className="title text-3xl md:text-5xl lg:text-7xl font-extrabold text-white"
//               data-swiper-parallax="-300"
//             >
//               Welcome to QuizPulse
//             </div>
//             <div
//               className="text text-xl text-white mt-4"
//               data-swiper-parallax="-100"
//             >
//               <p className="mb-4">
//                 Get the chance to test your knowledge and improve your skills by
//                 taking this quiz.
//               </p>
//               <Link
//                 href="/register"
//                 className="inline-block px-8 py-3 rounded-lg bg-[#5C0096] text-white hover:bg-[#500081] transition"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="flex items-center justify-center  h-full w-full flex-col text-center py-8 lg:py-14 my-6 md:my-16">
//             <div
//               className="title text-3xl md:text-5xl lg:text-7xl font-extrabold text-white"
//               data-swiper-parallax="-300"
//             >
//               Boost Your Knowledge
//             </div>
//             <div
//               className="text text-xl text-white mt-4"
//               data-swiper-parallax="-100"
//             >
//               <p className="mb-4">
//                 The quiz tournaments will give you a chance to have fun, learn,
//                 and grow at the same time.
//               </p>
//               <Link
//                 href="/login"
//                 className="inline-block px-8 py-3 rounded-lg bg-[#5C0096] text-white hover:bg-[#500081] transition"
//               >
//                 Join Now
//               </Link>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="flex items-center justify-center  h-full w-full flex-col text-center py-8 lg:py-14 my-6 md:my-16">
//             <div
//               className="title text-3xl md:text-5xl lg:text-7xl font-extrabold text-white"
//               data-swiper-parallax="-300"
//             >
//               Compete and Win
//             </div>
//             <div
//               className="text text-xl text-white mt-4"
//               data-swiper-parallax="-100"
//             >
//               <p className="mb-4">
//                 You will have the chance to compete in QuizPulse and become a
//                 champion if you challenge yourself.
//               </p>
//               <Link
//                 href="/quizes"
//                 className="inline-block px-8 py-3 rounded-lg bg-[#5C0096] text-white hover:bg-[#500081] transition"
//               >
//                 Compete Now
//               </Link>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;



"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Autoplay, Pagination, Parallax } from "swiper/modules";
import "./banner.css";

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
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper min-[800px]"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: "url('/assets/banner1.png')"
          }}
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide>
          <div className="flex items-center justify-center h-full w-full flex-col text-center py-10 lg:py-14 my-8 md:my-16">
            <div
              className="title text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
              data-swiper-parallax="-300"
            >
              Welcome to QuizPulse
            </div>
            <div
              className="text text-lg md:text-xl text-white mt-6"
              data-swiper-parallax="-100"
            >
              <p className="mb-6">
                Get the chance to test your knowledge and improve your skills by taking this quiz.
              </p>
              {/* <Link
                href="/register"
                className="inline-block px-10 py-3 rounded-lg bg-[#5C0096] text-white hover:bg-[#500081] transition"
              >
                Get Started
              </Link> */}

              <Link
                href="/register"
              >
                <button className="banner-button">Get Started</button>
              </Link>

            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-full w-full flex-col text-center py-10 lg:py-14 my-8 md:my-16">
            <div
              className="title text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
              data-swiper-parallax="-300"
            >
              Boost Your Knowledge
            </div>
            <div
              className="text text-lg md:text-xl text-white mt-6"
              data-swiper-parallax="-100"
            >
              <p className="mb-6">
                The quiz tournaments will give you a chance to have fun, learn, and grow at the same time.
              </p>
              <Link
                href="/login"

              >
                <button className="banner-button">Join Now</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-full w-full flex-col text-center py-10 lg:py-14 my-8 md:my-16">
            <div
              className="title text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
              data-swiper-parallax="-300"
            >
              Compete and Win
            </div>
            <div
              className="text text-lg md:text-xl text-white mt-6"
              data-swiper-parallax="-100"
            >
              <p className="mb-6">
                You will have the chance to compete in QuizPulse and become a champion if you challenge yourself.
              </p>
              <Link
                href="/quizes"
              >
                <button className="banner-button">Compete Now</button>

              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
