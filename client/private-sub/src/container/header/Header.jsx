import React from 'react';
import { Navbar, Title } from '../../components';

export default function Header({ VCard = false }) {
    return (
        <>
            <Navbar />
            {!VCard && <Title />}
        </>
    );
}
