import { ErrorMessage, useField } from 'formik';
import React from 'react';

export default function CheckBoxAgree({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <>
            <div className="flex items-center justify-between w-2/5">
                <input {...field} {...props} autoComplete="off" />
                <label htmlFor={field.name}>{label}</label>
            </div>

            {meta.touched && meta.error && (
                <div
                    className="p-1 text-sm text-red-600 rounded-lg  dark:text-red-600"
                    role="alert"
                >
                    <ErrorMessage name={field.name} className="error" />
                </div>
            )}
        </>
    );
}
