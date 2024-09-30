import React from 'react'

const Captions = ({title,subtitle}) => {
  return (
    <div className='grid justify-center '>
      <h1 className='flex justify-center lg:text-5xl md:text-2xl text-xl text-[#7555FD] font-semibold'>{title}</h1>
      <div className='flex justify-center lg:w-[50%] w-full relative left-0 lg:left-[24%] opacity-80 my-2'>
      <p className='text-center'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Captions
