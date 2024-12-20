"use client"

import Image from "next/image";
import Link from "next/link";
import { Toaster } from "sonner";

const QuizCard = ({ item }) => {

    return (
        <div className="text-start group p-5 bg-gradient-to-t from-[#595AED] to-purple-800 hover:from-gray-800 hover:to-purple-800 rounded-lg flex flex-col justify-center gap-2 relative after:absolute after:h-full after:from-[#595AED] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 h-full">
            <Toaster richColors position='top-right' toastOptions={{
                style: {
                    marginTop: '60px', // Adjust the margin to fit under your header
                },
            }} />

            <Image
                className="rounded group-hover:opacity-50 group-hover:scale-105 transition-transform duration-400 w-full h-full object-cover"
                src={item?.quizImage}
                alt={item?.quizName}
                width={300}
                height={200}
            />
            <p className="font-semibold tracking-wider group-hover:text-white text-white text-xl mt-2">
                {item?.quizName}
            </p>
            <div className="flex justify-between text-white">
                <p>Questions: {item?.totalQuestions}</p>
                <p>Duration: {item?.quizDuration} minutes</p>
            </div>
            <div className="flex justify-between text-xs text-white">
                <p>Created by {item?.quizCreatorName}</p>
                <p>Published on: {new Date(item?.createAt).toLocaleString()}</p>
            </div>

            <button className="bg-white hover:shadow-lg text-xl px-5 py-2 rounded-full hidden group-hover:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Link href={`/quizes/${item?._id}`}>Start Now</Link>
            </button>

            {item?.featured === "Yes" && (
                <p className="absolute top-5 -left-7 bg-[#5C0096] text-white text-sm px-8 py-1 transform -rotate-45 shadow-lg">
                    Featured
                </p>
            )}
            {item?.totalParticipated >= 5 && (
                <p className="absolute top-5 -right-8 bg-[#005eeb] text-white text-sm px-10 py-1 transform rotate-45 shadow-lg">
                    Popular
                </p>
            )}

        </div>
    );
};

export default QuizCard;
