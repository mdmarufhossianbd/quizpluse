'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner10 } from "react-icons/im";
import { toast } from "sonner";
import QuizCard from "../shared/quizCard";
import Pagination from "./pagination";

const PublishQuizzes = () => {
    const [publishQuizzes, setPublishQuizzes] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getPublishQuizzes = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`/api/v1/quiz/publish?page=${page}&limit=8`)
                setPublishQuizzes(res.data?.result);
                setPage(res.data?.currentPage)
                setTotalPages(res.data?.totalPages)
                setLoading(false)
            } catch (error) {
                toast.error(error.message)
                setLoading(false)
            }
        }
        getPublishQuizzes()
    }, [page])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {publishQuizzes?.map(item => <QuizCard key={item?._id} item={item} />)}
            </div>
            {
                loading && <div className="flex items-center justify-center">
                    <ImSpinner10 size={50} className="text-white animate-spin" />
                </div>
            }
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    );
};

export default PublishQuizzes;