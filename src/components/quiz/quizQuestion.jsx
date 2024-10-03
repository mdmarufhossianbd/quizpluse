import { useState } from 'react';

const QuizQuestion = ({ quiz }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    // const allQuestions = questions.map(q => q.question)

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(quiz.questions.length).fill(null));

    const handleNext = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleAnswerSelect = (optionIndex) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setUserAnswers(newAnswers);
    };

    return (
        <div>
            <div className="">
                {/* Question Header */}
                <div className='flex justify-start'>
                    <h2 className="text-lg bg-white text-[#731E95] p-1 rounded-xl px-2">Question {"1"} of {"10"}</h2>
                </div>
                <div className="mb-4">
                    {/* <p className="text-2xl mt-2 font-bold border border-white rounded-full p-2 text-center">{allQuestions[0]}</p> */}
                </div>

                {/* Options */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                    <div>
                        <label
                            className={`block p-2 border rounded-full cursor-pointer font-semibold`}
                        >
                            <input
                                type="radio"
                                name={`question`}
                                value={"option"}
                                className="hidden"
                            />
                            <span className='text-[#FCDEFF]'>A :</span> {"option"}
                        </label>
                    </div>
                    <div>
                        <label
                            className={`block p-2 border rounded-full cursor-pointer font-semibold`}
                        >
                            <input
                                type="radio"
                                name={`question`}
                                value={"option"}
                                className="hidden"
                            />
                            <span className='text-[#FCDEFF]'>B :</span> {"option"}
                        </label>
                    </div>
                    <div>
                        <label
                            className={`block p-2 border rounded-full cursor-pointer font-semibold`}
                        >
                            <input
                                type="radio"
                                name={`question`}
                                value={"option"}
                                className="hidden"
                            />
                            <span className='text-[#FCDEFF]'>C :</span> {"option"}
                        </label>
                    </div>
                    <div>
                        <label
                            className={`block p-2 border rounded-full cursor-pointer font-semibold`}
                        >
                            <input
                                type="radio"
                                name={`question`}
                                value={"option"}
                                className="hidden"
                            />
                            <span className='text-[#FCDEFF]'>D :</span> {"option"}
                        </label>
                    </div>
                </div> */}

                <div>
                    {/* <h2>{quiz.quizName}</h2> */}
                    <p>{quiz.questions[currentQuestionIndex].question}</p>
                    <ul className='grid grid-cols-2 gap-10'>
                        {quiz.questions[currentQuestionIndex].options.map((option, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleAnswerSelect(index)}
                                    style={{
                                        backgroundColor: userAnswers[currentQuestionIndex] === index ? 'green' : '',
                                    }}
                                >
                                    {index+1}. {option}
                                </button>
                            </li>
                        ))}
                    </ul>


                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <button className='bg-gray-300 px-2 py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2 text-[#701d93] rounded font-medium' onClick={handlePrev} disabled={currentQuestionIndex === 0}>Previous</button>
                    <button className='bg-gray-300 px-2 py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2 text-[#701d93] rounded font-medium' onClick={handleNext} disabled={currentQuestionIndex === quiz.questions.length - 1}>Next</button>
                </div>
            </div>
        </div>
    );
};


export default QuizQuestion;