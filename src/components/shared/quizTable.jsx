import React from 'react';

const QuizTable = ({ quizzes }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border">
                <thead className="bg-[#5c009638] overflow-x-auto">
                    <tr>
                        <th scope="col" className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm text-black uppercase tracking-wider font-semibold">Quiz Name</th>
                        <th scope="col" className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm text-black uppercase tracking-wider font-semibold">Category</th>
                        <th scope="col" className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm text-black uppercase tracking-wider font-semibold">Date Created</th>
                        <th scope="col" className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm text-black uppercase tracking-wider font-semibold">Duration</th>
                        <th scope="col" className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm text-black uppercase tracking-wider font-semibold">Total Questions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {quizzes?.map((quiz) => (
                        <tr key={quiz._id}>
                            <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm">{quiz.quizName}</td>
                            <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm">{quiz.quizCategory}</td>
                            <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm">{new Date(quiz.createAt).toLocaleDateString()}</td>
                            <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm">{quiz.quizDuration} mins</td>
                            <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm">{quiz.totalQuestions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default QuizTable;
