import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './screens/Dashboard/Dashboard';
import Home from './screens/Home/Home';
import NoPage from './screens/NoPage/NoPage';
import Register from './screens/Register/Register';
import SignIn from './screens/SignIn/SignIn';
import VirtualCard from './screens/VirtualCard/VirtualCard';
import { Context, ProtectedRoute } from './utils';

export default function App() {
    return (
        <div className="App">
            <Context>
                <Routes>
                    <Route index element={<Home />} />

                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/auth/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/auth/virtualcard"
                        element={
                            <ProtectedRoute>
                                <VirtualCard />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Context>
        </div>
    );
}
