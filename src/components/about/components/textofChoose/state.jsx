"use client";
import React from 'react'
 
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

const State = () => {
  return (
    <div className="my-10 relative divide-x flex h-full w-full items-center justify-center md:justify-evenly overflow-hidden rounded-lg  bg-[#5C1296] p-20 shadow-xl">
      <div className=' lg:px-12 md:px-6 px-2'>
      <p className='lg:text-5xl md:text-3xl text-2xl font-bold'>45k+</p>
      <p>Active student</p>
      </div>
      <div className='lg:px-12 md:px-6 px-2'>
      <p className='lg:text-5xl md:text-3xl text-2xl font-bold'>25k+</p>
      <p>certification</p>
      </div>
      <div className='lg:px-12 md:px-6 px-2'>
      <p className='lg:text-5xl md:text-3xl text-2xl font-bold'>50+</p>
      <p>Country Person</p>
      </div>
      <div className='lg:px-12 md:px-6 px-2'>
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
