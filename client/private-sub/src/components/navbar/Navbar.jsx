import React, { useMemo, useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { decodeJWT } from '../../utils';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [user, setUser] = useState(localStorage.getItem('token'));
    const handleClick = () => setNav(!nav);
    let decodeUser = null;
    let arrayString = [];

    if (user) {
        decodeUser = useMemo(() => decodeJWT(user), [user]);
        arrayString = decodeUser.userName.split('@')[0];
    }
    console.log(user);
    const handleLogout = () => {
        if (user) {
            signOut(auth).then(() => {
                console.log('You are unauthorized');
                setUser(localStorage.clear());
                window.location.reload(false);
            });
        }
    };
    return (
        <React.Fragment>
            <div className="w-screen h-[80px] z-10 bg-transparent text-white drop-shadow-lg">
                <div className="px-2 flex justify-between items-center w-full h-full">
                    <div className="flex items-center">
                        <img
                            className="p-1 bg-white border rounded-lg w-16"
                            src="https://avatars.githubusercontent.com/u/104939323?s=400&u=f8c7cf359d55bf438e89317720f26b03abcfee05&v=4"
                            alt="logo"
                        />
                        <h1 className="text-3xl font-bold mx-5 sm:text-4xl">
                            {decodeUser?.userName ? (
                                <>Hello {arrayString}</>
                            ) : (
                                <>PrivateSub</>
                            )}
                        </h1>
                    </div>
                    <div className="hidden md:flex pr-4 mr-6">
                        <ul className="hidden md:flex items-center">
                            <Link to="/auth/dashboard">
                                <li>Dashboard</li>
                            </Link>
                            <Link to="/auth/virtualcard">
                                <li>Virtual Card</li>
                            </Link>
                            <li>Contact Us</li>
                            <li>About</li>
                            <Link
                                to={user ? '/' : 'signin'}
                                className="cursor-pointer"
                                onClick={handleLogout}
                            >
                                <li className="flex border-l-2 border-zinc-500 m-auto h-5">
                                    <span className="self-center">
                                        {user ? 'logout' : 'Sign In'}
                                    </span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div
                        className="md:hidden cursor-pointer"
                        onClick={handleClick}
                    >
                        {!nav ? (
                            <MenuIcon className="w-10 bg-transparent text-white" />
                        ) : (
                            <XIcon className="w-10 bg-transparent text-white" />
                        )}
                    </div>
                </div>
                <div
                    className={
                        !nav
                            ? 'hidden'
                            : 'absolute w-full px-8 z-10 backdrop-blur-lg bg-opacity-80 bg-gray-800'
                    }
                >
                    <ul>
                        <li className="border-b-2 border-zinc-300 w-full">
                            Dashboard
                        </li>
                        <li className="border-b-2 border-zinc-300 w-full">
                            Virtual Card
                        </li>
                        <li className="border-b-2 border-zinc-300 w-full">
                            Contact Us
                        </li>
                        <li className="border-b-2 border-zinc-300 w-full">
                            About
                        </li>

                        <div className="flex flex-col my-4 signIn__shadow transition-colors">
                            <Link
                                to={user ? '/' : 'signin'}
                                className="cursor-pointer"
                            >
                                <button className="px-8 py-2">
                                    {user ? 'logout' : 'Sign In'}
                                </button>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}
