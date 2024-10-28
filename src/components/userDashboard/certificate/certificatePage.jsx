import React from 'react';
import Certificate from './certificate';

const CertificatePage = () => {
    return (
        <div>
            This is Certificate Page
            <Certificate
                userName="John Doe"
                courseName="QuizPulse Programming Quiz"
                issueDate="October 27, 2024"
                certificateId="671e7f073ae2d"
            />
        </div>
    );
};

export default CertificatePage;