import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

const Pagination = ({ page, setPage, totalPages }) => {

    const handleNextPage = () => {
        setPage(page + 1)
    };

    const handlePreviousPage = () => {
        setPage(page - 1)
    };

    return (
        <div className="flex justify-between items-center mt-4">
            <p>Page {page} of {totalPages}</p>
            <div className="flex items-center gap-3">        
                <button disabled={page === 1} onClick={handlePreviousPage} className='px-3 md:py-2 py-1 bg-[#7556ff] text-white hover:bg-[#500081] disabled:bg-[#e0ceeb] disabled:text-black flex gap-2 rounded-l-full disabled:cursor-not-allowed'><IconArrowNarrowLeft stroke={2} /> Previous
                </button>

                <button disabled={page === totalPages} onClick={handleNextPage} className='px-3 md:py-2 py-1 bg-[#7556ff] text-white hover:bg-[#500081] disabled:bg-[#e0ceeb] disabled:text-black flex gap-2 rounded-r-full disabled:cursor-not-allowed'>Next<IconArrowNarrowRight stroke={2} /> 
                </button>
            </div>
        </div>
    );
};

export default Pagination;