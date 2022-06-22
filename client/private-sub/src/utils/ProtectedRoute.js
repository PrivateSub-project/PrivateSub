import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CreateContext from './contextCommon';
export default function ProtectedRoute({ children }) {
    const { userPhone } = useContext(CreateContext);
    console.log('Check user in Private: ', userPhone);
    if (!userPhone) return <Navigate to="/" />;
    return children;
}
