import React from 'react';
const steps = ['Step 1', 'Step 2', 'Step 3'];
const Step = ({ currentIndex }) => {
    return (
        <div className="steps-container">
            {steps.map((step, index) => {
                let color = currentIndex === index ? '#00d4ff' : 'black';
                return (
                    <div className="steps-item">
                        <h3
                            className="text-2xl"
                            style={{
                                color: color,
                            }}
                        >
                            {step}
                        </h3>
                    </div>
                );
            })}
        </div>
    );
};
export default Step;
