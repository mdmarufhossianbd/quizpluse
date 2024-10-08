import Link from 'next/link';
import { ImCheckboxChecked, ImCross } from 'react-icons/im';
import ResultView from './resultView';

const QuizResult = ({ correctCount, incorrectCount, userAnswers, quiz }) => {

    return (
        <div className="bg-white text-black p-3 md:p-6 max-w-2xl mx-auto my-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Quiz Completed!</h2>
            <div className='bg-[#7500be0c] shadow-lg p-4 rounded-lg mb-6'>
                <p className='text-xl font-bold mb-2'>Result: </p>
                <hr className='mb-3' />
                <p className="text-md md:text-lg font-medium mb-4 flex items-center"><ImCheckboxChecked className='mr-2 text-green-600' />
                    Correct Answers: {correctCount}</p>
                <p className="text-md md:text-lg font-medium flex items-center"><ImCross className='mr-2 text-red-600' />
                    Incorrect Answers: {incorrectCount}</p>
            </div>

            <ResultView userAnswers={userAnswers} quiz={quiz} />
            
            <div className="flex justify-between gap-1">
                <button className="px-5 py-1.5 rounded-md text-white transition-all duration-200 bg-[#7500be] hover:bg-[#500081]">
                    <Link href="/user-dashboard">Dashboard</Link>
                </button>
                <button
                    className="px-5 py-1.5 rounded-md text-white transition-all duration-200 bg-[#7500be] hover:bg-[#500081]"
                >
                    <Link href="/quizes">Take Another Quiz</Link>
                </button>
            </div>
        </div>
    );
};

export default QuizResult;