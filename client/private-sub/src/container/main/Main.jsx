import React from 'react';
import { Feature, VCard, SubscriptionList } from '../../components';
import { ContextSteps, ContextSteps2 } from '../../utils';
export default function Main({ VCards = false, Dashboard = false }) {
    if (VCards)
        return (
            <ContextSteps>
                <VCard />
            </ContextSteps>
        );
    if (Dashboard)
        return (
            <ContextSteps2>
                <SubscriptionList />
            </ContextSteps2>
        );
    return <Feature />;
}
