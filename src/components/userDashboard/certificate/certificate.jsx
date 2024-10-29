"use client";

import Image from "next/image";
import React, { useRef } from "react";
import qpLogo from "/public/assets/logo.png";
import ReactToPdf from "react-to-pdf";
import { FiDownload } from "react-icons/fi";
import { useSession } from "next-auth/react";
import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";
import { Button } from "@nextui-org/react";

const Certificate = ({ courseName, issueDate, certificateId }) => {
    const { data } = useSession();
    const userName = data?.user?.name;
    const certificateRef = useRef();

    const options = {
        filename: `certificate_${userName}.pdf`,
        method: "save",
        resolution: Resolution.EXTREME,
        page: {
            margin: Margin.SMALL,
            format: "a4",
            orientation: "landscape"
        },
        canvas: {
            mimeType: "image/jpeg",
            qualityRatio: 1
        },
        overrides: {
            pdf: { compress: true },
            canvas: { useCORS: true }
        }
    };

    const getTargetElement = () => document.getElementById("container");

    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <Button
                className="bg-[#5C0096] hover:bg-[#4a0078] text-white py-2 px-6 rounded-lg font-semibold shadow-lg flex items-center space-x-2 transition duration-300 ease-in-out"
                onClick={() => generatePDF(getTargetElement, options)}
            >
                <FiDownload className="text-xl" />
                Download Certificate
            </Button>

            {/* Certificate Content */}
            <div id="container" className="">
                <div
                    ref={certificateRef}
                    className="bg-white  rounded-lg shadow-xl text-center font-serif my-4 transform
                               w-full max-w-[95%] sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1123px] 
                               p-4 sm:p-10 md:p-16 lg:py-16 lg:px-36 ml-10"
                >
                    <div className="flex justify-center place-items-center">
                        <div className="w-full">
                            {/* Header Section */}
                            <div className="text-purple-700">
                                <div className="flex justify-center border-b border-purple-800">
                                    <Image
                                        src={qpLogo}
                                        height={150}
                                        width={200}
                                        alt="QuizPulse Logo"
                                        className="border-b-4 border-purple-800"
                                    />
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 mt-8 sm:mt-10 md:mt-14">
                                    Certificate of Achievement
                                </h2>
                                <p className="text-base sm:text-lg md:text-2xl">
                                    This certificate is awarded to
                                </p>
                            </div>

                            {/* Recipient's Name */}
                            <div className="text-purple-900 font-bold text-xl sm:text-2xl md:text-3xl my-4">
                                {userName}
                            </div>

                            {/* Completion Statement */}
                            <p className="text-base sm:text-lg md:text-xl">has successfully completed</p>

                            {/* Course Name */}
                            <div className="text-purple-900 font-semibold text-lg sm:text-xl md:text-2xl my-4 sm:my-6">
                                {courseName}
                            </div>

                            {/* Additional Details */}
                            <div className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 space-y-2 sm:space-y-3 pb-4">
                                <p>an online quiz offered by QuizPulse</p>
                                <p>Issue Date: {issueDate}</p>
                                <p className="mt-3">Certificate ID: {certificateId}</p>
                            </div>

                            {/* Signature Section */}
                            <div className="flex justify-between mt-4 sm:mt-6 pt-6 sm:pt-6 border-t border-purple-800">
                                <div>
                                    <p className="text-gray-700 font-semibold">Signature</p>
                                    <p className="text-gray-500 text-xs sm:text-sm">CEO, QuizPulse</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 font-semibold">Signature</p>
                                    <p className="text-gray-500 text-xs sm:text-sm">Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;

