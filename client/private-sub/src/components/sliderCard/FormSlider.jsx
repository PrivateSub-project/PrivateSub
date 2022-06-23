import React from 'react';
import VCardForm from '../vCardForm/VCardForm';
import FormElement from './FormElement';

const formEls = [
    'Create virtual card',
    'Create a Funding Source',
    'Validate Your Funding Source',
];
const FormSlider = ({
    currentIndex,
    handleNext,
    handleComplete,
    handlePervious,
}) => {
    return (
        <div className="form-container flex-1 flex flex-col relative">
            <h3 className="text-2xl mx-3 my-3">{formEls[currentIndex]}</h3>
            {currentIndex == 0 && <VCardForm />}
            <div className="absolute right-0 bottom-0">
                {currentIndex > 0 && (
                    <FormElement
                        value={'Pervious'}
                        onClick={() => handlePervious(currentIndex)}
                    />
                )}
                {currentIndex === formEls.length - 1 ? (
                    <FormElement
                        value={'Complete'}
                        onClick={() => handleComplete(currentIndex)}
                    />
                ) : (
                    <FormElement
                        value={'Next'}
                        onClick={() => handleNext(currentIndex)}
                    />
                )}
            </div>
        </div>
    );
};

export default FormSlider;
