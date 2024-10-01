"use client";

import QuizTable from '@/components/shared/quizTable';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const ManageQuiz = () => {
    const { data: sessionData } = useSession();
    const [quizzes, setQuizzes] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 10;

    useEffect(() => {
        const getQuizData = async () => {
            if (sessionData?.user?.email) {
                try {
                    const response = await axios.get(`/api/v1/quiz/user-wise-quiz?email=${sessionData?.user?.email}&page=${page}&limit=${limit}`);
                    setQuizzes(response?.data?.result);
                    console.log(response?.data);
                    setTotalPages(response?.data?.totalPages);
                } catch (error) {
                    console.error("Error fetching quiz data", error);
                }
            }
        };
        getQuizData();
    }, [sessionData?.user?.email, page]);
    console.log(page, totalPages)

    // Pagination controls
    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) setPage(page - 1);
    };


    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 text-center">Manage Quizzes</h1>
            <div className="overflow-x-auto">
                <QuizTable quizzes={quizzes} />
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    className="px-4 py-2 bg-[#5C0096] text-white hover:bg-[#500081] rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-sm">
                    Page {page} of {totalPages}
                </span>


                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages}
                    className="px-4 py-2 rounded bg-[#5C0096] text-white hover:bg-[#500081] disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ManageQuiz;