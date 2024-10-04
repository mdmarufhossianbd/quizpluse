import React from 'react';

const QuizTimer = () => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);
    return (
        <div>
            <div className="text-sm text-gray-700">
                <span className="font-semibold">Time Left: </span>
                <span>{Math.floor(timeLeft / 60)}:{timeLeft % 60}</span>
            </div>
        </div>
    );
};

export default QuizTimer;