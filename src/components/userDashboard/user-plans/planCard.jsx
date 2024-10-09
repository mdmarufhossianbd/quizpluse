import React from 'react'
import './style.css'
import ListPlan from './listPlan'

const PlanCard = ({plan}) => {
    // console.log(plan)
  return (
   
<div class="card m-2 md:min-h-[700px] h-auto">
    {/* border propoerty */}
  <div class="card__border"></div>
  {/* tittle */}
  <div class="card_title__container">
    <div className="flex justify-between">
    <h1 class="card_title lg:text-3xl text-xl">{plan.name} </h1>
    <p className="text-white lg:text-xl text-xs">{plan.price} <span className='text-xs'>{plan.currency}</span></p>
    </div>
    <p class="card_paragraph text-xl mb-2">
      {plan.description}
    </p>
  </div>
  <hr class="line" />
  {/* list */}
  <ul class="card__list my-5 gap-10  h-[450px] md:h-[500px] overflow-auto">
    <ListPlan features={plan.features}></ListPlan>
    
  </ul>
  <div className='mx-5 bg-red-600 flex justify-center'>
  <button class="button text-3xl bg-[#6d28ff] text-white rounded-md w-[90%] hover:bg-white hover:text-[#6d28ff]">Subscribe Now</button>
  </div>
</div>

  )
}

export default PlanCard
