"use client";

import Sidebar from "@/components/shared/sidebar";
import { IconCoin, IconLayoutDashboardFilled, IconSettingsFilled, IconUserFilled, IconUsers } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AdminLayout({ children }) {
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
    {
      name: 'Dashboard',
      url: '/admin',
      icon: <IconLayoutDashboardFilled />
    },
    {
      name: 'Manage Quiz',
      url: '/admin/manage-quiz',
      icon: <IconSettingsFilled />
    },
    {
      name: 'Manage User',
      url: '/admin/users',
      icon: <IconUsers stroke={2} />
    },
    {
      name: 'Transactions',
      url: '/admin/transactions',
      icon: <IconCoin stroke={2} />
    },
    {
      name: 'Profile',
      url: '/admin/profile',
      icon: <IconUserFilled />
    },
  ]

  return (
    <div className="min-h-screen flex ">
      {/* Mobile Menu Toggle Button */}
      <button
        className="lg:hidden fixed top-3 right-3 z-50 h-10 w-10 border-2 border-[#5C0096] rounded-full"
        onClick={toggleSidebar}
      ></button>

      <div
        className={`bg-[#f5f5f5] w-[270px] pl-4 fixed lg:left-0 lg:top-0 lg:min-h-screen flex flex-col justify-between transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 z-40 overflow-y-auto`}
        ref={sidebarRef}
      >
        <Sidebar navLinks={navLinks} />

      </div>

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
}
