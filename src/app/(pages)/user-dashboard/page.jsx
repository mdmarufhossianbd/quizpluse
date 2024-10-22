"use client";
import { useSession } from "next-auth/react";
import { FiClipboard, FiStar, FiActivity } from "react-icons/fi";

const UserDashboard = () => {
  const { data, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#5C0096]">User Dashboard</h1>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Quiz Participation Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#5C0096] mb-4">Quiz Participation Over Time</h2>

        </div>
      </div>

    </div>
  );
};

export default UserDashboard;
