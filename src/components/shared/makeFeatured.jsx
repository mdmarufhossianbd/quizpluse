"use client"

import axios from 'axios';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'sonner';

const MakeFeatured = ({ quizId, isFeatured, setFeatured, email }) => {
    const [loading, setLoading] = useState(false);

    // console.log(isFeatured)
    const handleToggleFeatured = async () => {
        setLoading(true);
        const featuredInfo = {
            quizId,
            email
        }
        try {
            const response = await axios.put('/api/v1/quiz/make-featured', featuredInfo);
            if (response.data.success) {
                toast.success(response?.data?.message);
                setFeatured(true)
            } else {
                toast.error(response?.data?.message);
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

export default MakeFeatured