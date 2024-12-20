"use client"

import { IconPointFilled } from '@tabler/icons-react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ChangePassword from '../userDashboard/profile/changePassword';
import UpdateProfile from '../userDashboard/profile/updateProfile';
import DataLoader from './dataLoader/dataLoader';

const UserProfile = () => {
    const { data, status } = useSession();
    const [currentUser, setCurrentUser] = useState(null);
    const userEmail = data?.user?.email;
    const [totalCreatedQuizzes, setTotalCreatedQuizzes] = useState(0)
    const [totalParticipatedQuiz, setTotalParticipatedQuiz] = useState(0)
    const [totalEarnedPoints, setTotalEarnedPoints] = useState(0)

    useEffect(() => {
        const getUserInfo = async () => {
            await axios.post(`/api/v1/user/user-details`, { email: userEmail })
                .then(res => {
                    console.log(res?.data);
                    setCurrentUser(res?.data?.result)
                    setTotalCreatedQuizzes(res?.data?.totalCreatedQuizzes)
                    setTotalParticipatedQuiz(res.data?.totalParticipatedQuiz)
                    setTotalEarnedPoints(res.data?.totalEarnedPoints)
                })
        }
        getUserInfo()
    }, [userEmail, status])

    if (status === "loading") {
        return <DataLoader />;
    }

    const handleEdit = () => { };


    return (
        <div className='rounded-xl' style={{
            backgroundImage: 'url("/assets/quizpulse.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="flex justify-center items-center min-h-screen p-4 lg:p-10 pt-8">
                <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-10 w-full max-w-md md:max-w-2xl lg:max-w-3xl text-center relative mt-14 lg:mt-10">

                    {/* Profile Image */}
                    <div className="absolute mx-auto -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image src={currentUser?.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2RIsrYrlbEcNP7xnxLQ2gYiylcUqzsrVSwKR1wrvLV4x06yFGVbnYB7rnbBE2gRxxjU&usqp=CAU'}
                            alt={currentUser?.userFullName || "User Photo"}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover" />
                    </div>

                    {/* User Info */}
                    <div className='mt-14 mb-6'>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">{currentUser?.name}</h2>
                        <p className="text-gray-500 text-sm md:text-base">Email : {currentUser?.email}</p>
                        <p className="text-gray-500 text-sm md:text-base mb-4">username: @{currentUser?.username}</p>
                    </div>

                    {/* User Role & Status */}
                    <div>
                        <p className="text-sm md:text-base">User Role : {currentUser?.role}</p>
                        <p className="flex items-center justify-center text-sm md:text-base">
                            Account Status : {currentUser?.status === 'active'
                                ? <IconPointFilled className='text-green-500' />
                                : <IconPointFilled className='text-red-500' />}
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-gray-600 shadow p-4 rounded-xl">
                        <div className="text-center">
                            <span className="block text-lg font-semibold text-[#5C0096]">{totalCreatedQuizzes}</span>
                            <span className="text-xs md:text-sm">Created Quizzes</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-lg font-semibold text-[#5C0096]">{totalParticipatedQuiz}</span>
                            <span className="text-xs md:text-sm">Participated Quizzes</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-lg font-semibold text-[#5C0096]">{totalEarnedPoints}</span>
                            <span className="text-xs md:text-sm">Earn Points</span>
                        </div>
                    </div>

                    {/* Edit Buttons */}
                    <div className='flex flex-col md:flex-row gap-3 mt-6 items-center justify-center'>
                        <ChangePassword email={userEmail}></ChangePassword>
                        <UpdateProfile currentUser={currentUser}></UpdateProfile>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;