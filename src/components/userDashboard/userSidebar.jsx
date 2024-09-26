"use client";

import React from 'react';
import { FaHome, FaPlusCircle, FaListAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const UserSidebar = () => {
    const { data } = useSession()

    console.log(data)
    // const userName = data?.user?.name.split(" ");


    const handleLogout = () => {
        signOut()
    }
    return (
        <div className="w-64 min-h-screen bg-[#5C0096] text-white p-4 flex flex-col">
            <div className="flex items-center mb-8">
                <div className="h-10 w-10 rounded-full bg-white mr-3"></div>
                <div>
                    <h2 className="text-lg font-semibold"> {data?.user?.name}</h2>
                    <p className="text-sm text-gray-300">{data?.user?.email}</p>
                </div>
            </div>

            <nav className="flex flex-col mb-8">
                <Link href="/user-dashboard">
                    <p className="flex items-center mb-4 hover:bg-[#500081] p-2 rounded">
                        <FaHome className="mr-2" /> Dashboard
                    </p>
                </Link>
                <Link href="/user-dashboard/add-quiz">
                    <p className="flex items-center mb-4 hover:bg-[#500081] p-2 rounded">
                        <FaPlusCircle className="mr-2" /> Add Quiz
                    </p>
                </Link>
                <Link href="/user-dashboard/manage-quizzes">
                    <p className="flex items-center mb-4 hover:bg-[#500081] p-2 rounded">
                        <FaListAlt className="mr-2" /> Manage Quizzes
                    </p>
                </Link>
                <Link href="/user-dashboard/participatedQuizzes">
                    <p className="flex items-center mb-4 hover:bg-[#500081] p-2 rounded">
                        <FaListAlt className="mr-2" /> Participated Quizzes
                    </p>
                </Link>
                <Link href="/user-dashboard/profile">
                    <p className="flex items-center mb-4 hover:bg-[#500081] p-2 rounded">
                        <FaCog className="mr-2" /> Profile
                    </p>
                </Link>
            </nav>

            <div>
                <Link href="" onClick={handleLogout}>
                    <p className="flex items-center mt-auto hover:bg-[#500081] p-2 rounded">
                        <FaSignOutAlt className="mr-2" /> Logout
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default UserSidebar;
