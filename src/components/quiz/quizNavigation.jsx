import React from 'react';

const QuizNavigation = ({ handlePrev, handleNext, userAnswers, currentQuestionIndex, totalQuestions }) => {
    return (
        <>
            <div className="flex justify-between mt-6">
                {/* Previous Button */}
                <button
                    className=" px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#7500be] hover:bg-[#dad8db]"
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                >
                    Previous
                </button>

                {/* Next/Submit Button */}
                <button
                    className="px-4 py-2 rounded-lg text-white font-medium bg-[#7500be] hover:bg-[#500081] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleNext}
                    disabled={userAnswers[currentQuestionIndex] === null}
                >
                    {currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next'}
                </button>
            </div>
        </>
    );
};

export default QuizNavigation;