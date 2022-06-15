import React, { useEffect, useState } from 'react';
import CreateContext from './contextCommon';
import setUpRecaptcha, { stateAuthChanged } from './code.auth';
export default function Context({ children }) {
    const [user, setUser] = useState(null);
    const [userPhone, setUserPhone] = useState(null);
    useEffect(() => {
        const { onAuthStateChange, currentUserData } = stateAuthChanged();
        setUserPhone(currentUserData);
        return () => {
            onAuthStateChange();
        };
    }, []);

    return (
        <CreateContext.Provider
            value={{ user, setUser, setUpRecaptcha, userPhone }}
        >
            {children}
        </CreateContext.Provider>
    );
}
