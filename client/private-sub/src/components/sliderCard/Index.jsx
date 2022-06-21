import { useState } from 'react';
import Slider from './SliderCard';
import Step from './Step';
import FormSlider from './FormSlider';
import './SliderCard.css';
export default function index() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleIndexChange = (index) => {
        setCurrentIndex(index);
    };

    const handleNext = (currentIndex) => {
        setCurrentIndex(currentIndex + 1);
    };
    const handlePervious = (currentIndex) => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleComplete = () => {};

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
