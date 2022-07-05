import * as Yup from 'yup';
const objYupWithRegister = {
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .max(15, 'Must be 15 characters or less')
        .required('First name Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last name Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    agreement: Yup.boolean().oneOf([true], 'Please accept agreement'),
    DOB: Yup.date().required(),
};
const objYupWithLogin = {
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
};

const objYupWithCodeNum = {
    code: Yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .required('Please enter code')
        .min(6, 'Must be exactly 6 digits')
        .max(6, 'Must be exactly 6 digits'),
};

export default { objYupWithRegister, objYupWithLogin, objYupWithCodeNum };
