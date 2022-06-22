import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { getCredentialAuth, yupValidate } from '../../utils';
import { TextField } from '../textField/TextField';
const validate = Yup.object(yupValidate.objYupWithCodeNum);
const navigate = useNavigate();
export default function OTPCode({ objectCodeID, objectCodeFunction }) {
    const [error, setError] = useState();
    return (
        <>
            <Formik
                initialValues={{
                    code: '',
                }}
                validationSchema={validate}
                onSubmit={async (values, actions) => {
                    if (values)
                        try {
                            await objectCodeFunction(parseInt(values.code));
                            const credential = await getCredentialAuth(
                                objectCodeID,
                                parseInt(values.code)
                            );
                            console.log(credential);
                            navigate('/dashboard');
                        } catch (err) {
                            setError(err);
                        }

                    actions.setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <div>
                        <Form>
                            <div className="mb-4">
                                <TextField placeholder="code" name="code" />
                            </div>

                            <div className="mb-4">
                                <button
                                    className="inline-block px-6 py-2.5 text-white font-medium text-md leading-tight uppercase rounded shadow-md  focus:outline-none focus:text-black focus:ring-slate-200 focus:ring-1 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                    type="submit"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    style={{
                                        background:
                                            'linear-gradient( to right, #ee7724, #d8363a,#dd3675,#b44593)',
                                    }}
                                    disabled={isSubmitting}
                                >
                                    validate
                                </button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
            {error && <Alert variant="danger">{error}</Alert>}
        </>
    );
}
