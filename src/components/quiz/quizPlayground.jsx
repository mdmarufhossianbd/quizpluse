"use client";

import { useEffect, useState } from 'react';
import QuizQuestion from './quizQuestion';

const QuizPlayground = ({ quiz }) => {
    const [timeLeft, setTimeLeft] = useState(quiz.quizDuration * 60); // Time in seconds

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
        <div className="min-h-screen flex items-center bg-gradient-to-r from-[#371168] via-[#731E95] to-[#371168] p-4 text-white">
            <div className="max-w-3xl w-full mx-auto shadow-lg p-4 mb-8 space-y-4">
                {/* Quiz Header */}
                <h1 className="text-white text-3xl text-center font-bold">{quiz.quizName}</h1>
                <div className="flex flex-col lg:flex-row justify-between">
                    <p>Total Questions: <span>{quiz.totalQuestions}</span></p>
                    <p>Quiz Time: <span>{quiz.quizDuration}</span> Minutes</p>
                </div>
                <div className="text-md text-end">
                    <span className="font-semibold">Time Left: </span>
                    <span>{formatTime(timeLeft)}</span>
                </div>

                <div>
                    <QuizQuestion quiz={quiz} timeLimit={timeLeft} setTimeLeft={setTimeLeft} />
                </div>
            </div>
        </div>
    );
};

export default QuizPlayground;
