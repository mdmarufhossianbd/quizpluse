import React from 'react'

const CustomBtn = ({title}) => {
  return (
    /* From Uiverse.io by Javierrocadev */ 
<button class="relative border hover:border-[#7555FD] duration-500 group cursor-pointer text-[#e7e4f4]  overflow-hidden h-14 w-56 rounded-md bg-[#4d2aeb] p-2 flex justify-center items-center font-extrabold">
  <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#7555FD] delay-150 group-hover:delay-75"></div>
  <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#6646f7] delay-150 group-hover:delay-100"></div>
  <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#6645f8] delay-150 group-hover:delay-150"></div>
  <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#613ff9] delay-150 group-hover:delay-200"></div>
  <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[#5f3cfb] delay-150 group-hover:delay-300"></div>
  <p class="z-10">{title}</p>
</button>



  )
}

export default CustomBtn
