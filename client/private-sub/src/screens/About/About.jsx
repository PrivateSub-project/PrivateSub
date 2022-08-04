import React from 'react';
import { Footer, Header } from '../../container';
import './About.css';

// import { Footer, Header, Main } from '../../container';
export default function About() {
    return (
        <div class="bg__vCard">
            <Header DashboardVCard={true} />
            <div className="about">
                <p>
                    Hi! <br /> We are PrivateSub team and all about security,
                    security, and security!
                    <br />
                    . . . <br />
                    I know it's very complicated and even dangerous to make safe
                    transactions online these days and also easy to forget what
                    I even subscribe since we have so many to handle. <br />{' '}
                    Don't worry, we got you! <br />
                </p>
            </div>
            <Footer />
        </div>
    );
}
