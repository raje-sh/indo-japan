'use client';
import React from 'react'
import { HeaderProps } from './header';
import clsx from 'clsx';
import Link from 'next/link';
export const NavLinks: React.FC<{ navLinks: HeaderProps['navLinks'], className?: string }> = ({ navLinks, className }) => {
    const [links, setLinks] = React.useState(navLinks);
    React.useEffect(() => {
        setLinks(links => {
            if (!links.filter(it => it.isActive).length) {
                for (const link of links) {
                    if (['/', '#', ''].includes(link.url.trim())) {
                        link.isActive = true;
                        break;
                    }
                }
            }
            return links;
        });
    }, [])
    return (
        <ul className={clsx(className)}>
            {links.map((item) => (
                <li key={item.label}>
                    <Link href={item.url} className={clsx('pb-1 hover:text-sky-400 dark:hover:text-sky-400',
                        { 'font-semibold border-b-2 border-sky-400 text-sky-400': item.isActive })}>
                        {item.label}
                    </Link>
                </li>
            ))
            }
        </ul >
    );
}