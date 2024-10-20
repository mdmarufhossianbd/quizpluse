"use client"
import React, { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., API call to store email)
        alert(`Subscribed with email: ${email}`);
        setEmail(""); // Reset the form
    };

    return (
        <section className="bg-gradient-to-r from-blue-900 via-purple-800 to-gray-900 py-14 text-white">
            <div className="container mx-auto text-center">
                {/* Headline */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Stay Ahead with QuizPulse Updates
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join our newsletter to receive the latest quizzes, insights, and exclusive deals
                    delivered straight to your inbox. Don’t miss out on enhancing your learning journey!
                </p>

                {/* Newsletter Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xl mx-auto"
                >
                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full sm:w-auto flex-1 px-5 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-md transition duration-300"
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105"
                    >
                        Subscribe
                    </button>
                </form>

                {/* Privacy Notice */}
                <p className="text-sm text-gray-400 mt-4">
                    We care about your privacy. No spam, unsubscribe anytime.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
