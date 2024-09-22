import React from 'react';
import LanguagePicker from './lang-picker';
import DarkModeToggle from './dark-mod-toggle';
export interface HeaderProps {
    logoUrl: string;
    siteTitle: string;
    navLinks: { url: string, label: string, isActive?: boolean }[];
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className="shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={props.logoUrl} alt={props.siteTitle} className="h-8 w-auto mr-3" />
                    <h1 className="text-xl font-semibold text-slate-900 dark:text-white">{props.siteTitle}</h1>
                </div>
                <div className="flex-grow"></div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        {props.navLinks.map((item, index) => (
                            <li key={item.label}><a href={item.url} className={`pb-1  hover:text-sky-400 dark:hover:text-sky-400 ${item.isActive ? 'font-semibold border-b-2 border-sky-400 text-sky-400' : 'text-slate-900 dark:text-slate-400'}`}>{item.label}</a></li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-4 pl-4 gap-x-2 dark:border-slate-800">
                    <DarkModeToggle />
                    <LanguagePicker />
                </div>
            </div>
        </header >
    );
};

export default Header;