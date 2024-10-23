"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import QuizQuestion from './quizQuestion';

const QuizPlayground = ({ quiz }) => {
    const {data} = useSession()
    const router = useRouter()
    const [timeLeft, setTimeLeft] = useState(quiz.quizDuration * 60); // Time in seconds
    if(!data?.user){
        router.push('/login')
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    return (
        <div className="min-h-screen flex items-center bg-gradient-to-r from-[#371168] via-[#731E95] to-[#371168] p-2 lg:p-0 text-white">
            <div className="max-w-3xl w-full mx-auto border rounded-md md:p-4 space-y-4">
                {/* Quiz Header */}
                <h2 className="text-white text-3xl text-center font-bold my-5">{quiz.quizName}</h2>
                <div className="max-w-2xl mx-auto flex justify-between px-4 lg:px-0">
                    <p>Total Questions: <span>{quiz.totalQuestions}</span></p>
                    <p>Quiz Time: <span>{quiz.quizDuration}</span> Minutes</p>
                </div>
                <div className="max-w-2xl mx-auto flex justify-between px-4 lg:px-0">
                    <p>Total Point: <span>{quiz.totalQuestions}</span></p>
                    <p>Time Left: <span>{formatTime(timeLeft)}</span></p>
                </div>
                <div className='px-4'>
                    <QuizQuestion quiz={quiz} timeLimit={timeLeft} setTimeLeft={setTimeLeft} />
                </div>
            </div>
        </div>
    );
};

export default QuizPlayground;
