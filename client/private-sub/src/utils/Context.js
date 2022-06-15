import React, { useState } from 'react';
import CreateContext from './contextCommon';
import setUpRecaptcha from './code.auth';
export default function Context({ children }) {
    const [user, setUser] = useState(null);
    return (
        <CreateContext.Provider value={{ user, setUser, setUpRecaptcha }}>
            {children}
        </CreateContext.Provider>
    );
}
