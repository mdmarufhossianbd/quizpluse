"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ThankYou = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [paymentDetails, setPaymentDetails] = useState(null);


    useEffect(() => {
        const details = searchParams.get('paymentDetails');
        if (details) {
            setPaymentDetails(JSON.parse(details));
        }
    }, [searchParams]);



    const handleGenerateDownload = () => {
        if (paymentDetails) {
            router.push(`/user-dashboard/invoice?paymentDetails=${encodeURIComponent(JSON.stringify(paymentDetails))}`);
        }
    };



    if (!paymentDetails) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <p className="text-xl text-gray-700">Loading payment details...</p>
            </div>
        )
    }



    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-12 px-6">
            <h1 className="text-3xl font-bold text-purple-600">Thank You, {paymentDetails.name}!</h1>
            <p className="mt-4 text-lg text-gray-700">Your payment was successful!</p>

            <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
                <h2 className="text-xl font-semibold text-[#5C0096] text-center">Payment Summary</h2>
                <hr className='my-4' />
                <p className="text-gray-600">Package: {paymentDetails.packageTitle} Plan</p>
                <p className="text-gray-600">Package Price: ${paymentDetails.price}</p>
                <p className="text-gray-600">Transaction ID: {paymentDetails.transactionId}</p>
                <p className="text-gray-600">Payment Status: {paymentDetails.status}</p>

                <button
                    onClick={handleGenerateDownload}
                    className="mt-6 w-full bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-500"
                >
                    Download Invoice
                </button>
            </div>
        </div>
    );
};

export default ThankYou;