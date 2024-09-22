import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag-of-India.svg.png" alt="Indian Flag" className="h-8 w-auto mr-3" />
                    <h1 className="text-xl font-semibold text-slate-900 dark:text-white">My Website</h1>
                </div>
                <div className="flex-grow"></div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        {['Home', 'About', 'Services', 'Contact'].map((item) => (
                            <li key={item}><a href="#" className={`pb-1 hover:text-sky-500 dark:hover:text-sky-400 ${item === 'Home' ? 'font-semibold border-b-2 border-sky-400 text-sky-400' : ''}`}>{item}</a></li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-4 pl-4 gap-x-2 dark:border-slate-800">
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
                    <select className="language-select appearance-none rounded-md pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm">
                        <option value="en">🇮🇳 English</option>
                        <option value="ja">🇯🇵 日本語</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;