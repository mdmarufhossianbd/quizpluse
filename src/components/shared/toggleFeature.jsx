"use client"

import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ToggleFeature = ({ quizId, isFeatured }) => {
    const [loading, setLoading] = useState(false);

    const handleToggleFeatured = async () => {
        setLoading(true);
        console.log("btn clicked")
        try {
            const response = await axios.post(`/api/quiz/${quizId}/toggle-featured`, {
                featured: !isFeatured,
            });
            if (response.data.success) {
                toast.success(`Featured request sent to Admin. Quiz is now ${!isFeatured ? "Featured" : "UnFeatured"}`);
            } else {
                toast.error("Failed tosend Featured request");
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
            <button
                onClick={handleToggleFeatured}
                disabled={loading}
                className={`px-3 py-2 text-white rounded-md ${isFeatured ? "bg-gray-400" : "bg-indigo-500"} hover:bg-indigo-500`}
            >
                {loading ? "Processing...." : isFeatured ? "No" : "Make Featured"}
            </button>
        </div>
    );
};

export default ToggleFeature;