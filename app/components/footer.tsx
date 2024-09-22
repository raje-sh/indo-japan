import React from 'react';
import LanguagePicker from './lang-picker';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag-of-India.svg.png" alt="Indian Flag" className="h-6 w-auto mr-3" />
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">My Website</h2>
                    </div>
                    <nav className="mb-4 md:mb-0">
                        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            <li><a href="#" className="hover:text-sky-500 dark:hover:text-sky-400">Home</a></li>
                            <li><a href="#" className="hover:text-sky-500 dark:hover:text-sky-400">About</a></li>
                            <li><a href="#" className="hover:text-sky-500 dark:hover:text-sky-400">Services</a></li>
                            <li><a href="#" className="hover:text-sky-500 dark:hover:text-sky-400">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="relative flex gap-2">
                        <button id="darkModeToggle" className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400">
                            <span className="dark:hidden">
                                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-sky-400/20 stroke-sky-500"></path>
                                </svg>
                            </span>
                            <span className="hidden dark:inline">
                                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-sky-400/20"></path>
                                </svg>
                            </span>
                        </button>
                        <LanguagePicker />
                    </div>
                </div>
                <div className="mt-6 text-center text-sm text-gray-400 dark:text-gray-500">
                    &copy; 2024 My Website. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;