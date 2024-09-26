"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { FaComment, FaPen, FaUserFriends } from 'react-icons/fa';

const page = () => {
    const { data } = useSession()

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen p-8">
                <div className="bg-white rounded-lg shadow-lg p-10 w-3/5  text-center relative">

                    {/* Profile Image */}
                    <div className="relative mx-auto w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image src={data?.user?.image} alt="User Image" width={96} height={96} className="w-full h-full object-cover" />
                    </div>

                    {/* User Info */}
                    <div className='my-8'>
                        <h2 className="text-2xl font-semibold text-[#5C0096]">{data?.user?.name}</h2>
                        <p className="text-gray-500 mb-4">{data?.user?.email}</p>
                    </div>


                    {/* Stats Section */}
                    <div className="flex justify-between items-center text-gray-600 mb-8 shadow p-4 rounded-xl">
                        <div className="text-center">
                            <span className="block text-lg font-semibold">65</span>
                            <span className="text-xs">Quizzes</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-lg font-semibold">43</span>
                            <span className="text-xs">Participated Quizzes</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-lg font-semibold">21</span>
                            <span className="text-xs">Wins</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    {/* <div className="flex justify-around mt-4">
                        <button className="flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                            <FaUserFriends className="mr-2" /> Connect
                        </button>
                        <button className="flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                            <FaComment className="mr-2" /> Message
                        </button>
                    </div> */}


                    {/* Show More Button */}
                    <button onClick={"handleEdit"} className=" bg-[#5C0096] hover:bg-[#500081] px-4 py-2 text-white rounded-full transition-colors">
                        <div className='flex items-center justify-center'>
                            <FaPen className="mr-2" /> Edit
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;