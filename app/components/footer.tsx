import React from 'react';
import LanguagePicker from './lang-picker';
import DarkModeToggle from './dark-mod-toggle';
import { HeaderProps } from './header';
import { NavLinks } from './nav-links';
import Image from 'next/image';

const Footer: React.FC<HeaderProps> = (props) => {
    return (
        <footer>
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Image src={props.logoUrl} alt={props.siteTitle} height={32} width={32} className="h-8 w-auto mr-3" />
                        <h1 className="text-xl font-semibold dark:text-white">{props.siteTitle}</h1>
                    </div>
                    <nav className="mb-4 md:mb-0">
                        <NavLinks navLinks={props.navLinks} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4" />
                    </nav>
                    <div className="relative flex gap-2">
                        <DarkModeToggle />
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