"use client";
import DataLoader from "@/components/shared/dataLoader/dataLoader";
import Chart from "@/components/ui/chart.jsx";
import RecentlyCompletedQuiz from "@/components/userDashboard/userDashboardHome/recentlyCompletedQuiz";
import { getAllQuizes } from "@/utils/fetchQuizes";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiActivity, FiClipboard, FiStar } from "react-icons/fi";

const UserDashboard = () => {
  const { data, status } = useSession();
  const userEmail = data?.user?.email;
  const [quizes, setQuizes] = useState([]);
  const [quizResult, setQuizResult] = useState([]);

  // Fetch all quizzes on component mount
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const quizesData = await getAllQuizes();
        setQuizes(quizesData);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };
    fetchQuizzes();
  }, []);

  // Fetch user-specific quiz progress
  useEffect(() => {
    const getResultDetails = async () => {
      try {
        const res = await axios.get(`/api/v1/quiz/user-progress?email=${userEmail}`);
        if (res.data?.success) {
          setQuizResult(res?.data?.quizResult);
        }
      } catch (error) {
        console.error("Error fetching quiz results:", error);
      }
    };
    if (userEmail) {
      getResultDetails();
    }
  }, [userEmail]);

  const topFeaturedQuizzes = quizes.filter(quiz => quiz?.featured === "Yes").sort((a, b) => b.totalParticipated - a.totalParticipated).slice(0, 3);

  if (status === "loading") {
    return <DataLoader />;
  }

  // console.log(quizResult)

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Header // Welcome Message */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#5C0096]">User Dashboard</h1>
        <p className="text-lg text-gray-600">Welcome back, {data?.user?.name}!</p>
      </div>

      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
          <FiClipboard className="text-[#5C0096] text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Quizzes</h2>
            <p className="text-3xl font-bold"><span>20</span></p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
          <FiActivity className="text-[#5C0096] text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Attempts</h2>
            <p className="text-3xl font-bold"><span>45</span></p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
          <FiStar className="text-[#5C0096] text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Average Point</h2>
            <p className="text-3xl font-bold"><span>85%</span></p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 mb-12">
        {/* Quiz Participation Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#5C0096] mb-4">Quiz Participation Over Score</h2>
          {quizResult.length > 0 ? (
            <div >
              <Chart quizResult={quizResult}></Chart>
            </div>
          ) : (
            <p className="text-gray-600 text-center">You haven&apos;t Participated any quizzes yet.</p>
          )}

        </div>
      </div>

      {/* Recently Completed Quizzes Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-[#5C0096] mb-6">Recently Completed Quizzes</h2>

        {quizResult.length > 0 ? (
          <div >
            <RecentlyCompletedQuiz quizResult={quizResult} />
          </div>
        ) : (
          <p className="text-gray-600 text-center">You haven&apos;t completed any quizzes yet.</p>
        )}
      </div>


      {/* Featured Quizzes Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#5C0096] mb-4">Recommended Quizzes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topFeaturedQuizzes.map((quiz) => (
            <Link href={`/quizes/${quiz?._id}`} key={quiz?._id}>
              <div key={quiz._id} className={`bg-[#5C0096] text-white p-4 rounded-lg`}>
                <h3 className="text-xl font-semibold">{quiz?.quizName}</h3>
                <p className="mt-2">{quiz?.totalQuestions} Questions</p>
                <p className="mt-1">Attempts: {quiz?.totalParticipated}</p>
                <p className="mt-1">Category: {quiz?.quizCategory}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
