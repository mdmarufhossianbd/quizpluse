import Image from "next/image"
import Link from "next/link"
import robot from "../../../public/assets/3d robot.png"
const SimpleCardPromo = () => {
  return (
    <div className='hover:bg-[#7556ff] duration-250 p-2 border bg-[#6e00ff] rounded-md mb-5 ml-2 shadow-xl'>
      <Image className='absolute -top-32 left-1/2' src={robot} alt='robot' height={200} weight={50} />
      <div className='flex justify-center items-center flex-col pt-1 my-10'>
        <h1 className='font-semibold text-xl text-white py-2'>Upgrade to Premium</h1>
        <p className='font-medium text-gray-200'>Go pro to unlock more features</p>
      </div>
      <Link href={'/user-dashboard/plans'}>
        <button className='bg-white px-5 py-2 w-full rounded-md bottom-0 text-[#7556FF] font-bold mb-1'>Upgrade</button>
      </Link>
    </div>
  )
}

export default SimpleCardPromo
