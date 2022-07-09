import React from 'react';

import { Footer, Header, Main } from '../../container';
import './VirtualCard.css';
export default function VirtualCard() {
    return (
        <div className="bg__vCard">
            <Header DashboardVCard={true} />
            <Main VCards={true} />
            <Footer />
        </div>
    );
}
