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
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('button')) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarRef]);

    const navLinks = [
        { name: 'Dashboard', url: '/user-dashboard', icon: <IconLayoutDashboardFilled /> },
        { name: 'Add Quiz', url: '/user-dashboard/add-quiz', icon: <IconSquareRoundedPlusFilled /> },
        { name: 'Manage Quiz', url: '/user-dashboard/manage-quiz', icon: <IconSettingsFilled /> },
        { name: 'Participated Quiz', url: '/user-dashboard/participated-quiz', icon: <IconRosetteDiscountCheckFilled /> },
        { name: 'Progress', url: '/user-dashboard/progress', icon: <IconTimelineEventFilled /> },
        { name: 'Transactions', url: '/user-dashboard/transactions', icon: <IconCoin stroke={2} /> },
        { name: 'Plans', url: '/user-dashboard/plans', icon: <GiArmorUpgrade /> },
        { name: 'Profile', url: '/user-dashboard/profile', icon: <IconUserFilled /> },
    ];

    return (
        <div className="min-h-screen flex">

            {/* Mobile Menu Toggle Button */}
            <button className="lg:hidden fixed top-3 right-3 z-50 h-10 w-10 border-2 border-[#5C0096] rounded-full" onClick={toggleSidebar}>
                <div>
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
            <div
                className={`bg-[#f5f5f5] w-[270px] pl-4 fixed right-0 lg:left-0 lg:top-0 lg:min-h-screen flex flex-col justify-between transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } lg:translate-x-0 transition-transform duration-300 z-40 overflow-y-auto`}
                ref={sidebarRef}
            >
                <Sidebar isSidebarOpen={isSidebarOpen} navLinks={navLinks} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 pt-4 lg:pl-[290px] lg:pt-6 transition-all duration-300 overflow-y-auto">
                <div className='lg:hidden mb-2'>
                    <Link href="/">
                        <Image
                            src="/assets/logo.png"
                            alt="QuizPulse Logo"
                            width={120}
                            height={40}
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


// "use client";

// import Sidebar from '@/components/shared/sidebar';
// import { IconCoin, IconLayoutDashboardFilled, IconRosetteDiscountCheckFilled, IconSettingsFilled, IconSquareRoundedPlusFilled, IconTimelineEventFilled, IconUserFilled } from '@tabler/icons-react';
// import { useSession } from 'next-auth/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useRef, useState } from 'react';
// import { FaUser } from 'react-icons/fa';
// import { GiArmorUpgrade } from "react-icons/gi";

// const Layout = ({ children }) => {
//     const { data } = useSession();
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const sidebarRef = useRef(null);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     // Handle click outside the sidebar
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('button')) {
//                 setIsSidebarOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [sidebarRef]);

//     const navLinks = [
//         { name: 'Dashboard', url: '/user-dashboard', icon: <IconLayoutDashboardFilled /> },
//         { name: 'Add Quiz', url: '/user-dashboard/add-quiz', icon: <IconSquareRoundedPlusFilled /> },
//         { name: 'Manage Quiz', url: '/user-dashboard/manage-quiz', icon: <IconSettingsFilled /> },
//         { name: 'Participated Quiz', url: '/user-dashboard/participated-quiz', icon: <IconRosetteDiscountCheckFilled /> },
//         { name: 'Progress', url: '/user-dashboard/progress', icon: <IconTimelineEventFilled /> },
//         { name: 'Transactions', url: '/user-dashboard/transactions', icon: <IconCoin stroke={2} /> },
//         { name: 'Plans', url: '/user-dashboard/plans', icon: <GiArmorUpgrade /> },
//         { name: 'Profile', url: '/user-dashboard/profile', icon: <IconUserFilled /> },
//     ];

//     return (
//         <div className="min-h-screen flex">

//             {/* Fixed Header for Logo and Toggle Button */}
//             <div className="fixed top-0 left-0 right-0 bg-white flex items-center justify-between p-3 z-50 shadow-md lg:hidden">
//                 {/* Logo */}
//                 <Link href="/">
//                     <Image
//                         src="/assets/logo.png"
//                         alt="QuizPulse Logo"
//                         width={100}
//                         height={30}
//                         className="object-contain"
//                     />
//                 </Link>

//                 {/* Mobile Menu Toggle Button */}
//                 <button className="h-10 w-10 border-2 border-[#5C0096] rounded-full" onClick={toggleSidebar}>
//                     {data ? (
//                         <Image
//                             src={
//                                 data?.user?.image
//                                     ? data?.user?.image
//                                     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2RIsrYrlbEcNP7xnxLQ2gYiylcUqzsrVSwKR1wrvLV4x06yFGVbnYB7rnbBE2gRxxjU&usqp=CAU"
//                             }
//                             alt={data?.user?.name}
//                             width={120}
//                             height={120}
//                             className="rounded-full border border-purple-800"
//                         />
//                     ) : (
//                         <FaUser className="w-7 h-7 text-center rounded-full text-purple-800" />
//                     )}
//                 </button>
//             </div>

//             {/* Sidebar Component */}
//             <div
//                 className={`bg-[#f5f5f5] w-[270px] pl-4 fixed lg:left-0 lg:top-0 lg:min-h-screen flex flex-col justify-between transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//                     } lg:translate-x-0 transition-transform duration-300 z-40 overflow-y-auto`}
//                 ref={sidebarRef}
//             >
//                 <Sidebar isSidebarOpen={isSidebarOpen} navLinks={navLinks} />
//             </div>

//             {/* Main Content Area */}
//             <div className="flex-1 pt-16 p-6 lg:pl-[290px] lg:pt-6 transition-all duration-300 overflow-y-auto">
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default Layout;
