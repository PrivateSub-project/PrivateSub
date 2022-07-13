import React from 'react';
import './Dashboard.css';
import { Footer, Header, Main } from '../../container';
export default function Dashboard() {
    return (
        <div className="bg__vCard">
            <Header DashboardVCard={true} />
            <Main Dashboard={true} />
            <Footer />
        </div>
    );
}
