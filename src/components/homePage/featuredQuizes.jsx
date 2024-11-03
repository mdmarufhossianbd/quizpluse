'use client'
import { Spinner } from "@nextui-org/spinner";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import QuizCard from "../shared/quizCard";
import DataLoader from "../shared/dataLoader/dataLoader";

const FeaturedQuizes = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [FeaturedQuizzes, setFeaturedQuizzes] = useState([]);
  const [totalQuiz, setTotalQuiz] = useState();

  useEffect(() => {
    const getFeaturedQuizzes = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/v1/quiz/featured?page=${page}&limit=4`);
        console.log(res.data);
        if (res.data.success) {
          setFeaturedQuizzes((prevQuizzes) => {
            const newQuizzes = res.data?.result;
            const uniqueQuizzes = newQuizzes.filter(
              (quiz) => !prevQuizzes.some((prevQuiz) => prevQuiz._id === quiz._id) // duplicate quiz checking
            );
            return [...prevQuizzes, ...uniqueQuizzes]; // old and new quiz adding
          });
          setPage(res.data?.currentPage);
          setTotalQuiz(res.data?.totalQuiz);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getFeaturedQuizzes();
  }, [page]);

  const handleSeeMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="lg:max-w-7xl xl:max-w-full mx-auto lg:px-16 px-5 pt-4 pb-8 my-16 bg-gray-100" id="featured-quiz">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:text-black text-center lg:my-10 md:my-8 my-6">
        Featured Quizzes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {FeaturedQuizzes?.map((item) => (
          <QuizCard key={item._id} item={item} />
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center w-full mt-5">
          <DataLoader />
        </div>
      )}

      {totalQuiz !== FeaturedQuizzes.length && (
        <div className="flex justify-center my-10">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 rounded-full text-xl font-semibold bg-gradient-to-r from-[#203fae] to-[#6a21a8] text-white hover:from-[#6a21a8] hover:to-[#203fae] duration-300 hover:scale-105 hover:shadow-xl"
          >
            See More
          </button>
        </div>
      )}
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default FeaturedQuizes;
