import React from 'react';
import Certificate from './certificate';

const CertificateDisplay = () => {
    return (
        <div className="">
            <div className="max-w-5xl">
                <Certificate
                    courseName={`On ${"10"} Quizzes and Achieved ${40} Points`}
                    issueDate="October 27, 2024"
                    certificateId="671e7f073ae2d"
                />
            </div>
        </div>
    );
};

export default CertificateDisplay;