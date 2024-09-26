"use client";

import UserSidebar from '@/components/userDashboard/userSidebar';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Layout = ({ children }) => {
    const { data } = useSession();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen flex  max-w-7xl mx-auto">
            {/* Mobile Menu Toggle Button */}
            <button
                className="md:hidden  fixed top-2 left-2 z-50 h-10 w-10"
                onClick={toggleSidebar}
            >
                <FaBars className="text-xl" />
                {/* <Image src={data?.user?.image} alt="User Image" width={34} height={34} className="w-full h-full object-cover rounded-full " /> */}

            </button>

            {/* Sidebar Component */}
            <UserSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

            {/* Main Content Area */}
            <div className="flex-1 p-6 md:ml-4 transition-all duration-300">
                {children}
            </div>
        </div>
    );
};

export default Layout;
