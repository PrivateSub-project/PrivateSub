import React, { useContext, useState } from 'react';
import Slider from './SliderCard';
import Step from './Step';
import FormSlider from './FormSlider';
import './SliderCard.css';
import { contextCommon2 } from '../../utils';
import PostCreditCard from '../../API/PostCreditCard';
import {} from 'react';
import { useCallback } from 'react';

export default function index() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { dataSteps, setFinal } = useContext(contextCommon2);
    const handleIndexChange = (index) => {
        setCurrentIndex(index);
    };

    const handleNext = (currentIndex) => {
        setCurrentIndex(currentIndex + 1);
    };
    const handlePervious = (currentIndex) => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleComplete = useCallback(() => {
        if (dataSteps)
            PostCreditCard(dataSteps)
                .then((value) => {
                    // navigate('/');
                    console.log(value.data.name);
                    setFinal(true);
                })
                .catch((err) => console.log(err));
    }, [dataSteps]);

    return (
        <div className="flex font-serif p-1 h-100">
            <Step currentIndex={currentIndex} />
            <Slider onChange={handleIndexChange} currentIndex={currentIndex} />

            <FormSlider
                currentIndex={currentIndex}
                handleNext={handleNext}
                handleComplete={handleComplete}
                handlePervious={handlePervious}
            />
        </div>
    );
}
