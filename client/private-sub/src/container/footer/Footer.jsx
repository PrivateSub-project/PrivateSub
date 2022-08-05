import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faGithub,
    faMicrosoft,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    return (
        <footer className="p-4 bg-slate-200 sm:p-6 dark:bg-gray-900">
            <div className="text-center mb-28">
                <h1 className="gradient__text text-2xl font-bold mb-2">
                    Do you want more information about us ?
                </h1>
                <button className="p-3 bg-transparent">About US</button>
            </div>

            <div className="gradient__border md:flex md:justify-between relative">
                <div className="mb-6 md:mb-0">
                    <a
                        href="https://privatesub-project.web.app/"
                        className="flex items-center"
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/104939323?s=400&u=f8c7cf359d55bf438e89317720f26b03abcfee05&v=4"
                            className="mr-3 h-8"
                            alt="FlowBite Logo"
                        />
                        <span className="self-center text-2xl font-semibold  dark:text-white">
                            PrivateSub
                        </span>
                    </a>
                    <span className="self-center text-sm font-normal  dark:text-white">
                        Virtual credit card
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                            Resources
                        </h2>
                        <span className="flex flex-col text-white">
                            <a href="#" className="hover:underline mb-4">
                                React.js
                            </a>

                            <a href="#" className="hover:underline">
                                Tailwind CSS
                            </a>
                        </span>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                            Follow us
                        </h2>
                        <span className="flex flex-col text-white">
                            <a href="#" className="hover:underline mb-4">
                                Instagram
                            </a>

                            <a href="#" className="hover:underline">
                                Github
                            </a>
                        </span>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                            Legal
                        </h2>
                        <span className="flex flex-col text-white">
                            <a href="#" className="hover:underline mb-4">
                                Privacy Policy
                            </a>

                            <a href="#" className="hover:underline">
                                Terms &amp; Conditions
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2022{' '}
                    <a href="https://privatesub-project.web.app/" className="hover:underline">
                        PrivateSub™
                    </a>
                    . All Rights Reserved.
                </span>
                <div className="flex space-x-6 sm:justify-center sm:mt-0">
                    <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <FontAwesomeIcon icon={faMicrosoft} size="2x" />
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    ></a>
                </div>
            </div>
        </footer>
    );
}
