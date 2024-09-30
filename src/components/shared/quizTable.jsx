"use client";

import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const QuizTable = ({ quizzes }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#5c009638] ">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Quiz Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Created</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Questions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {quizzes?.map((quiz) => (
                    <tr key={quiz._id}>
                        <td className="px-6 py-4 whitespace-nowrap">{quiz.quizName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{quiz.quizCategory}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{new Date(quiz.createAt).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{quiz.quizDuration} mins</td>
                        <td className="px-6 py-4 whitespace-nowrap">{quiz.totalQuestions}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default QuizTable;