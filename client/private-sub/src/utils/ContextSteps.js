import React, { useState } from 'react';
import contextCommon2 from './contextCommon2';
export default function ContextSteps({ children }) {
    const [dataSteps, setDataSteps] = useState({});
    const [dataCardNum, setDataCardNum] = useState(null);
    const [Final, setFinal] = useState(false);
    return (
        <contextCommon2.Provider
            value={{
                dataSteps,
                setDataSteps,
                dataCardNum,
                setDataCardNum,
                setFinal,
                Final,
            }}
        >
            {children}
        </contextCommon2.Provider>
    );
}
