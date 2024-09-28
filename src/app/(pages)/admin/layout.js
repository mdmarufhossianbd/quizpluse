"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function AdminLayout({ children }) {
  const { data } = useSession();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex ">
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden fixed top-3 right-3 z-50 h-10 w-10 border-2 border-[#5C0096] rounded-full"
        onClick={toggleSidebar}
      ></button>
      <AdminSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className="flex-1 p-6 md:ml-4 transition-all duration-300">
        {children}
      </div>
    </div>
  );
}
