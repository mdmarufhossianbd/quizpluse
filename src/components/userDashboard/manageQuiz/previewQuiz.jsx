import React from 'react';

const PreviewQuiz = ({ formData }) => {
    return (
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
                    <p><strong>Correct Option:</strong> {q.correctAnswer}</p>
                </div>
            ))}
        </div>
    );
};

export default PreviewQuiz;