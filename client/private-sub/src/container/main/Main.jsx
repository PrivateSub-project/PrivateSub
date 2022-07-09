import React from 'react';
import { Feature, VCard, SubscriptionList } from '../../components';
export default function Main({ VCards = false, Dashboard = false }) {
    if (VCards) return <VCard />;
    if (Dashboard) return <SubscriptionList />;
    return <Feature />;
}
