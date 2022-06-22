import React from 'react';
import { Feature, VCard } from '../../components';
export default function Main({ VCards = false }) {
    if (VCards) return <VCard />;
    return <Feature />;
}
