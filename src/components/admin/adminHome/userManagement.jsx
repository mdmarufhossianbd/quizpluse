import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiUser, FiUserCheck, FiUserPlus } from 'react-icons/fi';

const UserManagement = () => {
    const [totalUser, setTotalUser] = useState(0);
    const [newUsers, setNewUsers] = useState(0);
    const [topQuizAttempts, setTopQuizAttempts] = useState({ name: "", attempts: 0 });

    // Fetch user info
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/v1/user`);
                if (res?.data?.success) {
                    setTotalUser(res?.data?.totalUsers);

                    // Calculate new users this week
                    const currentDate = new Date();
                    const oneWeekAgo = new Date(currentDate.setDate(currentDate.getDate() - 7));
                    const users = res.data.result;

                    const newUsersCount = users.filter(user => new Date(user.createAt) >= oneWeekAgo).length;
                    setNewUsers(newUsersCount);

                    // Calculate top quiz attempts
                    const topUser = users.reduce((prev, current) => {
                        return (prev.participatedQuizes > current.participatedQuizes) ? prev : current;
                    });
                    setTopQuizAttempts({ name: topUser.name, attempts: topUser.participatedQuizes });
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold mb-4 text-[#5C0096]">User Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-white">
                <div className="bg-[#bb00a2] p-6 rounded-lg shadow-lg flex items-center">
                    <FiUserCheck className="text-4xl text-white mr-4" />
                    <div>
                        <h2 className="text-xl font-bold">Total Users</h2>
                        <p className="text-3xl font-semibold">{totalUser}</p>
                    </div>
                </div>
                <div className="bg-[#17A2B8] p-6 rounded-lg shadow-lg flex items-center">
                    <FiUserPlus className="text-4xl text-white mr-4" />
                    <div>
                        <h2 className="text-xl font-bold">New Users <span className="text-sm font-normal">{"(This Week)"}</span></h2>
                        <p className="text-3xl font-semibold">{newUsers}</p>
                    </div>
                </div>
                <div className="bg-[#7700ff] p-6 rounded-lg shadow-lg flex items-center">
                    <FiUser className="text-4xl text-white mr-4" />
                    <div>
                        <h2 className="text-xl font-bold">Top Quiz Attempts</h2>
                        <p className="text-3xl font-semibold flex items-center gap-2">
                            {topQuizAttempts.attempts} <span className="text-sm font-normal">{"(" + topQuizAttempts.name + ")"}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
