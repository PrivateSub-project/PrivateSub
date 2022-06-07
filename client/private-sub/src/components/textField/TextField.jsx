import React from 'react';
import { ErrorMessage, useField } from 'formik';

import './TextField.css';
export const TextField = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-2 flex flex-col">
            <input
                id={field.name}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                {...field}
                {...props}
                autoComplete="off"
            />
            {meta.touched && meta.error && (
                <div
                    className="p-1 text-sm text-red-600 rounded-lg  dark:text-red-600"
                    role="alert"
                >
                    <ErrorMessage name={field.name} className="error" />
                </div>
            )}
        </div>
    );
};
