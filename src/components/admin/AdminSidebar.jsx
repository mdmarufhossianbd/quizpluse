"use client";

import { Home, BarChart, Users, Book, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const navLinks = [
    {
      url: "/admin/dashboard",
      name: "dashboard",
      icon: <BarChart className="mr-3" />,
    },
    {
      url: "/admin/analytics",
      name: "analytics",
      icon: <BarChart className="mr-3" />,
    },
    {
      url: "/admin/users",
      name: "users",
      icon: <BarChart className="mr-3" />,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="lg:flex lg:mt-12 relative">
      {/* Mobile Menu Button */}
      <button className="lg:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="text-gray-900" />
      </button>

      {/* Sidebar */}
      <nav
        ref={sidebarRef}
        className={`fixed lg:relative top-0 left-0 h-full bg-purple-200 text-gray-900 w-64 p-6 rounded-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static z-40`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              href="/admin/dashboard"
              className="flex items-center p-4 font-bold rounded-lg hover:bg-gray-300 transition"
            >
              <Home className="mr-3" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/analytics"
              className="flex items-center p-4 font-bold rounded-lg hover:bg-gray-300 transition"
            >
              <BarChart className="mr-3" />
              <span>View Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/quizzes"
              className="flex items-center p-4 font-bold rounded-lg hover:bg-gray-300 transition"
            >
              <Book className="mr-3" />
              <span>Manage Quizzes</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className="flex items-center p-4 font-bold rounded-lg hover:bg-gray-300 transition"
            >
              <Users className="mr-3" />
              <span>Manage Users</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Content (Main) */}
      <div className="flex-1 p-8">{/* Content goes here */}</div>
    </div>
  );
};

export default AdminSidebar;
