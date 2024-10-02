import React from 'react';
import { FaPen } from 'react-icons/fa';
import { MdOutlineDeleteForever } from "react-icons/md";

const QuizTable = ({ quizzes }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200 border">
                <thead className="bg-[#5c009638]">
                    <tr>
                        <th scope="col" className="px-2 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm text-black uppercase tracking-wider font-semibold">Quiz Name</th>
                        <th scope="col" className="px-2 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm text-black uppercase tracking-wider font-semibold">Category</th>
                        <th scope="col" className="px-2 py-2 md:px-6 md:py-3 hidden md:table-cell text-left text-xs md:text-sm text-black uppercase tracking-wider font-semibold">Date Created</th>
                        <th scope="col" className="px-2 py-2 md:px-6 md:py-3 hidden md:table-cell text-left text-xs md:text-sm text-black uppercase tracking-wider font-semibold">Duration</th>
                        <th scope="col" className="px-2 py-2 md:px-6 md:py-3 hidden md:table-cell text-left text-xs md:text-sm text-black uppercase tracking-wider font-semibold">Total Questions</th>
                        <th scope="col" className="px-2 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm text-black uppercase tracking-wider font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {quizzes?.map((quiz) => (
                        <tr key={quiz?._id}>
                            <td className="px-2 py-2 md:px-6 md:py-4 whitespace-normal break-words text-xs md:text-sm border">
                                <button className="text-blue-500 hover:underline">
                                    {quiz?.quizName}
                                </button>
                            </td>
                            <td className="px-2 py-2 md:px-6 md:py-4 text-xs md:text-sm">{quiz?.quizCategory}</td>
                            <td className="px-2 py-2 md:px-6 md:py-4 hidden md:table-cell text-xs md:text-sm">{new Date(quiz?.createAt).toLocaleDateString()}</td>
                            <td className="px-2 py-2 md:px-6 md:py-4 hidden md:table-cell text-xs md:text-sm">{quiz?.quizDuration} mins</td>
                            <td className="px-2 py-2 md:px-6 md:py-4 hidden md:table-cell text-xs md:text-sm">{quiz?.totalQuestions}</td>
                            <td className="px-2 py-2 md:px-6 md:py-4 text-xs md:text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                <button className="flex justify-center relative group  mr-2 text-xl text-[#5c0096] p-2 rounded-md hover:bg-[#5c009631] transition duration-200">
                                    <FaPen />
                                    <span className="absolute hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1">Edit</span>
                                </button>
                                <button className="flex justify-center relative group hover:underline mr-2 text-xl text-red-600 p-2 rounded-md hover:bg-[#5c009631] transition duration-200">
                                    <MdOutlineDeleteForever />
                                    <span className="absolute hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1">Delete</span>
                                </button>
                                <button className={`relative group text-xs font-semibold p-2 rounded-md transition duration-200 ${quiz?.featured === "Yes" ? 'bg-[#5c0096] text-white hover:bg-[#5c009631]' : 'bg-[#5c009631] hover:bg-[#5c0096] text-[#5c0096] hover:text-white'}`}>
                                    {quiz?.featured === "Yes" ? 'Unfeature' : 'Feature'}
                                    <span className="absolute hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1">
                                        {quiz?.featured === "Yes" ? 'Make Unfeature' : 'Make Feature'}
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default QuizTable;
