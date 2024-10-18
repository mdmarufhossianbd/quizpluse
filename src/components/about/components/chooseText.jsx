import Link from 'next/link';
import React from 'react';
import { TbCheckbox } from "react-icons/tb";


const ChooseText = () => {
  return (
    <div className='w-full lg:w-1/2 m-4 p-4'>
      <h1 className='w-full lg:text-4xl text-xl  text-[#7555FD] font-semibold mb-4'>
        Why Students Choose Us For Gaining Their Knowledge!
      </h1>
      <p className='opacity-50 my-2 text-sm md:text-base'>
        Our quiz app offers an engaging and personalized learning experience designed to help students master topics at their own pace. With a user-friendly interface and real-time feedback, learning becomes fun, interactive, and effective.
      </p>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#9782f2]' /> Personalized Quiz
        </li>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#9782f2]' /> Real-Time Feedback
        </li>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#9782f2]' /> Progress Tracking
        </li>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#9782f2]' /> Gamification
        </li>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#9782f2]' /> Multiple Question Types
        </li>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#9782f2]' /> Offline Access
        </li>
      </ul>
      <p className='my-3 text-sm md:text-base'>
        Ask Any Question: <span className='text-xl text-[#7555FD]'><Link href="/contact">Contact Us</Link></span>
      </p>
    </div>
  );
};

export default ChooseText;
