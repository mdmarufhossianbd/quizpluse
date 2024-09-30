import React from 'react'
import ChooseText from './chooseText'
import PhotoGallary from './photoGallary'
import Facilitys from './textofChoose/facilitys'
import Captions from '@/components/shared/captions'
import State from './textofChoose/state'

const ChooseUs = () => {
  return (
    <>
      <section className='flex sm:justify-center md:justify-between w-[100%] items-center'>
        <ChooseText></ChooseText>
        <PhotoGallary></PhotoGallary>
      </section>
      <section>
        <Captions title="Check our Facilitys" subtitle="quiz will test your knowledge of the various amenities and features offered by our organization. You'll be asked questions about our location, services, and other important details."></Captions>
        <Facilitys></Facilitys>
      </section>
      <section>
        <State></State>
      </section>
    </>
  )
}

export default ChooseUs
