"use client";

import Sidebar from '@/components/shared/sidebar';
import { IconLayoutDashboardFilled, IconRosetteDiscountCheckFilled, IconSettingsFilled, IconSquareRoundedPlusFilled, IconTimelineEventFilled, IconUserFilled } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const Layout = ({ children }) => {
    const { data } = useSession();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navLinks = [
        {
            name : 'Dashboard',
            url : '/user-dashboard',
            icon : <IconLayoutDashboardFilled />
        },
        {
            name : 'Add Quiz',
            url : '/user-dashboard/add-quiz',
            icon : <IconSquareRoundedPlusFilled />
        },
        {
            name : 'Manage Quiz',
            url : '/user-dashboard/manage-quiz',
            icon : <IconSettingsFilled />
        },
        {
            name : 'Participated Quiz',
            url : '/user-dashboard/participated-quiz',
            icon : <IconRosetteDiscountCheckFilled />
        },
        {
            name : 'Progress',
            url : '/user-dashboard/progress',
            icon : <IconTimelineEventFilled />
        },
        {
            name : 'Profile',
            url : '/user-dashboard/profile',
            icon : <IconUserFilled />
        },
    ]

    return (
        <div className="min-h-screen flex ">
            {/* Mobile Menu Toggle Button */}
            <button className="md:hidden fixed top-3 right-3 z-50 h-10 w-10 border-2 border-[#5C0096] rounded-full" onClick={toggleSidebar}>                
            </button>
            {/* Sidebar Component */}
            <Sidebar navLinks={navLinks} />
            {/* Main Content Area */}
            <div className="flex-1 p-6 md:ml-4 transition-all duration-300">
                {children}
            </div>
        </div>
    );
};

export default Layout;
