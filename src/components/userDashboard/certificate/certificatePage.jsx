import React from 'react';
import Certificate from './certificate';

const CertificatePage = () => {

    return (
        <div>
            This is Certificate Page
            <Certificate
                courseName={`Participated on ${"10"} Quizzes and Achieved ${40} Points`}
                issueDate="October 27, 2024"
                certificateId="671e7f073ae2d"
            />
        </div>
    );
};

export default CertificatePage;