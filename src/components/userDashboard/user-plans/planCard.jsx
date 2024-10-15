import { IconArrowForwardUp } from '@tabler/icons-react'
import './style.css'

const PlanCard = ({ plan }) => {
  // console.log(plan)

  return (
    <div className=''>
      <div className={`h-14 flex justify-center rounded-t-md ${plan.name === 'starter' ? 'bg-purple-200 font-semibold' : ' bg-white'}`}>
        <p className='h-full flex items-center text-2xl'>{plan.name === 'starter' && 'Recommended'}</p>
      </div>
      <div className={`px-5 py-10 bg-gradient-to-t from-[#b966e763] to-[#2f57ef4a] hover:from-[#ba66e7c5] hover:to-[#2f55efc4] duration-400${plan.name === 'starter' && 'border-x-2 border-purple-200 bg-gradient-to-t from-[#2f55efc4] to-[#ba66e7c5] text-white'}`}>
        <p>Basic</p>
        <h2 className='text-5xl my-1 font-semibold'>Free</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi expedita quia impedit ex sequi cupiditate minima, facilis consectetur magnam modi?</p>
        <hr className='my-4' />
        {
          plan.features.map((f, idx) => (
            <li className='list-none flex items-center gap-3 py-1 group' key={idx}>
              <IconArrowForwardUp stroke={2} className='group-hover:ml-2 duration-300' />
              <p className='hover:font-semibold'>
                {f}
              </p>
            </li>
          ))
        }
        <div className='flex justify-center mt-5'>
          <button className='w-[85%] bg-[#6e00ff] rounded text-white font-semibold hover:scale-105 duration-250 py-2'>
            Upgrade Now
          </button>
        </div>
      </div>
    </div>

  )
}

export default PlanCard
