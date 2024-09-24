'use client'
import React from 'react';
import LanguagePicker from './lang-picker';
import DarkModeToggle from './dark-mod-toggle';
import { NavLinks } from './nav-links';
import Image from 'next/image';
import { useRef } from 'react';
import HamburgerMenu from './hamburger-btn';
import Link from 'next/link';
import { AppLocale } from '../i18n';

export interface HeaderProps {
    logoUrl: string;
    siteTitle: string;
    navLinks: { url: string, label: string }[];
    lang: AppLocale;
}

const Header: React.FC<HeaderProps> = (props) => {
    const mobileMenuRef = useRef<HTMLButtonElement>(null);
    return (
        <header className="shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href={`/${props.lang}`} className='flex flex-row'>
                        <Image src={props.logoUrl} alt={props.siteTitle} height={32} width={32} className="h-8 w-auto mr-3" />
                        <h1 className="text-xl font-semibold dark:text-white">{props.siteTitle}</h1>
                    </Link>
                </div>
                <div className="flex-grow"></div>
                <nav className="hidden md:block">
                    <NavLinks navLinks={props.navLinks} locale={props.lang} className='flex space-x-4' />
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-4 pl-4 gap-x-2 dark:border-slate-800">
                    <DarkModeToggle />
                    <LanguagePicker locale={props.lang} />
                    <HamburgerMenu onClick={() => {
                        mobileMenuRef.current?.classList.toggle('hidden')
                    }} />
                </div>
            </div>
            <nav ref={mobileMenuRef} className="hidden md:hidden overflow-hidden transition-all duration-300 ease-in-out">
                <NavLinks locale={props.lang} navLinks={props.navLinks} className='flex flex-col space-y-2 p-4 md:p-0' linkClassName='block py-2' />
            </nav>
        </header >
    );
};

export default Header;