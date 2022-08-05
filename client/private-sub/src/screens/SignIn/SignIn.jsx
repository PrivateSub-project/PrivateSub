import React from 'react';
import { SignInForm } from '../../components';
import { Header } from '../../container';
import './SignIn.css';

export default function SignIn() {
    return (
        <div className="screen__body">
            <Header DashboardVCard={true} />
            <SignInForm />
        </div>
    );
}
