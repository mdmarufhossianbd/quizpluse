"use client";

import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { useState } from "react";
import logo from '../../app/logo.png';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = <>
        <a href="#" className="text-gray-700 hover:text-gray-900"> Home </a>
        <a href="#" className="text-gray-700 hover:text-gray-900"> About </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Services </a>
        <a href="#" className="text-gray-700 hover:text-gray-900"> Contact </a>
    </>

    return (
        <div className="bg-[#F5F5F5]">
            <nav className=" max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Left: Brand Logo */}
                        <div className="flex-shrink-0">
                            <Image src={logo} alt="Brand Logo" className="h-10 w-auto" />
                        </div>

                        {/* Middle: Navigation Links */}
                        <div className="hidden md:flex space-x-8">
                            {navLinks}
                        </div>

                        {/* Right: Button */}
                        <div className="hidden md:flex">
                            <Button className="bg-[#5C0096] text-white hover:bg-[#500081]">
                                Sign In
                            </Button>
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
                <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                    <div className="space-y-1 px-2 pb-3 sm:px-3">
                        <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md">
                            Services
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md">
                            Contact
                        </a>
                        <Button className="w-full text-center bg-[#5C0096] text-white hover:bg-[#500081] mt-2">
                            Login In
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;