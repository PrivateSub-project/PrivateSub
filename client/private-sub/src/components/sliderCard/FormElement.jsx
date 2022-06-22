import React from 'react';
const FormElement = ({ onClick, value }) => {
    return (
        <button
            className="px-4 py-2 mr-6 bg-orange-600 hover:text-black"
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default FormElement;
