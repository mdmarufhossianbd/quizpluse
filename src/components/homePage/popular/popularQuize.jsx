import React from 'react';
import Image from 'next/image';
import logo from './image/83.jpg'

const dataPopuler = [
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSGVuStFxj_Dnv9V9qlzkor22IRPIglGkVA&s",
    quizName: "General Knowledge Quiz",
    numberOfQuestions: 10,
    totalDuration: "15 minutes",
    createdBy: "Mesia",
    publishDate: "2024-09-19",
    rating: 4.5
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSGVuStFxj_Dnv9V9qlzkor22IRPIglGkVA&s",
    quizName: "Science & Nature Quiz",
    numberOfQuestions: 12,
    totalDuration: "20 minutes",
    createdBy: "John Doe",
    publishDate: "2024-08-10",
    rating: 4.8
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSGVuStFxj_Dnv9V9qlzkor22IRPIglGkVA&s",
    quizName: "History Trivia",
    numberOfQuestions: 15,
    totalDuration: "25 minutes",
    createdBy: "Sarah Lee",
    publishDate: "2024-07-15",
    rating: 4.7
  },
];

const PopularQuize = () => {
  return (
    <div className="flex flex-wrap">
      {dataPopuler.map((item, index) => {
        return (
          <div
            key={index}
            className="text-start m-2 w-96 group px-10 py-5 bg-[#D6A0F8]/10 rounded-lg flex flex-col  justify-center gap-2 relative after:absolute after:h-full after:bg-[#d9a6f7] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0"
          >
                        <p className="font-semibold text-gray-600 text-xs">
                Rating: <span className='text-orange-400 text-xs group-hover:text-black'>{item.rating}</span>
            </p>
            <Image
              src={logo}
              alt={item.quizName}
              width={300}
              height={200}
              className="rounded-lg group-hover:opacity-50"
            />
            <p className="font-semibold text-gray-200  tracking-wider group-hover:text-gray-700 text-xl">
              {item.quizName}
            </p>
            <div className='flex justify-between'> 
              <p>
              {item.numberOfQuestions} Questions
              </p> 
              <p>
               {item.totalDuration}
              </p>
                </div>
            
            <p className="font-semibold text-gray-600 text-xs">
              Created by {item.createdBy} 
            </p>
            <div className="text-[#D6A0F8] flex justify-between font-semibold group-hover:text-gray-800">
            <p >
              Published on: 
            </p>
            <p>
            {item.publishDate}
            </p>
            </div>
            
            <p
      class="btun4 hidden group-hover:flex absolute left-[40%] top-[40%] text-center justify-center items-center gap-3 group-hover:bg-[#500081] bg-[#D6A0F8] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
    >
      Play Now
    </p>
          </div>
        );
      })}
    </div>
  );
};

export default PopularQuize;
