"use client"

import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import QuizQuestion from './quizQuestion';

const QuizPlayground = () => {
    const [quizData, setQuizData] = useState(null);
    const [timeLeft, setTimeLeft] = useState(600);

    // Fetch quiz data
    // useEffect(() => {
    //     if (id) {
    //         // Fetch the quiz by ID from the backend
    //         fetch(`/api/quiz/${id}`)
    //             .then(res => res.json())
    //             .then(data => setQuizData(data));
    //     }
    // }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-r from-[#371168] via-[#731E95] to-[#371168] p-4 text-white ">
                <div className="max-w-3xl mx-auto shadow-lg p-4 space-y-2">
                    <h1 className="text-white text-3xl text-center font-bold">Quiz Name</h1>
                    {/* <div className='flex flex-col lg:flex-row justify-between'>
                        <p>Created By: <span>Abrarul</span></p>
                        <p>Published On: <span>2nd October, 2024</span></p>
                    </div> */}
                    <div className='flex  flex-col lg:flex-row justify-between '>
                        <p>Total Questions: <span>10</span></p>
                        <p>Quiz Time: <span>10</span> Minutes</p>
                    </div>
                    <div className="text-md text-end ">
                        <span className="font-semibold">Time Left: </span>
                        <span>{Math.floor(timeLeft / 60)}:{timeLeft % 60}</span>
                    </div>
                    <div>
                        <QuizQuestion />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizPlayground;