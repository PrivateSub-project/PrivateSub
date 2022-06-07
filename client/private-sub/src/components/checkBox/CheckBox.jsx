import { useField } from 'formik';
import React from 'react';

export default function CheckBox({ label, ...props }) {
    const [field] = useField(props);
    return (
        <div className="flex items-center justify-between w-24">
            <label htmlFor={field.name}>{label}</label>
            <input {...field} {...props} autoComplete="off" />
        </div>
    );
}
