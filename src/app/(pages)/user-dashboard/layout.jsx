"use client";

import Sidebar from '@/components/shared/sidebar';
import { IconCoin, IconLayoutDashboardFilled, IconRosetteDiscountCheckFilled, IconSettingsFilled, IconSquareRoundedPlusFilled, IconTimelineEventFilled, IconUserFilled } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { GiArmorUpgrade } from "react-icons/gi";


const Layout = ({ children }) => {
    const { data } = useSession();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Handle click outside the sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the click is outside the sidebar and not on the toggle button, toggle the sidebar
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('button')) {
                setIsSidebarOpen(false);
            }
        };

        // Check if the click is on the sidebar toggle button
        const handlePageClick = (event) => {
            if (!event.target.closest('.sidebar-toggle-button')) {
                handleClickOutside(event);
            }
        };

        document.addEventListener('mousedown', handlePageClick);

        return () => {
            document.removeEventListener('mousedown', handlePageClick);
        };
    }, [sidebarRef]);



    const navLinks = [
        {
            name: 'Dashboard',
            url: '/user-dashboard',
            icon: <IconLayoutDashboardFilled />
        },
        {
            name: 'Add Quiz',
            url: '/user-dashboard/add-quiz',
            icon: <IconSquareRoundedPlusFilled />
        },
        {
            name: 'Manage Quiz',
            url: '/user-dashboard/manage-quiz',
            icon: <IconSettingsFilled />
        },
        {
            name: 'Participated Quiz',
            url: '/user-dashboard/participated-quiz',
            icon: <IconRosetteDiscountCheckFilled />
        },
        {
            name: 'Progress',
            url: '/user-dashboard/progress',
            icon: <IconTimelineEventFilled />
        },
        {
            name: 'Transactions',
            url: '/user-dashboard/transactions',
            icon: <IconCoin stroke={2} />
        },
        {
            name: 'Plans',
            url: '/user-dashboard/plans',
            icon: <GiArmorUpgrade />
        },
        {
            name: 'Profile',
            url: '/user-dashboard/profile',
            icon: <IconUserFilled />
        },
       

    ]

    return (
        <div className="min-h-screen flex ">

            {/* Mobile Menu Toggle Button */}
            <button className="lg:hidden fixed top-3 right-3 z-50 h-10 w-10 border-2 border-[#5C0096] rounded-full" onClick={toggleSidebar}>
                <div className="">
                    {data ? (
                        <Image
                            src={
                                data?.user?.image
                                    ? data?.user?.image
                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2RIsrYrlbEcNP7xnxLQ2gYiylcUqzsrVSwKR1wrvLV4x06yFGVbnYB7rnbBE2gRxxjU&usqp=CAU"
                            }
                            alt={data?.user?.name}
                            width={120}
                            height={120}
                            className="rounded-full border border-purple-800"
                        />
                    ) : (
                        <FaUser className="w-7 h-7 text-center rounded-full text-purple-800" />
                    )}
                </div>
            </button>

            {/* Sidebar Component */}
            <div ref={sidebarRef}>
                <Sidebar isSidebarOpen={isSidebarOpen} navLinks={navLinks} />

            </div>


            {/* Main Content Area */}
            <div className="flex-1 p-6 pt-4 lg:pt-6 md:ml-4 transition-all duration-300">
                <div className='lg:hidden mb-2'>
                    <Link href="/">
                        <Image
                            src="/assets/logo.png"
                            alt="QuizPulse Logo"
                            width={120}
                            height={40} // Adjust the height to make it fit nicely
                            className="object-contain"
                        />
                    </Link>
                </div>
                {children}
            </div>

        </div>
    );
};

export default Layout;
