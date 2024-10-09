"use client";
import Pagination from "@/components/shared/pagination";
import ParticipationQuizzes from "@/components/userDashboard/participatedQuizzes/participationQuizzes";

import { useEffect, useState } from "react";


const ParticipatedQuizzes = () => {
  const [quizzes, setQuizzes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuize = async () => {
        try {
            const response = await axios.get(
              `/api/v1/quiz/result?email=${email}&page=${page}&limit=${limit}`
            );
            setQuizzes(response.data); // Set the fetched data
          }  catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuize();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {quizzes.map((quiz) => (
        <ParticipationQuizzes key={quiz?._id} item={quiz} />
      ))}
    </div>
    <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default ParticipatedQuizzes;
