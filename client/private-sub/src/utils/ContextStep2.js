import React, { useState } from 'react';
import ContextCommon4 from './contextCommon4';
export default function ContextSteps2({ children }) {
    const [issue, setIssue] = useState(false);
    return (
        <ContextCommon4.Provider
            value={{
                setIssue,
                issue,
            }}
        >
            {children}
        </ContextCommon4.Provider>
    );
}
