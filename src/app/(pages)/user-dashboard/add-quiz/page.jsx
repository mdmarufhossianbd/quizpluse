"use client";

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AddQuiz = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        quizName: '',
        totalQuestions: '',
        questions: [],
        totalDuration: '',
        quizImage: '',
        createdAt: new Date().toISOString(),
        creator: "user"
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const totalSteps = 3;

    // Update questions based on totalQuestions
    useEffect(() => {
        const { totalQuestions } = formData;
        if (totalQuestions > 0) {
            const updatedQuestions = Array.from({ length: totalQuestions }, (_, index) => ({
                question: '',
                options: ['', '', '', ''], // 4 options for MCQ
                correctOption: '',
            }));
            setFormData((prev) => ({ ...prev, questions: updatedQuestions }));
        } else {
            setFormData((prev) => ({ ...prev, questions: [] }));
        }
    }, [formData.totalQuestions]);

    const nextStep = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleQuestionChange = (index, e) => {
        const { name, value } = e.target;
        const updatedQuestions = formData.questions.map((q, i) =>
            i === index ? { ...q, [name]: value } : q
        );
        setFormData({ ...formData, questions: updatedQuestions });
    };

    const handleOptionChange = (questionIdx, optionIdx, e) => {
        const updatedQuestions = [...formData.questions];
        updatedQuestions[questionIdx].options[optionIdx] = e.target.value;
        setFormData({ ...formData, questions: updatedQuestions });
    };

    const isStepValid = step === 1
        ? formData.quizName && formData.totalQuestions
        : step === 2
            ? formData.questions.every(
                (q) => q.question && q.options.every((opt) => opt) && q.correctOption
            )
            : step === 3
                ? formData.totalDuration
                : true;

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Upload to Cloudinary
        const formDataImg = new FormData();
        formDataImg.append('file', file);
        formDataImg.append('upload_preset', 'dnvoamke7'); // replace with your Cloudinary upload preset

        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_CLOUDYNARY_CLOUD_NAME}/image/upload`, formDataImg); // replace with your Cloudinary URL
            setFormData((prev) => ({ ...prev, quizImage: response.data.secure_url })); // Get the image URL
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    console.log(process.env.NEXT_CLOUDINARY_URL)

    const renderQuizPreview = () => (
        <div>
            <h3 className="font-bold text-lg mb-2">Quiz Name: {formData.quizName}</h3>
            <h4 className="font-medium mb-2">Total Questions: {formData.totalQuestions}</h4>
            <h4 className="font-medium mb-2">Total Duration: {formData.totalDuration} minutes</h4>
            {formData.questions.map((q, index) => (
                <div key={index} className="mb-4">
                    <h4 className="font-semibold">Question {index + 1}: {q.question}</h4>
                    <ul className="list-disc ml-6">
                        {q.options.map((opt, optIdx) => (
                            <li key={optIdx}>{opt}</li>
                        ))}
                    </ul>
                    <p><strong>Correct Option:</strong> {q.correctOption}</p>
                </div>
            ))}
        </div>
    );

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formData);
        //Send data to database from here..

    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-xl mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Create a Quiz</h1>

            {/* Progress Indicator */}
            <div className="w-full bg-[#5c009642] rounded-full h-2.5 mb-6">
                <div
                    className="bg-[#5C0096] h-2.5 rounded-full"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                ></div>
            </div>

            <form onSubmit={handleSubmitForm}>
                {/* Step 1: Quiz Information */}
                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Step 1: Quiz Information</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Quiz Name:
                            </label>
                            <input
                                type="text"
                                name="quizName"
                                value={formData.quizName}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Total Questions:
                            </label>
                            <input
                                type="number"
                                name="totalQuestions"
                                value={formData.totalQuestions}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                min="1"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={nextStep}
                            className={` px-4 py-2 rounded-md bg-[#5C0096] text-white hover:bg-[#500081] ${!isStepValid && 'opacity-50 cursor-not-allowed'}`}
                            disabled={!isStepValid}
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* Step 2: Add Questions */}
                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Step 2: Add Questions</h2>
                        {formData.questions.map((q, index) => (
                            <div key={index} className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Question {index + 1}:
                                </label>
                                <input
                                    type="text"
                                    name="question"
                                    value={q.question}
                                    onChange={(e) => handleQuestionChange(index, e)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <div className="space-y-2 mt-2">
                                    {q.options.map((option, optIdx) => (
                                        <input
                                            key={optIdx}
                                            type="text"
                                            name={`option${optIdx}`}
                                            value={option}
                                            onChange={(e) => handleOptionChange(index, optIdx, e)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder={`Option ${optIdx + 1}`}
                                            required
                                        />
                                    ))}
                                    <input
                                        type="text"
                                        name="correctOption"
                                        value={q.correctOption}
                                        onChange={(e) => handleQuestionChange(index, e)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Correct Option"
                                        required
                                    />
                                </div>
                            </div>
                        ))}
                        <div>
                            <button
                                type="button"
                                onClick={prevStep}
                                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2"
                            >
                                Previous
                            </button>
                            <button
                                type="button"
                                onClick={nextStep}
                                className={`px-4 py-2 rounded-md bg-[#5C0096] text-white hover:bg-[#500081] ${!isStepValid && 'opacity-50 cursor-not-allowed'}`}
                                disabled={!isStepValid}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Quiz Duration */}
                {step === 3 && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Step 3: Quiz Duration</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Total Duration (in minutes):
                            </label>
                            <input
                                type="number"
                                name="totalDuration"
                                value={formData.totalDuration}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Quiz Image:
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        {formData.quizImage && (
                            <img src={formData.quizImage} alt="Quiz" className="mb-4" />
                        )}

                        <div className='flex justify-between'>
                            <div>
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2"
                                >
                                    Previous
                                </button>
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className={`px-4 py-2 rounded-md bg-[#5C0096] text-white hover:bg-[#500081]`}
                                >
                                    Review Quiz
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-md bg-[#5C0096] text-white hover:bg-[#500081]"
                            >
                                Submit Quiz
                            </button>
                        </div>
                    </div>
                )}


                {/* Modal for Quiz Review */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-md w-96">
                            <h2 className="text-xl font-semibold mb-4 text-center">Quiz Review</h2>

                            {renderQuizPreview()}
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={closeModal}
                                    className=" px-4 py-2 rounded-md bg-[#5C0096] text-white hover:bg-[#500081]"
                                >
                                    Back to Edit
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </form>


        </div>
    );
};

export default AddQuiz;