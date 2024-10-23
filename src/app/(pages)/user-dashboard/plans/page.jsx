import Captions from '@/components/shared/captions'
import UpgradePlans from '@/components/shared/upgradePlans'
import React from 'react'


const plans = () => {
  return (
    <div className='grid items-center'>
        <Captions title='Subscribe Now'></Captions>
        <UpgradePlans></UpgradePlans>       
    </div>
  )
}

export default plans
