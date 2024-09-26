"use client"

import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaComment, FaPen, FaUserFriends } from 'react-icons/fa';

const page = () => {
    const { data } = useSession()
    const [currentUser, setCurrentUser] = useState(null);

    // const userEmail = data?.user?.email;
    useEffect(() => {
        const getUser = async () => {
            await axios.get(`/api/v1/user?email=${data?.user?.email}`)
                .then(res => {
                    // setCurrentUser(res?.data?.result)
                    console.log(res.data);
                })
        }
        getUser()
    }, [])

    console.log(currentUser)

    return (
        <div className='rounded-xl' style={{
            backgroundImage: 'url("/assets/quizpulse.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="flex justify-center items-center min-h-screen p-4 lg:p-10 pt-8 " >
                <div className="bg-white rounded-lg shadow-lg  p-5 md:p-5 lg:p-10 w-full md:w-5/8 lg:w-3/5 text-center relative mt-14 lg:mt-10">

                    {/* Profile Image */}
                    <div className="absolute mx-auto -top-16 left-[25%] md:left-[35%] lg:left-[38%] w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image src={data?.user?.image} alt="User Image" width={96} height={96} className="w-full h-full object-cover" />
                    </div>

                    {/* User Info */}
                    <div className='mt-14 mb-8'>
                        <h2 className="text-2xl font-semibold text-gray-800">{data?.user?.name}</h2>
                        <p className="text-gray-500 mb-4">{data?.user?.email}</p>
                    </div>


                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center text-gray-600 mb-8 shadow p-4 rounded-xl">
                        <div className="text-center mb-2">
                            <span className="block text-xl font-semibold text-[#5C0096]">65</span>
                            <span className="text-sm">Quizzes</span>
                        </div>
                        <div className="text-center mb-2">
                            <span className="block text-xl font-semibold text-[#5C0096]">43</span>
                            <span className="text-sm">Participated Quizzes</span>
                        </div>
                        <div className="text-center mb-2">
                            <span className="block text-xl font-semibold text-[#5C0096]">21</span>
                            <span className="text-sm">Wins</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    {/* 
                        <button className="flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                            <FaComment className="mr-2" /> Status: 
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

