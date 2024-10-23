import React from 'react';
import './dataLoader.css';
const DataLoader = () => {
    return (
        <div>
            <div className="loader flex justify-center items-center mt-8">
                <div className="wrapper">
                    <div className="text">QuizPulse</div>
                    <div className="box"></div>
                </div>
            </div>
        </div>
    );
};

export default DataLoader;