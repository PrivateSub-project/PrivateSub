import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import { contextCommon2 } from '../../utils';
import { TextField } from '../textField/TextField';
import './VCardFunding.css';
export default function VCardFunding() {
    const { setDataSteps, dataSteps } = useContext(contextCommon2);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataSteps((values) => ({ ...values, [name]: value }));
    };
    return (
        <Formik
            initialValues={{
                title: dataSteps?.title || '',
                amount: dataSteps?.amount || '',
            }}
            validationSchema={''}
            onSubmit={(values) => {
                setDataSteps({ ...values });
            }}
        >
            {() => (
                <div className="flex">
                    <Form onChange={handleChange}>
                        <div className="w-full">
                            <div className="flex items-baseline">
                                <FontAwesomeIcon
                                    icon={faMoneyBill}
                                    size={'lg'}
                                    className="mx-4"
                                />
                                <div className="textDollar z-10">
                                    <TextField
                                        placeholder="Add funding amount"
                                        name="amount"
                                        type="currency"
                                    />
                                </div>
                            </div>
                            <div className="flex items-baseline">
                                <FontAwesomeIcon
                                    icon={faAddressCard}
                                    size={'lg'}
                                    className="mx-4"
                                />
                                <div className="z-10">
                                    <TextField
                                        placeholder="Add title state"
                                        name="title"
                                    />
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
}
