"use client";
import Pagination from "@/components/shared/pagination";
import SimpleLoading from "@/components/shared/simpleLoading";
import ParticipationQuizzes from "@/components/userDashboard/participatedQuizzes/participationQuizzes";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ParticipatedQuizzes = () => {
  const { data } = useSession();
  const [quizzes, setQuizzes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalParticipatedQuiz,setTotalParticipatedQuiz] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuize = async () => {
      setLoading(true);
      if (data?.user?.email) {
        try {
          const response = await axios.get(
            `/api/v1/quiz/result?email=${data?.user?.email}&page=${page}&limit=10`
          );
          // console.log(response.data);
          setQuizzes(response?.data?.result);
          setTotalPages(response?.data?.totalPage);
          setTotalParticipatedQuiz(response?.data?.totalParticipatedQuiz)
          setLoading(false);

        } catch (error) {
          console.error("Error fetching quiz data", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchQuize();
  }, [data?.user?.email, page]);

  return (
    <div className="w-full">
      {loading && <SimpleLoading />}

      <h1 className="text-3xl font-bold mb-8 lg:mb-7 text-center">My Participation ({totalParticipatedQuiz} Quizzes)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {quizzes?.map((quiz) => (
          <ParticipationQuizzes key={quiz._id} quiz={quiz} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default ParticipatedQuizzes;
