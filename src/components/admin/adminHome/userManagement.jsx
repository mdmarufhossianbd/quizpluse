import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FiUser, FiUserCheck, FiUserPlus } from 'react-icons/fi';

const UserManagement = () => {
    const [totalUser, setTotalUser] = useState(0);



    // user Info
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/v1/user`);
                if (res?.data?.success) {
                    setTotalUser(res?.data?.totalUsers);
                }
            } catch (error) {
                console.error("Error fetching quizzes:", error);
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
                        <p className="text-3xl font-semibold">10</p>
                    </div>
                </div>
                <div className="bg-[#7700ff] p-6 rounded-lg shadow-lg flex items-center">
                    <FiUser className="text-4xl text-white mr-4" />
                    <div>
                        <h2 className="text-xl font-bold">Top Quiz Attempts</h2>
                        <p className="text-3xl font-semibold flex items-center gap-2">15 <span className="text-sm font-normal">{"(John Doe)"}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;