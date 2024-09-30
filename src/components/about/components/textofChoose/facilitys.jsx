import Captions from '@/components/shared/captions'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import logo from "../../../../../public/assets/image/Art & Craft Quiz.jpg"
import Image from 'next/image'
import CustomBtn from '@/components/shared/customBtn'

const Facilitys = () => {
    const FacilityList=[
        {
          "serial_on": 1,
          "title": "24/7 Study Access",
          "short_description": "Students can take quizzes and practice anytime, anywhere with 24/7 access to learning resources.",
          "importance_level": "High",
          "availability": "Global",
          "target_audience": "All Students"
        },
        {
          "serial_on": 2,
          "title": "Expert-Designed Quizzes",
          "short_description": "Quizzes are designed by subject matter experts to ensure quality and relevance to the curriculum.",
          "importance_level": "High",
          "content_quality": "Certified by Professionals",
          "feedback_provided": "Detailed answer explanations"
        },
        {
          "serial_on": 3,
          "title": "Multi-Device Support",
          "short_description": "Students can access the quiz app from any device including phones, tablets, and desktops.",
          "importance_level": "Medium",
          "device_compatibility": "Cross-platform",
          "user_experience": "Seamless transition across devices"
        }
      ]
      
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-2 justify-center'>
      {FacilityList.slice(0,3).map((item, index) => (
          <Card key={index} className="w-full p-5 border-2 border-[#7555FD]">
            <CardContent >
                <p className='font-extrabold lg:text-5xl md:text-3xl text-xl'>0{index+1}.</p>
              <p className="mt-4 text-2xl  font-bold">{item.title}</p>
              <p>{item.short_description}</p>
            </CardContent>
          </Card>
        ))}
        <CustomBtn></CustomBtn>
    </div>
  )
}

export default Facilitys
