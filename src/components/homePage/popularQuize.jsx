'use client'
import { Spinner } from "@nextui-org/spinner";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'sonner';
import QuizCard from '../shared/quizCard';

const PopularQuize = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState();
  const [popularQuizzes, setPopularQuizzes] = useState([]);
  const [totalPages, setTotalPages] = useState()
  const [totalQuizzes, setTotalQuizzes] = useState()

  useEffect(() => {
    const getPopularQuizzes = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`/api/v1/quiz/popular?page=${page}&limit=12`)
        setPopularQuizzes(prevQuizzes => {
          const newQuizzes = res.data?.result;
          const uniqueQuizzes = newQuizzes.filter(quiz =>
            !prevQuizzes.some(prevQuiz => prevQuiz._id === quiz._id)  // duplicate quiz checking
          );
          return [...prevQuizzes, ...uniqueQuizzes];  // old and new quiz adding
        });
        setTotalQuizzes(res.data?.totalQuizzes)
        setTotalPages(res.data?.totalPages)
        setPage(res.data?.currentPage)
        setLoading(false)
      } catch (error) {
        toast.error(error.message)
        setLoading(false)
      }
    }
    getPopularQuizzes()
  }, [page])

  const handleSeeMore =() => {
    setPage(page +1)
  }

  return (
    <div className="lg:max-w-7xl xl:max-w-full mx-auto lg:px-16 px-5 my-16">
      <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:text-black text-center lg:my-10 md:my-8 my-6'>Popular Quizes</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {popularQuizzes?.map(item => <QuizCard key={item?._id} item={item} />)}

        {loading && <div className="flex items-center justify-center w-full">
          <Spinner size="lg" color="secondary" />
        </div>}
      </div>
      {totalQuizzes === popularQuizzes.length ? '' : <div className="flex justify-center my-10">
        <button onClick={handleSeeMore} className="px-6 py-2 rounded-full text-xl font-semibold bg-gradient-to-r from-[#203fae] to-[#6a21a8] text-white hover:form-[#6a21a8] hover:to-[#203fae] duration-300 hover:scale-105 hover:shadow-xl">See More</button>
      </div>}
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default PopularQuize;
