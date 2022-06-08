import { Formik, Form } from 'formik';
import React from 'react';

import { Link } from 'react-router-dom';
import CheckBoxAgree from '../checkBoxAgree/CheckBoxAgree';
import DatePickers from '../datePicker/DatePickers';
import { TextField } from '../textField/TextField';

export default function RegisterForm() {
    return (
        <section className="h-full gradient-form  md:h-screen">
            <div className="container py-12 px-6 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="w-screen lg:w-10/12">
                        <div className="lg:flex lg:flex-wrap g-0">
                            <div className="block flex-1 bg-white shadow-lg rounded-3xl">
                                <div className="px-4">
                                    <div className="py-5 lg:p-1 lg:mx-6">
                                        <Formik
                                            initialValues={{
                                                firstName: '',
                                                lastName: '',
                                                email: '',
                                                password: '',
                                                confirmPassword: '',
                                                DOB: '',
                                                agreement: '',
                                            }}
                                            validationSchema={''}
                                            onSubmit={async (
                                                values,
                                                actions
                                            ) => {
                                                console.log(values);
                                                actions.setSubmitting(false);
                                            }}
                                        >
                                            {({ isSubmitting }) => (
                                                <div>
                                                    <div className="text-left align-middle">
                                                        <div className="flex flex-col lg:flex-row justify-between w-full items-start">
                                                            <h1 className="font-semibold mt-1 capitalize text-sm  md:text-md lg:text-xl">
                                                                Welcome to
                                                                &nbsp;
                                                                <span className="text-green-700 uppercase font-serif font-bold">
                                                                    PrivateSub
                                                                </span>
                                                            </h1>
                                                            <h1 className="font-thin mt-1 capitalize text-sm  md:text-sm lg:text-lg">
                                                                Have an account?
                                                                <br />
                                                                <Link to="/signin">
                                                                    Sign in
                                                                </Link>
                                                            </h1>
                                                        </div>
                                                        <h1 className="font-semibold mt-1 mb-12 pb-1 capitalize text-2xl  md:text-2xl lg:text-4xl">
                                                            Sign up
                                                        </h1>
                                                    </div>
                                                    <Form>
                                                        <div className="mb-4">
                                                            <TextField
                                                                placeholder="Email"
                                                                name="email"
                                                                type="email"
                                                            />
                                                        </div>
                                                        <div className="mb-4 flex justify-between">
                                                            <div className="flex-1 mr-1">
                                                                <TextField
                                                                    placeholder="First name"
                                                                    name="firstName"
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="flex-1 ml-1">
                                                                <TextField
                                                                    placeholder="Last name"
                                                                    name="lastName"
                                                                    type="text"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="mb-4">
                                                            <TextField
                                                                placeholder="Password"
                                                                name="password"
                                                                type="password"
                                                            />
                                                        </div>
                                                        <div className="mb-4">
                                                            <TextField
                                                                placeholder="Confirm Password"
                                                                name="confirmPassword"
                                                                type="password"
                                                            />
                                                        </div>
                                                        <div className="mb-4">
                                                            <DatePickers
                                                                label="Date of Birth"
                                                                placeholder="Date of Birth"
                                                                name="DOB"
                                                            />
                                                        </div>
                                                        <div className="mb-4">
                                                            <div className="flex items-center">
                                                                <CheckBoxAgree
                                                                    label="Yes I agree to the privateSub.com Terms of use "
                                                                    name="agreement"
                                                                    type="checkbox"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-end">
                                                            <div className="w-1/5">
                                                                <button
                                                                    className="flex justify-center px-6 py-2.5 text-white font-medium text-md leading-tight uppercase rounded shadow-md  focus:outline-none focus:text-black focus:ring-slate-200 focus:ring-1 active:shadow-lg transition duration-150 ease-in-out w-full"
                                                                    type="submit"
                                                                    data-mdb-ripple="true"
                                                                    data-mdb-ripple-color="light"
                                                                    style={{
                                                                        background:
                                                                            'linear-gradient( to right, #ee7724, #d8363a,#dd3675,#b44593)',
                                                                    }}
                                                                    disabled={
                                                                        isSubmitting
                                                                    }
                                                                >
                                                                    Register
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </div>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
