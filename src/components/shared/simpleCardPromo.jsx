import { Button } from 'radix-ui';
import React from 'react'
import { FcApproval } from "react-icons/fc";

const SimpleCardPromo = () => {
  return (
    <div  className='hover:bg-[#dfdbf2] grid border-2 border-[#7556FF] m-3 bg-white rounded-md'>
        <div className='flex justify-between items-center m-2 p-2'>
            <h1 className='font-bold text-2xl'>pro</h1>
        <FcApproval className='text-2xl'></FcApproval>
        </div>
        <p className='font-bold text-xl m-2 p-2'><span className='text-4xl'>49$</span>/month</p>
        <button className='bg-[#7556FF] m-2 p-2 rounded-lg bottom-0 text-white font-bold'>Upgrade</button>
    </div>
  )
}

export default SimpleCardPromo
