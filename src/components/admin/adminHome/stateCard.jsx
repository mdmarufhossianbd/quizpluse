"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiClipboard, FiUsers } from 'react-icons/fi';

const StateCard = () => {
    const [totalQuizzes, setTotalQuizzes] = useState(0);
    const [totalParticipated, setTotalParticipated] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/v1/quiz`);
                if (res?.data?.success) {
                    setTotalQuizzes(res?.data?.totalQuiz);
                    const totalParticipatedCount = res?.data?.result.reduce((acc, quiz) => {
                        return acc + (quiz.totalParticipated || 0);
                    }, 0);
                    setTotalParticipated(totalParticipatedCount);
                }
            } catch (error) {
                console.error("Error fetching quizzes:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-white">
                <div className="bg-[#5C0096] p-6 rounded-lg shadow-lg flex items-center">
                    <FiClipboard className="text-4xl text-white mr-4" />
                    <div>
                        <h2 className="text-xl font-bold">Quizzes</h2>
                        <p className="text-3xl font-semibold">{totalQuizzes}</p>
                    </div>
                </div>
                <div className="bg-[#00A859] p-6 rounded-lg shadow-lg flex items-center">
                    <FiUsers className="text-4xl text-white mr-4" />
                    <div>
                        <h2 className="text-xl font-bold">Attempts</h2>
                        <p className="text-3xl font-semibold">{totalParticipated}</p>
                    </div>
                </div>
                <div className="bg-[#FFA400] p-6 rounded-lg shadow-lg flex items-center">
                    <FiUsers className="text-4xl text-white mr-4" />
                    <div>
                        <h2 className="text-xl font-bold">Users</h2>
                        <p className="text-3xl font-semibold">150</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StateCard;
