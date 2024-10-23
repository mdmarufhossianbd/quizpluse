"use client";

import Image from 'next/image';
import { useState } from 'react';
import envalopeImg from '../../../public/assets/envalope.gif';

const NewsLetter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
        alert(`Subscribed with name: ${name}, email: ${email}`);
        setName('');
        setEmail('');
        setIsChecked(false);
        const subscribeInfo = {
            name: name,
            email: email
        }
        console.log(subscribeInfo)
    };


    return (
        <section className="bg-gray-100 py-12 mt-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                {/* Lottie Animation Section */}
                <div className="flex justify-center w-full md:w-1/2 mb-8 md:mb-0">
                    {/* <Lottie
                        animationData={envalopeImg}
                        loop={true}
                        style={{ height: 200, width: 200 }}
                    /> */}
                    <Image
                        className="rounded group-hover:opacity-50 group-hover:scale-105 duration-200 w-2/3"
                        src={envalopeImg}
                        alt="envalope image"
                        width={250}
                        height={250}
                    />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to our newsletter</h2>
                    <p className="text-lg mb-6">
                        Receive our latest news and get a special gift.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                id="agree"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                                className="mr-2"
                                required
                            />
                            <label htmlFor="agree" className="text-gray-600">
                                I appreciate the opportunity to stay informed about your offerings and updates
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#5C0096] hover:bg-[#500081] text-white font-bold py-3 rounded-md transition duration-300"
                        >
                            Subscribe
                        </button>
                        {/* Privacy Notice */}
                        <p className="text-center text-sm text-gray-400 mt-4">
                            We care about your privacy. No spam, unsubscribe anytime.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
