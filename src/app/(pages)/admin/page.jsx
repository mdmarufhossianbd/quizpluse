"use client";
import { useSession } from "next-auth/react";
import { FiClipboard, FiUsers, FiBarChart2, FiList, FiServer } from "react-icons/fi";

const AdminDashboard = () => {
  const { data, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold text-[#5C0096]">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">

        </div>
      </div>

      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-white">
        <div className="bg-[#5C0096] p-6 rounded-lg shadow-lg flex items-center">
          <FiClipboard className="text-4xl text-white mr-4" />
          <div>
            <h2 className="text-xl font-bold">Quizzes</h2>
            <p className="text-3xl font-semibold">12</p>
          </div>
        </div>
        <div className="bg-[#00A859] p-6 rounded-lg shadow-lg flex items-center">
          <FiUsers className="text-4xl text-white mr-4" />
          <div>
            <h2 className="text-xl font-bold">Attempts</h2>
            <p className="text-3xl font-semibold">45</p>
          </div>
        </div>
        {/* <div className="bg-[#E94E77] p-6 rounded-lg shadow-lg flex items-center">
          <FiBarChart2 className="text-4xl text-white mr-4" />
          <div>
            <h2 className="text-xl font-bold">Avg. Score</h2>
            <p className="text-3xl font-semibold">85%</p>
          </div>
        </div> */}
        <div className="bg-[#FFA400] p-6 rounded-lg shadow-lg flex items-center">
          <FiUsers className="text-4xl text-white mr-4" />
          <div>
            <h2 className="text-xl font-bold">Users</h2>
            <p className="text-3xl font-semibold">150</p>
          </div>
        </div>
      </div>

      {/* User Management Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-[#5C0096]">User Management</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <ul className="list-disc ml-6 space-y-2">
            <li>Total Active Users: 120</li>
            <li>New Users This Week: 10</li>
            <li>Users with Most Quiz Attempts: John Doe (12 attempts)</li>
            {/* Add more user-related data */}
          </ul>
        </div>
      </div>

      {/* Recent Quizzes Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-[#5C0096]">Recent Quizzes</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <ul className="list-disc ml-6 space-y-2">
            <li>Quiz 'JavaScript Basics' was created on Oct 12, 2024.</li>
            <li>New quiz 'React Fundamentals' published on Oct 10, 2024.</li>
            <li>Quiz 'HTML & CSS' updated on Oct 9, 2024.</li>
            {/* Add more quizzes here */}
          </ul>
        </div>
      </div>

      {/* Need to show a chart section below */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-[#5C0096]">System Overview</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <FiServer className="text-[#5C0096] inline-block mr-2" />
              Server Status: <span className="text-green-600">Operational</span>
            </li>
            <li>Last System Backup: Oct 11, 2024</li>
            <li>Pending Admin Tasks: 3</li>
            {/* Add more system-related data */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


