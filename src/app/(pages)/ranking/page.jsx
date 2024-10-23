import Ranking from '@/components/ranking/ranking'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gradient-to-r from-[#8077f4] to-[#ab81ee] grid justify-center text-center'>
      <h1 className='text-5xl p-3 font-semibold'>Ranking</h1>
      <p>Compete with the best and climb the leaderboard. <br />
      Aim for the top and claim the crown!</p>
      <Ranking></Ranking>
    </div>
  )
}

export default page
