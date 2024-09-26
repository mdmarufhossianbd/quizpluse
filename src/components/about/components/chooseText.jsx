import React from 'react'
import { TbCheckbox } from "react-icons/tb";

const ChooseText = () => {
  return (
    <div className='w-[50%] m-4 p-4'>
     <h1 className='text-5xl text-[#7555FD] font-semibold'>Why Student Choose Us For Gaining Their Knoledge!</h1>
     <p className='opacity-50 my-2'>Our quiz app offers an engaging and personalized learning experience designed to help students master topics at their own pace. With a user-friendly interface and real-time feedback, learning becomes fun, interactive, and effective.</p>
     <ul className='grid grid-cols-2 gap-1'>
      <li className='flex items-center gap-1 text-2xl'><TbCheckbox className='text-[#9782f2]'></TbCheckbox>Personalized Quiz </li>
      <li className='flex items-center gap-1 text-2xl'><TbCheckbox className='text-[#9782f2]'></TbCheckbox>Real-Time Feedback</li>
      <li className='flex items-center gap-1 text-2xl'><TbCheckbox className='text-[#9782f2]'></TbCheckbox>Progress Tracking</li>
      <li className='flex items-center gap-1 text-2xl'><TbCheckbox className='text-[#9782f2]'></TbCheckbox>Gamification</li>
      <li className='flex items-center gap-1 text-2xl'><TbCheckbox className='text-[#9782f2]'></TbCheckbox>Multiple Question Types</li>
      <li className='flex items-center gap-1 text-2xl'><TbCheckbox className='text-[#9782f2]'></TbCheckbox>Offline Access</li>
     </ul>
     <p className=' my-3 '>
      Ask Any Question: <span className='text-xl text-[#7555FD]'>01571****500</span>
     </p>
    </div>
  )
}

export default ChooseText
