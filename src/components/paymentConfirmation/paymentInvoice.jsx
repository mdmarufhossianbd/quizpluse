"use client"

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { useReactToPrint } from "react-to-print";
import generatePDF from 'react-to-pdf';
import { FiDownload, FiPrinter } from 'react-icons/fi'; // Importing icons

const PaymentInvoice = () => {
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    const searchParams = useSearchParams();
    const [paymentDetails, setPaymentDetails] = useState(null);

    useEffect(() => {
        const details = searchParams.get('paymentDetails');
        if (details) {
            setPaymentDetails(JSON.parse(details));
        }
    }, [searchParams]);

    if (!paymentDetails) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <p className="text-xl text-gray-700">Loading invoice details...</p>
            </div>
        );
    }

    return (
        <div>
            {/* Invoice section */}
            <div className="max-w-4xl mx-auto p-10 bg-white shadow-xl rounded-lg my-12 border border-gray-200" ref={contentRef}>
                {/* Invoice Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-[#5C0096] tracking-wide underline mb-4">Invoice</h1>
                    <p className="text-sm text-green-700 font-semibold">Transaction ID: {paymentDetails.transactionId}</p>
                </div>

                {/* Invoice Info */}
                <div className="grid grid-cols-2 gap-6 text-lg">
                    <div>
                        <p className="font-semibold text-gray-800">Billed To:</p>
                        <p className="text-gray-700">{paymentDetails.name}</p>
                        <p className="text-gray-700">Email: {paymentDetails.email}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold text-gray-800">Invoice Date:</p>
                        <p className="text-gray-700">{new Date(paymentDetails.paymentTime).toLocaleDateString()}</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-300"></div>

                {/* Payment Details */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Payment Summary</h2>
                    <div className="flex justify-between text-gray-700">
                        <p className="font-medium">Package:</p>
                        <p>{paymentDetails.packageTitle} Plan</p>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-1">
                        <p className="font-medium">Total Amount:</p>
                        <p>${paymentDetails.price}</p>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-1">
                        <p className="font-medium">Payment Status:</p>
                        <p>{paymentDetails.status}</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-300"></div>

                {/* Card Details */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Card Details</h2>
                    <div className="flex justify-between text-gray-700">
                        <p className="font-medium">Card Brand:</p>
                        <p className="uppercase">{paymentDetails.cardDetails.brand}</p>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-1">
                        <p className="font-medium">Last 4 Digits:</p>
                        <p>**** **** **** {paymentDetails.cardDetails.last4}</p>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-1">
                        <p className="font-medium">Expiry Date:</p>
                        <p>{paymentDetails.cardDetails.exp_month}/{paymentDetails.cardDetails.exp_year}</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-300"></div>

                {/* Thank You Note */}
                <div className="text-center">
                    <p className="text-lg text-gray-700 font-light">
                        Thank you for your purchase! If you have any questions, please contact our support team at
                        <span className="text-purple-600 font-semibold"> support@quizepulse.com</span>.
                    </p>
                </div>
            </div>

            <div className="flex justify-center space-x-4 mt-8">
                {/* Generate PDF Button */}
                <button
                    className="bg-[#5C0096] hover:bg-[#4a0078] text-white py-2 px-6 rounded-lg font-semibold shadow-lg flex items-center space-x-2 transition duration-300 ease-in-out"
                    onClick={() => generatePDF(contentRef, { filename: `invoice_${paymentDetails?.transactionId}.pdf` })}
                >
                    <FiDownload className="text-xl" /> {/* Download icon */}
                    <span>Download PDF</span>
                </button>

                {/* Print Invoice Button */}
                <button
                    className="bg-white hover:bg-[#5C0096] text-[#5C0096] hover:text-white border-2 border-[#5C0096] py-2 px-6 rounded-lg font-semibold shadow-lg flex items-center space-x-2 transition duration-300 ease-in-out"
                    onClick={reactToPrintFn}
                >
                    <FiPrinter className="text-xl" /> {/* Print icon */}
                    <span>Print</span>
                </button>
            </div>
        </div>
    );
};

export default PaymentInvoice;
