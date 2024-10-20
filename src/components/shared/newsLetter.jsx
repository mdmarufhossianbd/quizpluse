"use client";

import { Lottie } from 'lottie-react';
import React, { useState } from 'react';
import envalopeImg from '../../../public/assets/envalope.gif';
import Image from 'next/image';

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
    };


    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                {/* Lottie Animation Section */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    {/* <Lottie
                        animationData={envalopeImg}
                        loop={true}
                        style={{ height: 200, width: 200 }}
                    /> */}
                    <Image
                        className="rounded group-hover:opacity-50 group-hover:scale-105 duration-200 w-full"
                        src={envalopeImg}
                        alt="envalope image"
                        width={300}
                        height={300}
                    />
                </div>

                {/* Form Section */}
                <div className="md:w-1/2">
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
                                I agree to receive marketing material
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-md transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
