// import React from 'react';

// const PaymentInvoice = ({ paymentDetails }) => {
//     return (
//         <div className="max-w-4xl mx-auto p-10 bg-white shadow-2xl rounded-lg my-12 border border-gray-200">
//             {/* Invoice Header */}
//             <div className="text-center mb-8">
//                 <h1 className="text-4xl font-extrabold text-purple-700 tracking-wide">Invoice</h1>
//                 <p className="text-sm text-gray-500">Transaction ID: {"paymentDetails.transactionId"}</p>
//             </div>

//             {/* Invoice Info */}
//             <div className="grid grid-cols-2 gap-6 text-lg">
//                 <div>
//                     <p className="font-semibold text-gray-800">Billed To:</p>
//                     <p className="text-gray-700">{"paymentDetails.name"}</p>
//                     <p className="text-gray-700">Email: {"paymentDetails.email"}</p>
//                 </div>
//                 <div className="text-right">
//                     <p className="font-semibold text-gray-800">Invoice Date:</p>
//                     <p className="text-gray-700">{"new Date(paymentDetails.paymentTime).toLocaleDateString()"}</p>
//                 </div>
//             </div>

//             {/* Divider */}
//             <div className="my-6 border-t border-gray-300"></div>

//             {/* Payment Details */}
//             <div className="mb-6">
//                 <h2 className="text-xl font-bold text-gray-800 mb-2">Payment Summary</h2>
//                 <div className="flex justify-between text-gray-700">
//                     <p className="font-medium">Package:</p>
//                     <p>{"paymentDetails.packageTitle"} Plan</p>
//                 </div>
//                 <div className="flex justify-between text-gray-700 mt-1">
//                     <p className="font-medium">Total Amount:</p>
//                     <p>${"paymentDetails.price"}</p>
//                 </div>
//                 <div className="flex justify-between text-gray-700 mt-1">
//                     <p className="font-medium">Payment Status:</p>
//                     {/* <p className={paymentDetails.status === "succeeded" ? "text-green-600" : "text-red-600"}>
//                         {paymentDetails.status.charAt(0).toUpperCase() + paymentDetails.status.slice(1)}
//                     </p> */}
//                     <p>
//                         paymentDetails.status
//                     </p>
//                 </div>
//             </div>

//             {/* Divider */}
//             <div className="my-6 border-t border-gray-300"></div>

//             {/* Card Details */}
//             <div className="mb-6">
//                 <h2 className="text-xl font-bold text-gray-800 mb-2">Card Details</h2>
//                 <div className="flex justify-between text-gray-700">
//                     <p className="font-medium">Card Brand:</p>
//                     <p className="uppercase">{"paymentDetails.cardDetails.brand"}</p>
//                 </div>
//                 <div className="flex justify-between text-gray-700 mt-1">
//                     <p className="font-medium">Last 4 Digits:</p>
//                     <p>**** **** **** {"paymentDetails.cardDetails.last4"}</p>
//                 </div>
//                 <div className="flex justify-between text-gray-700 mt-1">
//                     <p className="font-medium">Expiry Date:</p>
//                     <p>{"paymentDetails.cardDetails.exp_month}/{paymentDetails.cardDetails.exp_year"}</p>
//                 </div>
//             </div>

//             {/* Divider */}
//             <div className="my-6 border-t border-gray-300"></div>

//             {/* Thank You Note */}
//             <div className="text-center">
//                 <p className="text-lg text-gray-700 font-light">
//                     Thank you for your purchase! If you have any questions, please contact our support team at
//                     <span className="text-purple-600 font-semibold"> support@quizepulse.com</span>.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default PaymentInvoice;

"use client"

import React, { useRef } from "react";
import { Button } from "@nextui-org/react";
import { Pdf } from "react-to-pdf";

// Import react-to-pdf
import { PDFDownloadLink } from "@react-pdf/renderer";

const PaymentInvoice = ({ paymentDetails }) => {
    const pdfRef = useRef();

    return (
        <div>
            {/* Invoice section */}
            <div className="max-w-4xl mx-auto p-10 bg-white shadow-2xl rounded-lg my-12 border border-gray-200" ref={pdfRef}>
                {/* Invoice Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-purple-700 tracking-wide">Invoice</h1>
                    <p className="text-sm text-gray-500">Transaction ID: {"paymentDetails.transactionId"}</p>
                </div>

                {/* Invoice Info */}
                <div className="grid grid-cols-2 gap-6 text-lg">
                    <div>
                        <p className="font-semibold text-gray-800">Billed To:</p>
                        <p className="text-gray-700">{"paymentDetails.name"}</p>
                        <p className="text-gray-700">Email: {"paymentDetails.email"}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold text-gray-800">Invoice Date:</p>
                        <p className="text-gray-700">{"new Date(paymentDetails.paymentTime).toLocaleDateString()"}</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-300"></div>

                {/* Payment Details */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Payment Summary</h2>
                    <div className="flex justify-between text-gray-700">
                        <p className="font-medium">Package:</p>
                        <p>{"paymentDetails.packageTitle"} Plan</p>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-1">
                        <p className="font-medium">Total Amount:</p>
                        <p>${"paymentDetails.price"}</p>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-1">
                        <p className="font-medium">Payment Status:</p>
                        <p>{"paymentDetails.status"}</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-300"></div>

                {/* Card Details */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Card Details</h2>
                    <div className="flex justify-between text-gray-700">
                        <p className="font-medium">Card Brand:</p>
                        <p className="uppercase">{"paymentDetails.cardDetails.brand"}</p>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-1">
                        <p className="font-medium">Last 4 Digits:</p>
                        {/* <p>**** **** **** {paymentDetails.cardDetails.last4}</p> */}
                        <p>**** **** **** 4242</p>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-1">
                        <p className="font-medium">Expiry Date:</p>
                        {/* <p>{paymentDetails.cardDetails.exp_month}/{paymentDetails.cardDetails.exp_year}</p> */}
                        <p>{"Exp Year"}</p>
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

            {/* Generate PDF Button */}
            <div className="text-center mt-8">
                <Pdf targetRef={pdfRef} filename="invoice.pdf">
                    {({ toPdf }) => (
                        <Button onPress={toPdf} shadow color="primary" auto>
                            Download Invoice PDF
                        </Button>
                    )}
                </Pdf>
            </div>
        </div>
    );
};

export default PaymentInvoice;
