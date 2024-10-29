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
        filename: "advanced-example.pdf",
        method: "save",
        resolution: Resolution.EXTREME,
        page: {
            margin: Margin.SMALL,
            format: "A4",
            orientation: "landscape"
        },
        canvas: {
            mimeType: "image/jpeg",
            qualityRatio: 1
        },

        overrides: {
            pdf: {
                compress: true
            },
            canvas: {
                useCORS: true
            }
        }
    };

    const getTargetElement = () => document.getElementById("container");


    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <Button onClick={() => generatePDF(getTargetElement, options)}>Download PDF</Button>

            {/* Certificate Content */}
            <div id="container">
                <div

                    ref={certificateRef}
                    className="bg-white border-4 border-purple-800 rounded-lg shadow-xl p-20 text-center font-serif"
                // style={{ width: "297mm", height: "210mm" }}
                >
                    {/* Header Section */}
                    <div className="text-purple-700">
                        <div className="flex justify-center border-b border-purple-800">
                            <Image
                                src={qpLogo}
                                height={200}
                                width={250}
                                alt="QuizPulse Logo"
                                className="border-b-4 border-purple-800"
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-4">
                            Certificate of Achievement
                        </h2>
                        <p className="text-lg md:text-xl">This certificate is awarded to</p>
                    </div>

                    {/* Recipient's Name */}
                    <div className="text-purple-900 font-bold text-2xl md:text-3xl my-4">
                        {userName}
                    </div>

                    {/* Completion Statement */}
                    <p className="text-lg md:text-xl">has successfully completed</p>

                    {/* Course Name */}
                    <div className="text-purple-900 font-semibold text-xl md:text-2xl my-4">
                        {courseName}
                    </div>

                    {/* Additional Details */}
                    <div className="text-gray-600 text-sm md:text-base mt-2">
                        <p>an online quiz offered by QuizPulse</p>
                        <p>Issue Date: {issueDate}</p>
                        <p className="mt-3">Certificate ID: {certificateId}</p>
                    </div>

                    {/* Signature Section */}
                    <div className="flex justify-between mt-6 pt-6 border-t border-purple-800">
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


        </div>
    );
};

export default Certificate;