"use client"

import Image from "next/image";
import React from "react";
import qpLogo from '/public/assets/logo.png';

const Certificate = ({ userName, courseName, issueDate, certificateId }) => {

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl bg-white border-4 border-purple-800 rounded-lg shadow-xl p-8 text-center font-serif">

                {/* Header Section */}
                <div className="text-purple-700">
                    <div className="flex justify-center">
                        <Image src={qpLogo} height={200} width={250} alt="gift" />
                        <hr />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Certificate of Achievement</h2>
                    <p className="text-lg md:text-xl">This certificate is awarded to</p>
                </div>

                {/* Recipient's Name */}
                <div className="text-purple-900 font-bold text-2xl md:text-3xl my-4">{userName}</div>

                {/* Completion Statement */}
                <p className="text-lg md:text-xl">has successfully completed</p>

                {/* Course Name */}
                <div className="text-purple-900 font-semibold text-xl md:text-2xl my-4">{courseName}</div>

                {/* Additional Details */}
                <div className="text-gray-600 text-sm md:text-base mt-2">
                    <p>an online quiz offered by QuizPulse</p>
                    <p >Issue Date: {issueDate}</p>
                    <p className="mt-3">Certificate ID: {certificateId}</p>

                </div>

                {/* Signature Section */}
                <div className="flex justify-between mt-10 pt-6 border-t border-purple-800">
                    <div>
                        <p className="text-gray-700 font-semibold">Signature</p>
                        <p className="text-gray-500 text-sm">CEO, QuizPulse</p>
                    </div>
                    <div>
                        <p className="text-gray-700 font-semibold">Signature</p>
                        <p className="text-gray-500 text-sm">Instructor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
