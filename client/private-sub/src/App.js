import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './screens/Home/Home';
import NoPage from './screens/NoPage/NoPage';
import SignIn from './screens/SignIn/SignIn';

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route index element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
}
