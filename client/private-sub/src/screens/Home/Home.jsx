import React from 'react';

import './Home.css';
import { Footer, Header, Main } from '../../container';

export default function Home() {
    return (
        <div className="screen__body">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
