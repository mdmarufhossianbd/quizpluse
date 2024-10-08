'use client'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwiper } from 'swiper/react';

const Navigator = () => {
    const swiper = useSwiper();
    return (
        <div className="flex justify-between w-full gap-5 absolute top-1/2 z-20">
        <button className='bg-[#0f040433] hover:bg-[#FF3811] rounded-full text-white p-5 -ml-8' onClick={() => swiper.slidePrev()}><FaArrowLeft /></button>
        <button className='bg-[#04040433] hover:bg-[#FF3811] rounded-full text-white p-5' onClick={() => swiper.slideNext()}><FaArrowRight /></button>
    </div>
    );
};

export default Navigator;