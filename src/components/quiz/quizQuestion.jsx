import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Loading from '../shared/loading';
import QuizNavigation from './quizNavigation';
import QuizResult from './quizResult';

const QuizQuestion = ({ quiz, timeLimit, setTimeLeft }) => {
    const { data } = useSession();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(quiz.questions.length).fill(null));
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [loading, setLoading] = useState(false)
    // Handle selecting an answer
    const handleAnswerSelect = (optionIndex) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setUserAnswers(newAnswers);
    };

    // Calculate correct and incorrect answers
    const calculateResult = () => {
        let correct = 0;
        let incorrect = 0;
        quiz.questions.forEach((question, index) => {
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

    // Handle navigation to next question or submitting the quiz
    const handleNext = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            calculateResult(); // Calculate the result when quiz is completed
            setQuizCompleted(true);
            setTimeLeft(0); // Stop the timer
        }
    };

    // Handle navigation to previous question
    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Submit result to the database
    const submitResult = async() => {
        setLoading(true)
        calculateResult()
        const quizResult = {
            quizId: quiz?._id,
            quizName: quiz?.quizName,
            userEmail: data?.user?.email,
            earnedPoint: correctCount,
            totalPoint: quiz?.totalQuestions,
        };        
        await axios.post('/api/v1/quiz/result', quizResult)
        .then(res => {
            if(res.data.success)
            setTimeLeft(0)
            setLoading(false)
        })
    };

    useEffect(() => {
        
    }, [quizCompleted, correctCount]);

    // Display result when quiz is completed or time runs out
    if (quizCompleted || timeLimit === 0) {
        return (
            <QuizResult
                correctCount={correctCount}
                incorrectCount={incorrectCount}
                userAnswers={userAnswers}
                quiz={quiz}
            />
        );
    }

    // loader for showing result
    if(loading){
        return <Loading />
    }

    return (
        <div className="rounded-md bg-white max-w-2xl mx-auto p-4 md:mb-8 mb-5">
            <h2 className="text-lg bg-[#5C0096] text-white py-1 rounded-full px-2 mb-4 inline-block shadow text-center w-full">
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
                                className={`w-full h-full text-left px-4 py-3 rounded-lg transition-all duration-200 border ${userAnswers[currentQuestionIndex] === index
                                    ? 'bg-[#5c0096cc] text-white'
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
                submitResult={submitResult}
            />
        </div>
    );
};

export default QuizQuestion;
