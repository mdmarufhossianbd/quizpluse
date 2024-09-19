"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '../../app/logo.png';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Quizes',
            path: '/quizes'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ]

    return (
        <div className="bg-[#F5F5F5] sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b">
                <div className="flex justify-between h-16 items-center">
                    {/* Left: Brand Logo */}
                    <div className="flex-shrink-0">
                        <Link href={'/'}><Image src={logo} alt="Brand Logo" className="h-10 w-auto" /></Link>
                    </div>

                    {/* Middle: Navigation Links */}
                    <div className="hidden md:flex space-x-4">
                        {
                            navLinks.map((item, index) => <Link className="px-4 py-1.5 rounded hover:bg-[#5C0096] hover:text-white" key={index} href={item.path}>{item.title}</Link>)
                        }
                    </div>

                    {/* Right: Button */}
                    <div className="hidden md:flex">
                        <Link href={'/login'}>
                            <Button className="bg-[#5C0096] text-white hover:bg-[#500081]">
                                Sign In
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? "block absolute z-20 bg-[#f5f5f5] w-full" : "hidden"}`}>
                <div className="flex flex-col gap-3 px-5">
                    {
                        navLinks.map((item, index) => <Link className="px-4 py-1.5 rounded hover:bg-[#5C0096] hover:text-white" key={index} href={item.path}>{item.title}</Link>)
                    }
                    <Button className="w-full text-center bg-[#5C0096] text-white hover:bg-[#500081] mt-2">
                        Login In
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;