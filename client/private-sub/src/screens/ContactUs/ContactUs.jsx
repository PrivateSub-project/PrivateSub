import React from 'react';
import { Footer, Header } from '../../container';
import './ContactUs.css';

// import { Footer, Header, Main } from '../../container';
export default function About() {
    return (
        <div class="bg__vCard">
            <Header DashboardVCard={true} />
            <div className="about">
                <p>Phone: 000-000-0000</p>
                <p>Email: PrivateSub@test.com</p>
            </div>
            <Footer />
        </div>
    );
}
