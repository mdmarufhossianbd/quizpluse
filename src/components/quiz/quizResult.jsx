import Link from 'next/link';
import { GrValidate } from "react-icons/gr";
import { ImCheckboxChecked, ImCross } from 'react-icons/im';

const QuizResult = ({ correctCount, incorrectCount, userAnswers, quiz }) => {
    console.log(userAnswers)
    return (
        <div className="bg-white text-black p-6 max-w-2xl mx-auto my-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Quiz Completed!</h2>
            <div className='bg-[#7500be0c] shadow-lg p-4 rounded-lg mb-6'>
                <p className='text-xl font-bold mb-2'>Result: </p>
                <hr className='mb-3' />
                <p className="text-lg font-medium mb-4 flex items-center"><ImCheckboxChecked className='mr-2 text-green-600' />
                    Correct Answers: {correctCount}</p>
                <p className="text-lg font-medium flex items-center"><ImCross className='mr-2 text-red-600' />
                    Incorrect Answers: {incorrectCount}</p>
            </div>
            <p className='text-xl font-bold mb-2'>Quiz Details:</p>
            <ul className="mb-6">
                {quiz.questions.map((q, index) => (
                    <li key={index} className='mb-2'>
                        <p className='font-semibold'>Question {index + 1}:</p>
                        <p className="font-medium"> {q.question}</p>
                        <p>
                            Your Answer: {userAnswers[index] !== null ? q.options[userAnswers[index]] : "Not Answered"}
                        </p>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between">
                <button className=" px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 bg-[#7500be] hover:bg-[#500081]">
                    <Link href="/user-dashboard">Dashboard</Link>
                </button>
                <button
                    className=" px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 bg-[#7500be] hover:bg-[#500081]"
                >
                    <Link href="/quizes">Take Another Quiz</Link>
                </button>
            </div>
        </div>
    );
};

export default QuizResult;
