"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import QuizCard from "../shared/quizCard";
import Navigator from "./navigator";

const QuizzesSlider = ({ quizes }) => {

  return (
    <Swiper
      spaceBetween={30}
      navigation={true}
      breakpoints={
        {
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
        }
      }
    >

      {quizes?.map((item, index) => (
        <SwiperSlide className="" key={item?._id} virtualIndex={index}>
          <QuizCard item={item} />
        </SwiperSlide>
      ))}
      <Navigator />
    </Swiper>
  );
};

export default QuizzesSlider;
