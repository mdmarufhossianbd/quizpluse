'use client'

import { Home, BarChart, Users, Book, Menu } from "lucide-react"; // Added Menu icon for mobile
import Link from 'next/link';
import React, { useState } from 'react';

const AdminSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            url : '/admin/dashboard',
            name : 'dashboard',
            icon: <BarChart className="mr-3" />
        },
        {
            url : '/admin/dashboard',
            name : 'dashboard',
            icon: <BarChart className="mr-3" />
        },
        {
            url : '/admin/dashboard',
            name : 'dashboard',
            icon: <BarChart className="mr-3" />
        }
    ]

    return (
        <div className="lg:flex">
            {/* Mobile Menu Button */}
            <button
                className="lg:hidden p-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu className="text-gray-900" />
            </button>

            {/* Sidebar */}
            <nav className={`top-0 left-0 h-full bg-gray-200 text-gray-900 w-full rounded-lg p-6 lg:relative lg:block transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
                <ul className="space-y-4">
                    <li>
                        <Link href="/admin/dashboard" className="flex items-center p-3 rounded-lg hover:bg-gray-200 transition">
                            <Home className="mr-3" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/analytics" className="flex items-center p-3 rounded-lg hover:bg-gray-200 transition">
                            <BarChart className="mr-3" />
                            <span>View Analytics</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/quizzes" className="flex items-center p-3 rounded-lg hover:bg-gray-200 transition">
                            <Book className="mr-3" />
                            <span>Manage Quizzes</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/users" className="flex items-center p-3 rounded-lg hover:bg-gray-200 transition">
                            <Users className="mr-3" />
                            <span>Manage Users</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Page Content (Main) */}
            <div className="flex-1 p-8">
                {/* Content goes here */}
            </div>
        </div>
    );
};

export default AdminSidebar;
