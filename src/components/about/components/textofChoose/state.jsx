"use client";
import React from 'react'

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

const State = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 my-10  relative  h-full w-full  overflow-hidden rounded-lg  bg-[#5C1296] text-white p-20 shadow-xl">
      <div className='lg:px-12 md:px-6 px-2 text-center mb-4'>
        <p className='lg:text-5xl md:text-3xl text-2xl font-bold'>45k+</p>
        <p>Active student</p>
      </div>
      <div className='lg:px-12 md:px-6 px-2 text-center border-0 md:border-l-4 mb-4'>
        <p className='lg:text-5xl md:text-3xl text-2xl font-bold'>25k+</p>
        <p>certification</p>
      </div>
      <div className='lg:px-12 md:px-6 px-2 text-center border-0 md:border-l-4 mb-4'>
        <p className='lg:text-5xl md:text-3xl text-2xl font-bold'>50+</p>
        <p>Country Person</p>
      </div>
      <div className='lg:px-12 md:px-6 px-2 text-center border-0 md:border-l-4'>
        <p className='lg:text-5xl md:text-3xl text-2xl font-bold'>10k+</p>
        <p>Daily user</p>
      </div>
      <DotPattern
        width={25}
        height={25}
        cx={1}
        cy={1}
        cr={1}
        cl={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  )
}

export default State
