
const QuizNavigation = ({ handlePrev, handleNext, userAnswers, currentQuestionIndex, totalQuestions, submitResult }) => {
    return (
        <>
            <div className="flex justify-between mt-6">
                {/* Previous Button */}
                <button
                    className="px-4 py-2 rounded-lg text-white font-medium bg-[#7500be] hover:bg-[#500081] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                >
                    Previous
                </button>

                {/* Next/Submit Button */}
                {
                    currentQuestionIndex === totalQuestions - 1 ? 
                        <button disabled={userAnswers[currentQuestionIndex] === null} className="px-4 py-2 rounded-lg text-white font-medium bg-[#7500be] hover:bg-[#500081] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" onClick={submitResult}>
                            Submit
                        </button> : 
                        <button
                        className="px-4 py-2 rounded-lg text-white font-medium bg-[#7500be] hover:bg-[#500081] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleNext} disabled={userAnswers[currentQuestionIndex] === null}
                    >
                        {currentQuestionIndex !== totalQuestions - 1 && 'Next'}
                    </button>
                }
            </div>
        </>
    );
};

export default QuizNavigation;
