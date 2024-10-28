// "use client";

// import Image from "next/image";
// import React from "react";
// import qpLogo from "/public/assets/logo.png";

// const Certificate = ({ userName, courseName, issueDate, certificateId }) => {
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <div
//                 className="bg-white border-4 border-purple-800 rounded-lg shadow-xl p-8 text-center font-serif"
//                 style={{ width: "1123px", height: "794px" }} // A4 size in pixels
//             >
//                 {/* Header Section */}
//                 <div className="text-purple-700">
//                     <div className="flex justify-center border-b border-purple-800">
//                         <Image
//                             src={qpLogo}
//                             height={200}
//                             width={250}
//                             alt="gift"
//                             className="border-b-4 border-purple-800"
//                         />
//                     </div>
//                     <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-4">
//                         Certificate of Achievement
//                     </h2>
//                     <p className="text-lg md:text-xl">This certificate is awarded to</p>
//                 </div>

//                 {/* Recipient's Name */}
//                 <div className="text-purple-900 font-bold text-2xl md:text-3xl my-4">
//                     {userName}
//                 </div>

//                 {/* Completion Statement */}
//                 <p className="text-lg md:text-xl">has successfully completed</p>

//                 {/* Course Name */}
//                 <div className="text-purple-900 font-semibold text-xl md:text-2xl my-4">
//                     {courseName}
//                 </div>

//                 {/* Additional Details */}
//                 <div className="text-gray-600 text-sm md:text-base mt-2">
//                     <p>an online quiz offered by QuizPulse</p>
//                     <p>Issue Date: {issueDate}</p>
//                     <p className="mt-3">Certificate ID: {certificateId}</p>
//                 </div>

//                 {/* Signature Section */}
//                 <div className="flex justify-between mt-6 pt-6 border-t border-purple-800">
//                     <div>
//                         <p className="text-gray-700 font-semibold">Signature</p>
//                         <p className="text-gray-500 text-sm">CEO, QuizPulse</p>
//                     </div>
//                     <div>
//                         <p className="text-gray-700 font-semibold">Signature</p>
//                         <p className="text-gray-500 text-sm">Instructor</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Certificate;



"use client";

import Image from "next/image";
import React from "react";
import qpLogo from "/public/assets/logo.png";
import ReactToPdf from "react-to-pdf";
import { useRef } from "react";
import { FiDownload } from "react-icons/fi";
import generatePDF from "react-to-pdf";

const Certificate = ({ userName, courseName, issueDate, certificateId }) => {
    // const pdfRef = React.createRef();
    const certificateRef = useRef(null);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">

            {/* Certificate Content */}
            <div
                ref={certificateRef}
                className="bg-white border-4 border-purple-800 rounded-lg shadow-xl p-20 text-center font-serif"
                style={{ width: "1123px" }} // A4 landscape width only
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
            {/* Download Button */}
            <button
                className="bg-[#5C0096] hover:bg-[#4a0078] text-white py-2 px-6 rounded-lg font-semibold shadow-lg flex items-center space-x-2 transition duration-300 ease-in-out"
                onClick={() => generatePDF(certificateRef, { filename: `certificate_${}.pdf` })}
            >
                <FiDownload className="text-xl" /> {/* Download icon */}
                <span>Download PDF</span>
            </button>

        </div>
    );
};

export default Certificate;
