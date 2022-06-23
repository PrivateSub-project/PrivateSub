import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { contextCommon2 } from '../../utils';
import { TextField } from '../textField/TextField';
export default function VCardForm() {
    const [cvc, setCvc] = useState('');
    const [cvcNum, setCvcNum] = useState('');
    const [expiryNum, setExpiryNum] = useState('');
    const { setDataSteps, dataSteps } = useContext(contextCommon2);

    const handleCvcFocus = () => {
        setCvc('cvc');

        setTimeout(() => {
            setCvc('');
        }, 3000);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCvcNum(986);
        setExpiryNum(2304);
        console.log([name]);
        setDataSteps((values) => ({
            ...values,
            [name]: value,
            cvc: cvcNum,
            expiry: expiryNum,
        }));
        if (name == 'number') {
            handleCvcFocus();
        }
    };
    return (
        <Formik
            initialValues={{
                number: dataSteps?.number || '',
                name: dataSteps?.name || '',
                typeOfCard: dataSteps?.typeOfCard || '',
            }}
            validationSchema={''}
            onSubmit={(values) => {
                setDataSteps({ ...values });
            }}
        >
            {({ values }) => (
                <div className="flex">
                    <Cards
                        cvc={cvcNum}
                        expiry={expiryNum}
                        name={values.name}
                        number={values.number}
                        focused={cvc}
                        preview
                        issuer={values.typeOfCard}
                        acceptedCards={['visa', 'mastercard']}
                    />

                    <Form onChange={handleChange}>
                        <TextField name="typeOfCard" isSelection={true}>
                            <option value="" aria-disabled disabled>
                                Select a card issuer
                            </option>
                            <option value="MasterCard">MasterCard</option>
                            <option value="Visa">Visa</option>
                        </TextField>

                        <TextField isSelection={true} name="number">
                            <option value="" aria-disabled disabled>
                                Select a number
                            </option>
                            <option value="4363653674634645">
                                4363-6536-7463-4645
                            </option>
                            <option value="4374745334547645">
                                4374-7453-3454-7645
                            </option>
                        </TextField>
                        <TextField placeholder="name" name="name" />
                    </Form>
                </div>
            )}
        </Formik>
    );
}
