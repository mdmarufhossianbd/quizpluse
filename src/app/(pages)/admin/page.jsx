"use client";
import StateCard from "@/components/admin/adminHome/stateCard";
import UserManagement from "@/components/admin/adminHome/userManagement";
import DataLoader from "@/components/shared/dataLoader/dataLoader";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from 'axios';

const AdminDashboard = () => {
  const { data, status } = useSession();
  const [recentQuizzes, setRecentQuizzes] = useState([]);

  useEffect(() => {
    const fetchRecentQuizzes = async () => {
      try {
        const res = await axios.get(`/api/v1/quiz`);
        console.log(res.data); // Log the entire response to inspect the data structure
        if (res?.data?.success) {
          const quizzes = res.data.result;
          const sortedQuizzes = quizzes.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
          setRecentQuizzes(sortedQuizzes.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchRecentQuizzes();
  }, []);

  if (status === "loading") {
    return <DataLoader />;
  }

  return (
    <div className="p-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold text-[#5C0096]">Admin Dashboard</h1>
      </div>

      {/* Stat Cards Section */}
      <div>
        <StateCard />
      </div>

      {/* User Management Section */}
      <div>
        <UserManagement />
      </div>

      {/* Recent Quizzes Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-[#5C0096]">Recent Quizzes</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <ul className="list-disc ml-6 space-y-2">
            {recentQuizzes.length > 0 ? (
              recentQuizzes.map((quiz) => (
                <li key={quiz._id}>
                  Quiz &apos;{quiz.quizName}&apos; was created on
                  {quiz?.createAt ? new Date(quiz?.createAt).toLocaleDateString() : ' Unknown Date'}.
                </li>
              ))
            ) : (
              <li>No recent quizzes found.</li>
            )}
          </ul>
        </div>
      </div>

      {/* Analytics Overview Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4 text-[#5C0096]">Analytics Overview</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex justify-center items-center">
          <p className="text-xl text-gray-500">Chart or graph will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
