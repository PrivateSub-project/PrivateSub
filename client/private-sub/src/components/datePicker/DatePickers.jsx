import { ErrorMessage, useField } from 'formik';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
export default function DatePickers({ placeholder, ...props }) {
    const [field, meta, helpers] = useField(props);
    const [startDate, setStartDate] = useState(null);

    function subtractYears(numOfYears, date = new Date()) {
        date.setFullYear(date.getFullYear() - numOfYears);
        return date;
    }
    function getAge() {
        return subtractYears(18);
    }

    return (
        <>
            <div>
                <DatePicker
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id={field.name}
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date);
                        const formatDate = moment(date).format('L');
                        helpers.setValue(formatDate);
                    }}
                    isClearable
                    placeholderText={placeholder}
                    maxDate={getAge()}
                    showDisabledMonthNavigation
                    {...props}
                    autoComplete="off"
                />
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
