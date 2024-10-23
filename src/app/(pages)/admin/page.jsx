"use client";
import { useSession } from "next-auth/react";
import { FiClipboard, FiUser, FiUserCheck, FiUserPlus, FiUsers } from "react-icons/fi";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-white">
          <div className="bg-[#bb00a2] p-6 rounded-lg shadow-lg flex items-center">
            <FiUserCheck className="text-4xl text-white mr-4" />
            <div>
              <h2 className="text-xl font-bold">Total Active Users</h2>
              <p className="text-3xl font-semibold">120</p>
            </div>
          </div>
          <div className="bg-[#17A2B8] p-6 rounded-lg shadow-lg flex items-center">
            <FiUserPlus className="text-4xl text-white mr-4" />
            <div>
              <h2 className="text-xl font-bold">New Users <span className="text-sm font-normal">{"(This Week)"}</span></h2>
              <p className="text-3xl font-semibold">10</p>
            </div>
          </div>
          <div className="bg-[#7700ff] p-6 rounded-lg shadow-lg flex items-center">
            <FiUser className="text-4xl text-white mr-4" />
            <div>
              <h2 className="text-xl font-bold">Top Quiz Attempts</h2>
              <p className="text-3xl font-semibold flex items-center gap-2">15 <span className="text-sm font-normal">{"(John Doe)"}</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Quizzes Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-[#5C0096]">Recent Quizzes</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <ul className="list-disc ml-6 space-y-2">
            <li>Quiz &apos;JavaScript Basics&apos; was created on Oct 12, 2024.</li>
            <li>New quiz &apos;React Fundamentals&apos; published on Oct 10, 2024.</li>
            <li>Quiz &apos;HTML & CSS&apos; updated on Oct 9, 2024.</li>
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
