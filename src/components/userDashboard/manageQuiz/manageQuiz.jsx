"use client";

import Pagination from '@/components/shared/pagination';
import QuizTable from '@/components/shared/quizTable';
import SimpleLoading from '@/components/shared/simpleLoading';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const ManageQuiz = () => {
    const { data } = useSession();
    const [quizzes, setQuizzes] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [deleted, setDelete] = useState(false);

    useEffect(() => {
        const getQuizData = async () => {
            setLoading(true)
            if (data?.user?.email) {
                try {
                    const response = await axios.get(`/api/v1/quiz/user-wise-quiz?email=${data?.user?.email}&page=${page}&limit=10`);
                    setQuizzes(response?.data?.result);
                    setTotalPages(response?.data?.totalPages);
                    setLoading(false)
                } catch (error) {
                    console.error("Error fetching quiz data", error);
                    setLoading(false)
                }
            }
            setLoading(false)
        };
        getQuizData();
    }, [data?.user?.email, page, deleted]);

    return (
        <div>
            {loading && <SimpleLoading />}
            <QuizTable quizzes={quizzes} setDelete={setDelete} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    );
};

export default ManageQuiz;
