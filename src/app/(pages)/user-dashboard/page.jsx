'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";

const UserDashboard = () => {
    const { data, status } = useSession();
    if (status === 'loading') {
        return <p>Loading</p>
    }
    console.log(data);
    return (
        <div>
            <div>
                <div>
                    <h1 className="text-4xl font-bold mb-6 text-[#5C0096]">Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {/* Stat Cards */}
                        <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
                            <div className="text-[#5C0096] text-3xl mr-4">📊</div>
                            <div>
                                <h2 className="text-2xl font-semibold">Total Quizzes</h2>
                                <p className="text-lg">12</p>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
                            <div className="text-[#5C0096] text-3xl mr-4">📝</div>
                            <div>
                                <h2 className="text-2xl font-semibold">Total Attempts</h2>
                                <p className="text-lg">45</p>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
                            <div className="text-[#5C0096] text-3xl mr-4">⭐</div>
                            <div>
                                <h2 className="text-2xl font-semibold">Average Score</h2>
                                <p className="text-lg">85%</p>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activities Section */}
                    <h2 className="text-3xl font-bold mb-4 text-[#5C0096]">Recent Activities</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <ul className="list-disc ml-6">
                            <li>Quiz "JavaScript Basics" was attempted by 5 users.</li>
                            <li>New quiz "React Fundamentals" created.</li>
                            <li>Updated settings for "HTML & CSS" quiz.</li>
                            {/* Add more activities here */}
                        </ul>
                    </div>
                </div>
            </div>

            <p>logged in your name is {data?.user?.name}</p>
            <Link className="btn p-6 my-8 text-purple-800 font-extrabold" href='/user-dashboard/add-quiz'>Add Quiz</Link>
        </div>
    );
};

export default UserDashboard;