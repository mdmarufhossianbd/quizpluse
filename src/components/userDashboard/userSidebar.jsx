"use client";

import React from 'react';
import { FaHome, FaPlusCircle, FaListAlt, FaCog, FaSignOutAlt, FaPen, FaUserAlt, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const UserSidebar = ({ isOpen, onClose }) => {
    const { data } = useSession();

    const handleLogout = () => {
        signOut();
    };

    return (
        <div
            className={`fixed top-0 left-0 w-64 min-h-screen bg-[#5C0096] text-white p-4 flex flex-col transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:relative md:translate-x-0 transition-transform duration-300 z-40 overflow-y-auto`}
        >
            <div className="flex items-center mb-8">
                <div className="h-10 w-10 rounded-full mr-3">
                    {/* <FaUser className="w-10 h-10 p-1 text-center border-2 rounded-full text-purple-800" /> */}
                    {data ?
                        <Image src={data?.user?.image} alt="User Image" width={96} height={96} className="w-full h-full object-cover rounded-full" />
                        :
                        <FaUser className="w-10 h-10 p-1 text-center border-2 rounded-full text-purple-800" />}


                </div>
                <div>
                    <h2 className="text-lg font-semibold">{data?.user?.name}</h2>
                    <p className="text-sm text-gray-300">{data?.user?.email}</p>
                </div>
            </div>

            <nav className="flex flex-col mb-8">
                <Link href="/user-dashboard">
                    <p onClick={onClose} className="flex items-center mb-4 hover:bg-[#500081] p-2 rounded cursor-pointer">
                        <FaHome className="mr-2" /> Dashboard
                    </p>
                </Link>
                <Link href="/user-dashboard/add-quiz">
                    <p onClick={onClose} className="flex items-center mb-4 hover:bg-[#500081] p-2 rounded cursor-pointer">
                        <FaPlusCircle className="mr-2" /> Add Quiz
                    </p>
                </Link>
                <Link href="/user-dashboard/manageQuizzes">
                    <p onClick={onClose} className="flex items-center mb-4 hover:bg-[#500081] p-2 rounded cursor-pointer">
                        <FaPen className="mr-2" /> Manage Quizzes
                    </p>
                </Link>
                <Link href="/user-dashboard/participatedQuizzes">
                    <p onClick={onClose} className="flex items-center mb-4 hover:bg-[#500081] p-2 rounded cursor-pointer">
                        <FaListAlt className="mr-2" /> Participated Quizzes
                    </p>
                </Link>
                <Link href="/user-dashboard/profile">
                    <p onClick={onClose} className="flex items-center mb-4 hover:bg-[#500081] p-2 rounded cursor-pointer">
                        <FaUserAlt className="mr-2" /> Profile
                    </p>
                </Link>
            </nav>

            <div>
                <button onClick={handleLogout} className="flex items-center mt-auto hover:bg-[#500081] p-2 rounded w-full">
                    <FaSignOutAlt className="mr-2" /> Logout
                </button>
            </div>
        </div>
    );
};

export default UserSidebar;
