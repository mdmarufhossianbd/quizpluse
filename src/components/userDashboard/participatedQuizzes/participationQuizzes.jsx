"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

const ParticipationQuizzes = ({ quiz }) => {
  return (
    <Card className="p-4 rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl bg-violet-100">
      <CardBody className="overflow-visible w-full border py-2">
        <Image
          alt={quiz?.quizName}
          className="object-cover rounded w-full h-full"
          src={quiz?.quizImage}
          //   width={270}
          //   height={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col gap-6 items-start">
        <h1 className="font-semibold text-xl">{quiz?.quizName}</h1>
       
          <div className="flex gap-16">
          <div className="text-[16px]">
          <p>Total Points: {quiz?.totalPoint}</p>
          <p>Earned Points: {quiz?.earnedPoint}</p>
          </div>

            <div className="py-2">
            <Link href={`/quizes/${quiz?.quizId}`} >
              <button className="bg-violet-600 py-1.5 px-4 rounded font-semibold text-white transition-transform duration-300 ease-in-out hover:bg-violet-700 hover:scale-105 hover:shadow-lg">
                Play Again
              </button>
            </Link>
          </div>
          </div>
         
   
      </CardHeader>
    </Card>
  );
};

export default ParticipationQuizzes;
