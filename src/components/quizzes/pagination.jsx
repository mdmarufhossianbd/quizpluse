'use client'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ page, setPage, totalPages }) => {

    const handleNextPage = () => {
        setPage(page + 1)
    };

    const handlePreviousPage = () => {
        setPage(page - 1)
    };

    return (
        <div className="flex justify-between items-center mt-4">
            <p className="text-white">Page {page} of {totalPages} pages</p>
            <div className="flex items-center gap-3">
                <button disabled={page === 1} onClick={handlePreviousPage} className='bg-white rounded-full text-[#5c0096bd] p-5 disabled:cursor-not-allowed disabled:text-gray-500'><FaArrowLeft />
                </button>

                <button disabled={page === totalPages} onClick={handleNextPage} className='bg-white rounded-full text-[#5c0096bd] p-5 disabled:cursor-not-allowed disabled:text-gray-500'><FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Pagination;