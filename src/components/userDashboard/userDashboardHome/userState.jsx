"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiActivity, FiClipboard, FiStar } from 'react-icons/fi';

const UserState = ({ userEmail }) => {
    // State variables to hold API data
    const [totalQuizzes, setTotalQuizzes] = useState(0);
    const [totalAttempts, setTotalAttempts] = useState(0);
    const [avgScore, setAvgScore] = useState(0);

    // Fetch user-specific quiz progress from 'user-progress' API
    useEffect(() => {
        const getResultDetails = async () => {
            try {
                const res = await axios.get(`/api/v1/quiz/user-progress?email=${userEmail}`);
                if (res.data?.success) {
                    const quizResults = res.data.quizResult;

                    // Calculate total earned and total points
                    const totalEarnedPoints = quizResults.reduce((acc, quiz) => acc + quiz.earnedPoint, 0);
                    const totalPoints = quizResults.reduce((acc, quiz) => acc + quiz.totalPoint, 0);

                    // Set total attempts and avgScore
                    setTotalAttempts(res.data.totalCompletedQuiz);
                    const averageScore = (totalEarnedPoints / totalPoints) * 100;
                    setAvgScore(averageScore.toFixed(2));
                }
            } catch (error) {
                console.error("Error fetching quiz results:", error);
            }
        };

        if (userEmail) {
            getResultDetails();
        }
    }, [userEmail]);

    // Fetch total quizzes data from 'user-wise-quiz' API
    useEffect(() => {
        const getUserQuizzes = async () => {
            try {
                const res = await axios.get(`/api/v1/quiz/user-wise-quiz?email=${userEmail}&page=1&limit=10`);
                if (res.data?.success) {
                    setTotalQuizzes(res.data.totalQuizes);
                }
            } catch (error) {
                console.error("Error fetching user quizzes:", error);
            }
        };

        if (userEmail) {
            getUserQuizzes();
        }
    }, [userEmail]);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* Total Quizzes */}
                <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
                    <FiClipboard className="text-[#5C0096] text-4xl mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">Total Quizzes</h2>
                        <p className="text-3xl font-bold"><span>{totalQuizzes}</span></p>
                    </div>
                </div>

                {/* Total Attempts */}
                <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
                    <FiActivity className="text-[#5C0096] text-4xl mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">Total Attempts</h2>
                        <p className="text-3xl font-bold"><span>{totalAttempts}</span></p>
                    </div>
                </div>

                {/* Average Score */}
                <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
                    <FiStar className="text-[#5C0096] text-4xl mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">Average Point</h2>
                        <p className="text-3xl font-bold"><span>{avgScore}%</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserState;
