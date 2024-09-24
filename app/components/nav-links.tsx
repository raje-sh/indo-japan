'use client';
import React from 'react'
import { HeaderProps } from './header';
import Link from 'next/link';
import { AppLocale } from '../i18n';
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';
export const NavLinks: React.FC<{ navLinks: HeaderProps['navLinks'], locale: AppLocale, className?: string, linkClassName?: string }> = ({ navLinks, className, linkClassName }) => {
    const currentPath = usePathname();
    return (
        <ul className={cn(className)}>
            {navLinks.map((item) => (
                <li key={item.label}>
                    <Link href={item.url} className={cn('pb-1 hover:text-sky-400 dark:hover:text-sky-400',
                        { 'font-semibold border-b-2 border-sky-400 text-sky-400': currentPath === item.url }, linkClassName)}
                    >
                        {item.label}
                    </Link>
                </li>
            ))
            }
        </ul >
    );
}