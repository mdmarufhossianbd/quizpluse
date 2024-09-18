import Image from "next/image";
import logo from '../../app/logo.png';

const Footer = () => {
    return (
        <div>
            <div>
                <footer className="bg-[#F2E9F1] text-black py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center space-y-6 md:space-y-0 gap-5">

                            {/* Left Section: Brand/Logo */}
                            <div className="text-center md:text-left">
                                <Image src={logo} alt="QuizPulse Logo" className="h-10 w-auto mx-auto mb-4" />
                                {/* <h2 className="text-2xl font-bold">QuizPulse</h2> */}
                                <p className=" text-center">Your ultimate quiz platform to test, improve, and track your knowledge, anywhere and anytime.</p>
                            </div>

                            {/* Center Section: Navigation Links */}
                            <div className=" text-center flex flex-col">
                                <h4 className="font-bold mb-3">Important Links</h4>
                                <ul>
                                    <li><a href="#" className=" hover:text-[#5C0096]">Home</a></li>
                                    <li><a href="#" className=" hover:text-[#5C0096]">About</a></li>
                                    <li><a href="#" className=" hover:text-[#5C0096]">Service</a></li>
                                    <li><a href="#" className=" hover:text-[#5C0096]">Contact</a></li>

                                </ul>
                            </div>

                            {/* Third Block: Useful Links */}
                            <div className="text-center flex flex-col">
                                <h4 className="font-bold mb-3">Useful Links</h4>
                                <ul>
                                    <li><a href="#" className="hover:text-[#5C0096]">Popular Quiz</a></li>
                                    <li><a href="#" className="hover:text-[#5C0096]">Recent Quiz</a></li>
                                    <li><a href="#" className="hover:text-[#5C0096]">Quiz Tournaments</a></li>
                                    <li><a href="#" className="hover:text-[#5C0096]">Winners</a></li>
                                </ul>
                            </div>
                            {/* Subscribe Block */}
                            <div className="w-full text-center md:text-left">
                                <h4 className="font-bold mb-3">Subscribe to Our Newsletter</h4>
                                <div >
                                    <form action="">
                                        <div className="flex justify-center md:justify-start">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="px-2 py-2 border w-full rounded-l-md focus:outline-none"
                                            />
                                            <button className="px-2 py-2 rounded-r-md bg-[#5C0096] text-white hover:bg-[#500081]" >
                                                Subscribe
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Copyright Section */}
                        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                            <p className="">&copy; 2024 <a href="#" className="hover:text-[#5C0096]">QuizPulse</a> All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;