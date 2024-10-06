import { useState, useEffect } from 'react';
import QuizNavigation from './quizNavigation';
import QuizResult from './quizResult';

const QuizQuestion = ({ quiz, timeLimit }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(quiz.questions.length).fill(null));
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);

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
            calculateResult(); // Calculate the result when quiz is completed
            setQuizCompleted(true);
        }
    };

    // Handle navigation to previous question
    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Calculate correct and incorrect answers
    const calculateResult = () => {
        let correct = 0;
        let incorrect = 0;
        quiz.questions.forEach((question, index) => {
            console.log("User Answer: ", userAnswers[index]);
            console.log("Correct Answer: ", question.correctAnswer);

            if (userAnswers[index] !== null) {
                if (userAnswers[index] === question.options.indexOf(question.correctOption)) {
                    correct++;
                } else {
                    incorrect++;
                }
            }
        });
        setCorrectCount(correct);
        setIncorrectCount(incorrect);
    };

    // Display result when quiz is completed or time runs out
    if (quizCompleted || timeLimit === 0) {
        return <QuizResult
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            userAnswers={userAnswers}
            quiz={quiz}
        />;
    }

    return (
        <div className="rounded-lg shadow-md p-6 md:p-8 lg:p-10 max-w-2xl mx-auto my-8 bg-white">
            <h2 className="text-lg bg-[#5C0096] text-white p-1 rounded-xl px-2 mb-4 inline-block shadow">
                Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </h2>
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
            <QuizNavigation
                handlePrev={handlePrev}
                handleNext={handleNext}
                currentQuestionIndex={currentQuestionIndex}
                userAnswers={userAnswers}
                totalQuestions={quiz.questions.length}
            />
        </div>
    );
};

export default QuizQuestion;
