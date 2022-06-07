import { useField } from 'formik';
import React from 'react';

export default function CheckBoxAgree({ label, ...props }) {
    const [field] = useField(props);
    return (
        <div className="flex items-center justify-between w-2/5">
            <input {...field} {...props} autoComplete="off" />
            <label htmlFor={field.name}>{label}</label>
        </div>
    );
}
