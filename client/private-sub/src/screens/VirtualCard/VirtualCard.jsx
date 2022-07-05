import React from 'react';

import { Footer, Header, Main } from '../../container';
import './VirtualCard.css';
export default function VirtualCard() {
    return (
        <div className="bg__vCard">
            <Header VCard={true} />
            <Main VCards={true} />
            <Footer />
        </div>
    );
}
