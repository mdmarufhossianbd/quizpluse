"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const ThankYou = ({ paymentDetails }) => {
    const router = useRouter();


    // useEffect(() => {
    //     if (!router.isReady)
    //         return; // Ensuring that the router is ready before usage
    // }, [router]);

    const handleInvoiceDownload = () => {
        router.push(`/invoice/${"paymentDetails.transactionId"}`);
    };


    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-12 px-6">
            <h1 className="text-3xl font-bold text-purple-600">Thank You, {"paymentDetails.name"}!</h1>
            <p className="mt-4 text-lg text-gray-700">Your payment was successful!</p>

            <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
                <h2 className="text-xl font-semibold text-[#5C0096] text-center">Payment Summary</h2>
                <hr className='my-4' />
                <p className="text-gray-600">Package: {"paymentDetails.packageTitle"} Plan</p>
                <p className="text-gray-600">Price: ${"paymentDetails.price"}</p>
                <p className="text-gray-600">Transaction ID: {"paymentDetails.transactionId"}</p>
                <p className="text-gray-600">Payment Status: {"paymentDetails.status"}</p>

                <button
                    onClick={handleInvoiceDownload}
                    className="mt-6 w-full bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-500"
                >
                    Download Invoice
                </button>
            </div>
        </div>
    );
};

export default ThankYou;