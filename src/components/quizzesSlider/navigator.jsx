'use client'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwiper } from 'swiper/react';

const Navigator = () => {
    const swiper = useSwiper();
    return (
        <div className="absolute w-full flex justify-between top-1/3 z-10">
            <button className='bg-[#5c0096bd] hover:bg-[#5c0096] rounded-full text-white p-5' onClick={() => swiper.slidePrev()}><FaArrowLeft /></button>
            <button className='bg-[#5c0096bd] hover:bg-[#5c0096] rounded-full text-white p-5' onClick={() => swiper.slideNext()}><FaArrowRight /></button>
        </div>
    );
};

export default Navigator;