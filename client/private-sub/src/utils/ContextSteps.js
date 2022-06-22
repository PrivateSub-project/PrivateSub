import React, { useState } from 'react';
import contextCommon2 from './contextCommon2';
export default function ContextSteps({ children }) {
    const [dataSteps, setDataSteps] = useState({});

    return (
        <contextCommon2.Provider value={{ dataSteps, setDataSteps }}>
            {children}
        </contextCommon2.Provider>
    );
}
