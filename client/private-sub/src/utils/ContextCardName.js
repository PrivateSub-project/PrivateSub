import React, { useState } from 'react';
import contextCommon3 from './contextCommon2';
export default function ContextCardName({ children }) {
    const [nameAPI, setNameAPI] = useState('');
    return (
        <contextCommon3.Provider value={{ nameAPI, setNameAPI }}>
            {children}
        </contextCommon3.Provider>
    );
}
