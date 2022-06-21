import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { TextField } from '../textField/TextField';
export default function VCardForm() {
    const [cvc, setCvc] = useState('');
    const handleCvcFocus = (e) => {
        e.target.name === 'cvc' ? setCvc('cvc') : setCvc('');
    };
    return (
        <Formik
            initialValues={{
                cvc: '',
                number: '',
                expiry: '',
                name: '',
            }}
            validationSchema={''}
            onSubmit={(values) => {
                console.log(values);
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
                    />
                    <Form>
                        <TextField
                            placeholder="number"
                            name="number"
                            onFocus={handleCvcFocus}
                        />
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
                    </Form>
                </div>
            )}
        </Formik>
    );
}
