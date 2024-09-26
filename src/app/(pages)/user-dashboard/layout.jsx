// import UserSidebar from '@/components/userDashboard/userSidebar';
// import React from 'react';

// const Layout = ({ children }) => {
//     return (
//         <div className="min-h-screen flex">
//             <UserSidebar />
//             <div className="flex-1 p-6 bg-[#f5f5f5]">
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default Layout;


"use client";

import UserSidebar from '@/components/userDashboard/userSidebar';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen flex  max-w-7xl mx-auto">
            {/* Mobile Menu Toggle Button */}
            <button
                className="md:hidden p-3 text-white bg-[#5C0096] fixed top-3 left-3 z-50 rounded-full"
                onClick={toggleSidebar}
            >
                <FaBars className="text-xl" />
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
