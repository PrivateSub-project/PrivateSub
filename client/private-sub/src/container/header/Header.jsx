import React from 'react';
import { Navbar, Title } from '../../components';

export default function Header({ DashboardVCard = false }) {
    return (
        <>
            <Navbar />
            {!DashboardVCard && <Title />}
        </>
    );
}
