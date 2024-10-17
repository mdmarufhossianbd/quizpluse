"use client"

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import ReactToPdf from 'react-to-pdf';
import { useSearchParams } from 'next/navigation';
import { useReactToPrint } from "react-to-print";
import generatePDF from 'react-to-pdf';


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
            <div className="max-w-4xl mx-auto p-10 bg-white shadow-2xl rounded-lg my-12 border border-gray-200" ref={contentRef}>
                {/* Invoice Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-purple-700 tracking-wide underline mb-4">Invoice</h1>
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
            <div>
                {/* Generate PDF Button */}
                <div>
                    <button onClick={() => generatePDF(contentRef, { filename: `invoice_${paymentDetails?.transactionId}.pdf` })}>Download PDF</button>

                </div>
                {/* Print Invoice Button */}
                <div className="text-center mt-8">
                    <button onClick={reactToPrintFn}>Print</button>
                </div>
            </div>

        </div >
    );
};

export default PaymentInvoice;
