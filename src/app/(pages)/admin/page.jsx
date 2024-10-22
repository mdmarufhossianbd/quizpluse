// "use client";
// import { useSession } from "next-auth/react";

// const AdminDashboard = () => {
//   const { data, status } = useSession();
//   if (status === "loading") {
//     return <p>Loading</p>;
//   }
//   return (
//     <div>
//       <div>
//         <div>
//           <h1 className="text-4xl font-bold mb-6 text-[#5C0096]">Dashboard</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             {/* Stat Cards */}
//             <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
//               <div className="text-[#5C0096] text-3xl mr-4">📊</div>
//               <div>
//                 <h2 className="text-2xl font-semibold">Total Quizzes</h2>
//                 <p className="text-lg">12</p>
//               </div>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
//               <div className="text-[#5C0096] text-3xl mr-4">📝</div>
//               <div>
//                 <h2 className="text-2xl font-semibold">Total Attempts</h2>
//                 <p className="text-lg">45</p>
//               </div>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
//               <div className="text-[#5C0096] text-3xl mr-4">⭐</div>
//               <div>
//                 <h2 className="text-2xl font-semibold">Average Score</h2>
//                 <p className="text-lg">85%</p>
//               </div>
//             </div>
//           </div>

//           {/* Recent Activities Section */}
//           <h2 className="text-3xl font-bold mb-4 text-[#5C0096]">
//             Recent Activities
//           </h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <ul className="list-disc ml-6">
//               <li>
//                 Quiz &apos;JavaScript Basics&apos; was attempted by 5 users.
//               </li>
//               <li>New quiz &apos;React Fundamentals&apos; created.</li>
//               <li>Updated settings for &apos;HTML & CSS&apos; quiz.</li>
//               {/* Add more activities here */}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



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
        <h1 className="text-5xl font-extrabold text-[#5C0096]">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <p className="text-xl text-gray-700">
            Welcome, {data?.user?.name || "Admin"}
          </p>
          <img
            className="w-10 h-10 rounded-full"
            src={data?.user?.image || "/default-avatar.png"}
            alt="User Avatar"
          />
        </div>
      </div>

      {/* Stat Cards Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg flex items-center">
          <FiClipboard className="text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Quizzes</h2>
            <p className="text-2xl">12</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center">
          <FiUsers className="text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Attempts</h2>
            <p className="text-2xl">45</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-white p-6 rounded-lg shadow-lg flex items-center">
          <FiBarChart2 className="text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Avg. Score</h2>
            <p className="text-2xl">85%</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 rounded-lg shadow-lg flex items-center">
          <FiUsers className="text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Users</h2>
            <p className="text-2xl">150</p>
          </div>
        </div>
      </div> */}
      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-white">
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
        <div className="bg-[#E94E77] p-6 rounded-lg shadow-lg flex items-center">
          <FiBarChart2 className="text-4xl text-white mr-4" />
          <div>
            <h2 className="text-xl font-bold">Avg. Score</h2>
            <p className="text-3xl font-semibold">85%</p>
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

      {/* System Overview Section */}
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



// "use client";
// import { useSession } from "next-auth/react";
// import {
//   FiClipboard,
//   FiUsers,
//   FiBarChart2,
//   FiList,
//   FiServer,
// } from "react-icons/fi";

// const AdminDashboard = () => {
//   const { data, status } = useSession();

//   if (status === "loading") {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="p-8  min-h-screen text-[#FFFFFF]">
//       {/* Dashboard Header */}
//       <div className="flex justify-between items-center mb-12">
//         <h1 className="text-5xl font-extrabold text-[#FFFFFF]">Admin Dashboard</h1>
//         <div className="flex items-center space-x-4">
//           <p className="text-xl">Welcome, {data?.user?.name || "Admin"}</p>
//           <img
//             className="w-12 h-12 rounded-full border-2 border-[#5C0096]"
//             src={data?.user?.image || "/default-avatar.png"}
//             alt="User Avatar"
//           />
//         </div>
//       </div>

//       {/* Stat Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//         <div className="bg-[#5C0096] p-6 rounded-lg shadow-lg flex items-center">
//           <FiClipboard className="text-4xl text-white mr-4" />
//           <div>
//             <h2 className="text-xl font-bold">Quizzes</h2>
//             <p className="text-3xl font-semibold">12</p>
//           </div>
//         </div>
//         <div className="bg-[#00A859] p-6 rounded-lg shadow-lg flex items-center">
//           <FiUsers className="text-4xl text-white mr-4" />
//           <div>
//             <h2 className="text-xl font-bold">Attempts</h2>
//             <p className="text-3xl font-semibold">45</p>
//           </div>
//         </div>
//         <div className="bg-[#E94E77] p-6 rounded-lg shadow-lg flex items-center">
//           <FiBarChart2 className="text-4xl text-white mr-4" />
//           <div>
//             <h2 className="text-xl font-bold">Avg. Score</h2>
//             <p className="text-3xl font-semibold">85%</p>
//           </div>
//         </div>
//         <div className="bg-[#FFA400] p-6 rounded-lg shadow-lg flex items-center">
//           <FiUsers className="text-4xl text-white mr-4" />
//           <div>
//             <h2 className="text-xl font-bold">Users</h2>
//             <p className="text-3xl font-semibold">150</p>
//           </div>
//         </div>
//       </div>

//       {/* User Management Section */}
//       <div>
//         <h2 className="text-3xl font-bold mb-4 text-[#FFFFFF]">User Management</h2>
//         <div className="bg-white p-6 rounded-lg shadow-lg mb-8 text-[#000000]">
//           <ul className="list-disc ml-6 space-y-2">
//             <li>Total Active Users: 120</li>
//             <li>New Users This Week: 10</li>
//             <li>Users with Most Quiz Attempts: John Doe (12 attempts)</li>
//           </ul>
//         </div>
//       </div>

//       {/* Recent Quizzes Section */}
//       <div>
//         <h2 className="text-3xl font-bold mb-4 text-[#FFFFFF]">Recent Quizzes</h2>
//         <div className="bg-white p-6 rounded-lg shadow-lg mb-8 text-[#000000]">
//           <ul className="list-disc ml-6 space-y-2">
//             <li>Quiz 'JavaScript Basics' was created on Oct 12, 2024.</li>
//             <li>New quiz 'React Fundamentals' published on Oct 10, 2024.</li>
//             <li>Quiz 'HTML & CSS' updated on Oct 9, 2024.</li>
//           </ul>
//         </div>
//       </div>

//       {/* System Overview Section */}
//       <div>
//         <h2 className="text-3xl font-bold mb-4 text-[#FFFFFF]">System Overview</h2>
//         <div className="bg-white p-6 rounded-lg shadow-lg text-[#000000]">
//           <ul className="list-disc ml-6 space-y-2">
//             <li>
//               <FiServer className="text-[#5C0096] inline-block mr-2" />
//               Server Status: <span className="text-green-600">Operational</span>
//             </li>
//             <li>Last System Backup: Oct 11, 2024</li>
//             <li>Pending Admin Tasks: 3</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
