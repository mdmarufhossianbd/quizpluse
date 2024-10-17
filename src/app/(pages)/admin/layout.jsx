"use client";

import Sidebar from "@/components/shared/sidebar";
import { IconCoin, IconLayoutDashboardFilled, IconSettingsFilled, IconUserFilled, IconUsers } from "@tabler/icons-react";
import { useState } from "react";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
        className="md:hidden fixed top-3 right-3 z-50 h-10 w-10 border-2 border-[#5C0096] rounded-full"
        onClick={toggleSidebar}
      ></button>
      <Sidebar navLinks={navLinks} />
      <div className="flex-1 md:ml-4 transition-all duration-300">
        {children}
      </div>
    </div>
  );
}
