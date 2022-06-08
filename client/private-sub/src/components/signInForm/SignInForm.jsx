import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '../textField/TextField';
import { yupValidate } from '../../utils';
import './SignInForm.css';
import CheckBox from '../checkBox/CheckBox';
import PostUserLogin from '../../API/PostUserLogin';
import { useNavigate } from 'react-router-dom';
export default function SignInForm() {
    const validate = Yup.object(yupValidate.objYupWithLogin);
    const navigate = useNavigate();
    return (
        <Container fluid>
            <Row>
                <Col sm={12} md={5} className="z-10">
                    <section className="h-full gradient-form  md:h-screen">
                        <div className="container py-12 px-6 h-full">
                            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                                <div className="xl:w-10/12">
                                    <div className="lg:flex lg:flex-wrap g-0">
                                        <div className="block bg-white shadow-lg rounded-lg">
                                            <div className="px-4">
                                                <div className="py-5 lg:p-12 lg:mx-6">
                                                    <Formik
                                                        initialValues={{
                                                            email: '',
                                                            password: '',
                                                        }}
                                                        validationSchema={
                                                            validate
                                                        }
                                                        onSubmit={async (
                                                            values,
                                                            actions
                                                        ) => {
                                                            console.log(values);
                                                            const userName =
                                                                values.email;
                                                            const { password } =
                                                                values;
                                                            PostUserLogin({
                                                                userName,
                                                                password,
                                                            })
                                                                .then(
                                                                    (value) => {
                                                                        navigate(
                                                                            '/'
                                                                        );

                                                                        console.log(
                                                                            value
                                                                        );
                                                                    }
                                                                )
                                                                .catch((err) =>
                                                                    console.log(
                                                                        err
                                                                    )
                                                                );
                                                            actions.setSubmitting(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        {({ isSubmitting }) => (
                                                            <div>
                                                                <div className="text-center align-middle">
                                                                    <h1 className="font-semibold mt-1 mb-12 pb-1 capitalize text-2xl  md:text-2xl lg:text-4xl">
                                                                        Login to
                                                                        your
                                                                        account
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
                                                                    <div className="mb-4">
                                                                        <TextField
                                                                            placeholder="Password"
                                                                            name="password"
                                                                            type="password"
                                                                        />
                                                                    </div>

                                                                    <div className="mb-4">
                                                                        <div className="flex justify-between items-center">
                                                                            <CheckBox
                                                                                label="Remember Me"
                                                                                name="rememberDevice"
                                                                                type="checkbox"
                                                                            />
                                                                            <a
                                                                                className="text-xs"
                                                                                href="#"
                                                                            >
                                                                                Forgot
                                                                                Password?
                                                                            </a>
                                                                        </div>
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
                                                                            disabled={
                                                                                isSubmitting
                                                                            }
                                                                        >
                                                                            Login
                                                                        </button>
                                                                        <button
                                                                            className="inline-block px-6 py-2.5 text-black font-medium text-md leading-tight uppercase rounded shadow-md active:ring-1 active:shadow-lg active:bg-black  transition duration-150 ease-in-out w-full mb-3"
                                                                            type="reset"
                                                                            data-mdb-ripple="true"
                                                                            data-mdb-ripple-color="light"
                                                                        >
                                                                            <span className="active:text-white w-full">
                                                                                Reset
                                                                            </span>
                                                                        </button>
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
                </Col>
                <Col className="hidden md:block" sm={12} md={7}>
                    <div className="signIn__url h-screen fixed w-full"></div>
                </Col>
                <div className="bk__transition hidden md:block"></div>
            </Row>
        </Container>
    );
}
