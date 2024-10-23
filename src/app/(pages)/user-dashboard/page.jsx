"use client";
import DataLoader from "@/components/shared/dataLoader/dataLoader";
import Chart from "@/components/ui/chart.jsx";
import { getAllQuizes } from "@/utils/fetchQuizes";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiClipboard, FiStar, FiActivity } from "react-icons/fi";

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

  console.log(quizes)
  // console.log(featuredQuiz)

  if (status === "loading") {
    return <DataLoader />;
  }

  console.log(quizResult)

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
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
            <p className="text-3xl font-bold">12</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
          <FiActivity className="text-[#5C0096] text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Attempts</h2>
            <p className="text-3xl font-bold">45</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
          <FiStar className="text-[#5C0096] text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Average Score</h2>
            <p className="text-3xl font-bold">85%</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 mb-12">
        {/* Quiz Participation Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#5C0096] mb-4">Quiz Participation Over Score</h2>
          <Chart quizResult={quizResult}></Chart>
        </div>
      </div>


      {/* Recently Completed Quizzes Section */}
      {/* <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-[#5C0096] mb-4">Recently Completed Quizzes</h2>
        {quizResult.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizResult.map((result) => (
              <div key={result._id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img
                  src={result.quizImage}
                  alt={result.quizName}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{result.quizName}</h3>
                <p className="text-lg text-gray-600 mb-1">
                  Earned Points:{" "}
                  <span className="font-bold text-gray-800">
                    {result.earnedPoint}
                  </span>
                  /{result.totalPoint}
                </p>
                <Link
                  href={`/quizes/${result.quizId}`}
                  className="text-[#5C0096] font-bold hover:underline"
                >
                  View Quiz Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No quizzes completed yet.</p>
        )}
      </div> */}

      {/* Recently Completed Quizzes Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-[#5C0096] mb-6">Recently Completed Quizzes</h2>

        {quizResult.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizResult
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by most recent first
              .slice(0, 3) // Take only the most recent 3 results
              .map((result) => (
                <div
                  key={result._id}
                  className="bg-gray-100 hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {/* Quiz Image */}
                  <div className="relative h-40 mb-6">
                    <img
                      src={result.quizImage}
                      alt={result.quizName}
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                  </div>

                  {/* Quiz Info */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{result.quizName}</h3>

                  <div className="text-lg text-gray-600">
                    <p className="mb-2">
                      <span className="font-semibold text-gray-800">Earned Points:</span>{" "}
                      <span className="font-bold text-[#5C0096]">{result.earnedPoint}</span>
                      /{result.totalPoint}
                    </p>
                    <p className="text-sm text-gray-500">Completed on: {new Date(result.createdAt).toLocaleDateString()}</p>
                  </div>


                  {/* View Quiz Details Link */}
                  {/* <Link
                    href={`/quizes/${result.quizId}`}
                    className="inline-block mt-4 text-sm font-bold text-[#5C0096] hover:text-[#370a69] hover:underline"
                  >
                    View Quiz Details
                  </Link> */}
                </div>
              ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">You haven't completed any quizzes yet.</p>
        )}
      </div>


      {/* Featured Quizzes Section */}

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#5C0096] mb-4">Recommended Quizzes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topFeaturedQuizzes.map((quiz) => (
            <Link href={`/quizes/${quiz?._id}`}>
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
