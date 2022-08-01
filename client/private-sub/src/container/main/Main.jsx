import React from 'react';
import { Feature, VCard, SubscriptionList } from '../../components';
import { ContextSteps } from '../../utils';
export default function Main({ VCards = false, Dashboard = false }) {
    if (VCards)
        return (
            <ContextSteps>
                <VCard />
            </ContextSteps>
        );
    if (Dashboard) return <SubscriptionList />;
    return <Feature />;
}
