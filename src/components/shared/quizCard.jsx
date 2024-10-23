"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "sonner";

const QuizCard = ({ item }) => {
    const { data } = useSession();
    // console.log(data?.user);

    const handleStartQuiz = () => {
        console.log(data?.user)
        if (data?.user) {
            window.location.href = `/quizes/${item?._id}`;
        }
        else {
            toast.error("Please login to Participate in the Quiz")

        }
    }

    return (
        <div className="text-start group p-5 bg-[#D6A0F8]/10 rounded-lg flex flex-col justify-center gap-2 relative after:absolute after:h-full after:bg-[#dcabf84b] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0">
            <Toaster richColors position='top-right' toastOptions={{
                style: {
                    marginTop: '60px', // Adjust the margin to fit under your header
                },
            }} />

            <Image
                className="rounded group-hover:opacity-50 group-hover:scale-105 transition-transform duration-200 w-full"
                src={item?.quizImage}
                alt={item?.quizName}
                width={300}
                height={200}
            />
            <p className="font-semibold tracking-wider group-hover:text-gray-700 text-xl">
                {item?.quizName}
            </p>
            <div className="flex justify-between">
                <p>Questions: {item?.totalQuestions}</p>
                <p>Duration: {item?.quizDuration} minutes</p>
            </div>
            <div className="flex justify-between text-xs">
                <p>Created by {item?.quizCreatorName}</p>
                <p>Published on: {new Date(item?.createAt).toLocaleString()}</p>
            </div>

            <Button onClick={handleStartQuiz} className="hidden group-hover:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"> Start Now
                {/* <Link href={`/quizes/${item?._id}`}>Start Now</Link> */}
            </Button>

            {item?.featured === "Yes" && (
                <p className="absolute top-5 -left-7 bg-[#5C0096] text-white text-sm px-8 py-1 transform -rotate-45 shadow-lg">
                    Featured
                </p>
            )}
            {item?.totalParticipated > 5 && (
                <p className="absolute top-5 -right-8 bg-[#005eeb] text-white text-sm px-10 py-1 transform rotate-45 shadow-lg">
                    Popular
                </p>
            )}

        </div>
    );
};

export default QuizCard;
