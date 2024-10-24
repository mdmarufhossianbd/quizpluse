'use client'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwiper } from 'swiper/react';

const Navigator = () => {
    const swiper = useSwiper();
    return (
        <div className="absolute w-full flex justify-between top-1/3 z-10">
            <button className='bg-white rounded-full text-[#5c0096bd] p-5' onClick={() => swiper.slidePrev()}><FaArrowLeft /></button>
            <button className='bg-white rounded-full text-[#5c0096bd] p-5' onClick={() => swiper.slideNext()}><FaArrowRight /></button>
        </div>
    );
};

export default Navigator;