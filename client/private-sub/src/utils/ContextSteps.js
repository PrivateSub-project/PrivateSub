import React, { useState } from 'react';
import contextCommon2 from './contextCommon2';
export default function ContextSteps({ children }) {
    const [dataSteps, setDataSteps] = useState({});
    const [dataCardNum, setDataCardNum] = useState(null);
    return (
        <contextCommon2.Provider
            value={{ dataSteps, setDataSteps, dataCardNum, setDataCardNum }}
        >
            {children}
        </contextCommon2.Provider>
    );
}
