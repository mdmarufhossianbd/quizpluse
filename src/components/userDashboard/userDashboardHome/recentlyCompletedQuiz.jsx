import React from 'react';

const RecentlyCompletedQuiz = ({ quizResult }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizResult
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by most recent first
                .slice(0, 3) // Take only the most recent 3 results
                .map((result) => (
                    <div
                        key={result._id}
                        className="bg-gray-100 hover:bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        {/* Quiz Image */}
                        <div className="relative h-40 mb-6">
                            <img
                                src={result.quizImage}
                                alt={result.quizName}
                                className="w-full h-full object-cover rounded-lg shadow-sm"
                            />
                        </div>

                        {/* Quiz Info */}
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{result.quizName}</h3>

                        <div className="text-lg text-gray-600">
                            <p className="mb-2">
                                <span className="font-semibold text-gray-800">Earned Points:</span>{" "}
                                <span className="font-bold text-[#5C0096]">{result.earnedPoint}</span>
                                /{result.totalPoint}
                            </p>
                            <p className="text-sm text-gray-500">Completed on: {new Date(result.createdAt).toLocaleDateString()}</p>
                        </div>


                        {/* View Quiz Details Link */}
                        {/* <Link
                    href={`/quizes/${result.quizId}`}
                    className="inline-block mt-4 text-sm font-bold text-[#5C0096] hover:text-[#370a69] hover:underline"
                  >
                    View Quiz Details
                  </Link> */}
                    </div>
                ))}
        </div>
    );
};

export default RecentlyCompletedQuiz;