"use client"

import SimpleLoading from '@/components/shared/simpleLoading';
import { IconPencil, IconPointFilled } from '@tabler/icons-react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
    const { data, status } = useSession()
    const [currentUser, setCurrentUser] = useState(null)

    const userEmail = data?.user?.email
    
    useEffect(() => {
        const getUserInfo = async () => {
            await axios.post(`/api/v1/user/user-details`, {email : userEmail})
            .then(res => {
                console.log(res.data);
                setCurrentUser(res.data?.result)
            })
        }
        getUserInfo()
    }, [userEmail, status])
    
    if(status === 'loading'){
        return <SimpleLoading />
    }

    const handleEdit = () => {

    }

    return (
        <div className='rounded-xl' style={{
            backgroundImage: 'url("/assets/quizpulse.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="flex justify-center items-center min-h-screen p-4 lg:p-10 pt-8 " >
                <div className="bg-white rounded-lg shadow-lg p-5 md:p-5 lg:p-10 w-full md:w-5/8 lg:w-3/5 text-center relative mt-14 lg:mt-10">

                    {/* Profile Image */}
                    <div className="absolute mx-auto -top-16 left-[25%] md:left-[35%] lg:left-[45%] w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image src={currentUser?.image === null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2RIsrYrlbEcNP7xnxLQ2gYiylcUqzsrVSwKR1wrvLV4x06yFGVbnYB7rnbBE2gRxxjU&usqp=CAU' : currentUser?.image} alt={currentUser?.userFullName} width={96} height={96} className="w-full h-full object-cover" />
                    </div>

                    {/* User Info */}
                    <div className='mt-10 mb-4'>
                        <h2 className="text-2xl font-semibold text-gray-800">{currentUser?.name}</h2>
                        <p className="text-gray-500">Email : {currentUser?.email}</p>
                        <p className="text-gray-500 mb-4">username: @{currentUser?.username}</p>
                    </div>
                    
                    <div>
                        <p>User Role : {currentUser?.role}</p>
                        <p className='flex items-center justify-center'>Account Status : {currentUser?.status === 'active' ? <IconPointFilled className='text-green-500' /> : <IconPointFilled className='text-red-500' />}</p>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center text-gray-600 mb-8 shadow p-4 rounded-xl">
                        <div className="text-center mb-2">
                            <span className="block text-xl font-semibold text-[#5C0096]">{currentUser?.createdQuizes.length}</span>
                            <span className="text-sm">Created Quizzes</span>
                        </div>
                        <div className="text-center mb-2">
                            <span className="block text-xl font-semibold text-[#5C0096]">{currentUser?.participatedQuizes.length}</span>
                            <span className="text-sm">Participated Quizzes</span>
                        </div>
                        <div className="text-center mb-2">
                            <span className="block text-xl font-semibold text-[#5C0096]">{currentUser?.results.length}</span>
                            <span className="text-sm">Wins</span>
                        </div>
                    </div>

                    {/* profile edit */}
                    <div className='flex items-center justify-center gap-3'>
                        <button onClick={handleEdit} className="bg-[#5C0096] hover:bg-[#500081] px-5 py-2 text-white flex items-center justify-center gap-2 rounded-full transition-colors"><IconPencil stroke={2} /> Change Password
                        </button>
                        <button onClick={handleEdit} className="bg-[#5C0096] hover:bg-[#500081] px-5 py-2 text-white flex items-center justify-center gap-2 rounded-full transition-colors"><IconPencil stroke={2} /> Update Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

