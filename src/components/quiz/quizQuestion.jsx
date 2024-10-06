import { useState, useEffect } from 'react';
import QuizProgress from './quizProgress';
import Link from 'next/link';

const QuizQuestion = ({ quiz, timeLimit }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(quiz.questions.length).fill(null));
    const [quizCompleted, setQuizCompleted] = useState(false);

    // Handle selecting an answer
    const handleAnswerSelect = (optionIndex) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setUserAnswers(newAnswers);
    };

    // Handle navigation to next question
    const handleNext = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true); // Mark quiz as completed
        }
    };

    // Handle navigation to previous question
    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Display results when quiz is completed
    if (quizCompleted || timeLimit === 0) {
        return (
            <div className="bg-white text-black p-6 max-w-2xl mx-auto my-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Quiz Completed!</h2>
                <p>Your Answers:</p>
                <ul className="mb-6">
                    {quiz.questions.map((q, index) => (
                        <li key={index}>
                            <p className="font-medium">{q.question}</p>
                            <p>
                                Your Answer: {userAnswers[index] !== null ? q.options[userAnswers[index]] : "Not Answered"}
                            </p>
                        </li>
                    ))}
                </ul>
                <div className='flex justify-between'>
                    <button
                        className="bg-purple-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-purple-700 transition-all duration-200"

                    >
                        <Link href="/">Home</Link>
                    </button>
                    <button
                        className="bg-purple-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-purple-700 transition-all duration-200"
                        onClick={() => window.location.reload()}
                    >
                        Retake Quiz
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div className="rounded-lg shadow-md p-6 md:p-8 lg:p-10 max-w-2xl mx-auto my-8 bg-white">
            {/* Progress Bar */}
            {/* <QuizProgress current={currentQuestionIndex + 1} total={quiz.questions.length} /> */}
            {/* Question Header */}
            <h2 className="text-lg bg-[#5C0096] text-white p-1 rounded-xl px-2 mb-4 inline-block shadow">
                Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </h2>

            {/* Question Body */}
            <div className="mb-6">
                <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4">
                    {quiz.questions[currentQuestionIndex].question}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quiz.questions[currentQuestionIndex].options.map((option, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleAnswerSelect(index)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 border-2 ${userAnswers[currentQuestionIndex] === index
                                    ? 'bg-[#5c0096cc] border-gray-400 text-white'
                                    : 'bg-white border-[#5C0096] text-black hover:text-white hover:bg-[#5c0096cc]'
                                    }`}
                            >
                                {index + 1}. {option}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                <button
                    className="bg-gray-300 px-4 py-2 rounded-lg font-medium text-purple-700 hover:bg-purple-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                >
                    Previous
                </button>

                <button
                    className="bg-[#7500be] px-4 py-2 rounded-lg text-white font-medium hover:bg-[#500081] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleNext}
                    disabled={userAnswers[currentQuestionIndex] === null}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default QuizQuestion;
