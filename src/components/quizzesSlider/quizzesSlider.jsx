"use client";
import React, { useRef, useState } from "react";
import { Virtual, Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

import "./styles.css";
import QuizCard from "../shared/quizCard";
import Navigator from "./navigator";



const QuizzesSlider = ({ quizes }) => {
   
  const [swiperRef, setSwiperRef] = useState(null);

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation]}
        onSwiper={setSwiperRef}
        spaceBetween={30}
        navigation={true}
        
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {quizes?.map((item, index) => (
          <SwiperSlide key={item?._id} virtualIndex={index}>
            <QuizCard item={item} />
          </SwiperSlide>
        ))}

       <div>
       <Navigator/>
       </div>
      </Swiper>
    </>
  );
};

export default QuizzesSlider;
