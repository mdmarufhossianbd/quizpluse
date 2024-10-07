const QuizProgress = ({ current, total }) => {
    const progressPercentage = (current / total) * 100;

    return (
        <div>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
            <p className="text-sm text-gray-600">{`Progress: ${current} of ${total}`}</p>
        </div>
    );
};

export default QuizProgress;
