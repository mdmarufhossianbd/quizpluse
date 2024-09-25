"use client";

import React from 'react';
import { FaHome, FaPlusCircle, FaListAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const UserSidebar = () => {
    const { data } = useSession()

    console.log(data)
    return (
        <div className="w-64 min-h-screen bg-[#5C0096] text-white p-4 flex flex-col">
            <div className="flex items-center mb-8">
                <div className="h-10 w-10 rounded-full bg-white mr-3"></div>
                <div>
                    <h2 className="text-lg font-semibold">Welcome, User!</h2>
                    <p className="text-sm text-gray-300">user@example.com</p>
                </div>
            </div>

            <nav className="flex flex-col flex-grow">
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
                <Link href="/user-dashboard/settings">
                    <p className="flex items-center mb-4 hover:bg-[#500081] p-2 rounded">
                        <FaCog className="mr-2" /> Settings
                    </p>
                </Link>
            </nav>

            <div>
                <Link href="/logout">
                    <p className="flex items-center mt-auto hover:bg-[#500081] p-2 rounded">
                        <FaSignOutAlt className="mr-2" /> Logout
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default UserSidebar;
