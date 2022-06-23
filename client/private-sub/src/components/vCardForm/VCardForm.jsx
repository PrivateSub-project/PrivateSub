import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { contextCommon2 } from '../../utils';
import { TextField } from '../textField/TextField';
export default function VCardForm() {
    const [cvc, setCvc] = useState('');
    const { setDataSteps, dataSteps } = useContext(contextCommon2);
    const handleCvcFocus = (e) => {
        e.target.name === 'cvc' ? setCvc('cvc') : setCvc('');
    };
    const handlechange = (e) => {
        const { name, value } = e.target;
        setDataSteps((values) => ({ ...values, [name]: value }));
    };
    return (
        <Formik
            initialValues={{
                cvc: dataSteps?.cvc,
                number: dataSteps?.number,
                expiry: dataSteps?.expiry,
                name: dataSteps?.name,
                typeOfCard: dataSteps?.typeOfCard,
            }}
            validationSchema={''}
            onSubmit={(values) => {
                setDataSteps({ ...values });
            }}
        >
            {({ values }) => (
                <div className="flex">
                    <Cards
                        cvc={values.cvc}
                        expiry={values.expiry}
                        name={values.name}
                        number={values.number}
                        focused={cvc}
                        preview
                        issuer={values.typeOfCard}
                        acceptedCards={['visa', 'mastercard']}
                    />

                    <Form onChange={handlechange}>
                        <TextField
                            name="typeOfCard"
                            onFocus={handleCvcFocus}
                            isSelection={true}
                        >
                            <option value="" disabled>
                                Select a card issuer
                            </option>
                            <option value="MasterCard">MasterCard</option>
                            <option value="Visa">Visa</option>
                        </TextField>

                        <TextField
                            placeholder="number"
                            name="number"
                            onFocus={handleCvcFocus}
                        />
                        {/* {setDataSteps(values.name)} */}
                        <TextField
                            placeholder="expiry"
                            name="expiry"
                            onFocus={handleCvcFocus}
                        />
                        <TextField
                            placeholder="name"
                            name="name"
                            onFocus={handleCvcFocus}
                        />
                        <TextField
                            placeholder="cvc"
                            name="cvc"
                            onFocus={handleCvcFocus}
                        />
                        <button type="submit">ok</button>
                    </Form>
                </div>
            )}
        </Formik>
    );
}
