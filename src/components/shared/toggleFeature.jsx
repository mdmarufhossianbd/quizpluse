"use client"

import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToggleFeature = ({ quizId, isFeatured }) => {
    const [loading, setLoading] = useState(false);

    // console.log(isFeatured)
    const handleToggleFeatured = async () => {
        setLoading(true);
        // console.log("btn clicked")
        try {
            const response = await axios.post(`/api/quiz/${quizId}/toggle-featured`, {
                featured: !isFeatured,
            });
            if (response.data.success) {
                toast.success(`Featured request sent to Admin. Quiz is now ${!isFeatured ? "Featured" : "UnFeatured"}`);
            } else {
                toast.error("Failed to send Featured request");
            }
        }
        catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <button
                onClick={handleToggleFeatured}
                disabled={loading || isFeatured === "Yes"}
                className={`px-3 py-2 text-white rounded-md ${isFeatured === "Yes" ? "bg-[#5C0096]" : "bg-[#5C0096]"} hover:bg-[#500081]`}
            >
                {loading ? "Processing...." : isFeatured === "Yes" ? "Featured" : "Make Featured"}
            </button>
        </div>
    );
};

export default ToggleFeature;