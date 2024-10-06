import { useState } from 'react';
import Link from 'next/link';
import QuizNavigation from './quizNavigation';

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

    // Handle navigation to next question or submitting the quiz
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
                        className=" px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 bg-[#7500be] hover:bg-[#500081]"

                    >
                        <Link href="/">Home</Link>
                    </button>
                    <button
                        className=" px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 bg-[#7500be] hover:bg-[#500081]"
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

            {/* Quiz Progress  */}
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
            <QuizNavigation handlePrev={handlePrev} handleNext={handleNext} currentQuestionIndex={currentQuestionIndex} userAnswers={userAnswers} totalQuestions={quiz.questions.length} />
        </div>
    );
};

export default QuizQuestion;
