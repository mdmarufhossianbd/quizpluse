import React, { useState } from 'react';

const QuizQuestion = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <div className="">
                {/* Question Header */}
                <div className='flex justify-start'>
                    <h2 className="text-lg bg-white text-[#731E95] p-1 rounded-xl px-2">Question {"1"} of {"10"}</h2>
                </div>
                <div className="mb-4">
                    <p className="text-2xl mt-2 font-bold border border-white rounded-full p-2 text-center">{"Question Name?"}</p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
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
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                    // disabled={current === 0}
                    >
                        Previous
                    </button>
                    {/* {current + 1 === total ? (
                        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                            Submit Quiz
                        </button>
                    ) : (
                        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                            Next
                        </button>
                    )} */}
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};


export default QuizQuestion;