import React, { useEffect, useState } from 'react';
import CreateContext from './contextCommon';
import setUpRecaptcha from './code.auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
export default function Context({ children }) {
    const [user, setUser] = useState(null);
    const [userPhone, setUserPhone] = useState();
    useEffect(() => {
        const onAuthStateChange = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth', currentUser?.accessToken);
            setUserPhone(currentUser?.accessToken);
        });
        return () => {
            onAuthStateChange();
        };
    }, []);

    return (
        <CreateContext.Provider
            value={{ user, setUser, setUpRecaptcha, userPhone, setUserPhone }}
        >
            {children}
        </CreateContext.Provider>
    );
}
