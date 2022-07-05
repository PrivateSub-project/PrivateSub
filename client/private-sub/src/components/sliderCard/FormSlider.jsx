import React from 'react';
import VCardForm from '../vCardForm/VCardForm';
import VCardFunding from '../VCardFunding/VCardFunding';
import VCardSummary from '../VCardSummary/VCardSummary';
import FormElement from './FormElement';
import './SliderCard.css';
const formEls = [
    'Create virtual card',
    'Create a Funding Source',
    'Summary of Your Funding Source',
];
const FormSlider = ({
    currentIndex,
    handleNext,
    handleComplete,
    handlePervious,
}) => {
    return (
        <div
            className={`form-container flex-1 flex flex-col relative ${
                currentIndex == 1 && 'bg__money'
            }`}
        >
            <h3 className="text-2xl mx-3 my-3">{formEls[currentIndex]}</h3>
            {currentIndex == 0 && <VCardForm />}
            {currentIndex == 1 && <VCardFunding />}
            {currentIndex == 2 && <VCardSummary />}
            <div className="absolute right-0 bottom-0">
                {currentIndex > 0 && (
                    <FormElement
                        className="z-10"
                        value={'Pervious'}
                        onClick={() => handlePervious(currentIndex)}
                    />
                )}

                {currentIndex === formEls.length - 1 ? (
                    <FormElement
                        className="z-10"
                        value={'Complete'}
                        onClick={() => handleComplete(currentIndex)}
                    />
                ) : (
                    <FormElement
                        className="z-10"
                        value={'Next'}
                        onClick={() => handleNext(currentIndex)}
                    />
                )}
            </div>
        </div>
    );
};

export default FormSlider;
