import React from 'react';
import LanguagePicker from './lang-picker';
import DarkModeToggle from './dark-mod-toggle';
import { NavLinks } from './nav-links';
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
                    <h1 className="text-xl font-semibold dark:text-white">{props.siteTitle}</h1>
                </div>
                <div className="flex-grow"></div>
                <nav className="hidden md:block">
                    <NavLinks navLinks={props.navLinks} className='flex space-x-4' />
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