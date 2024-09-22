'use client'
import React, { useRef } from 'react';

interface HamburgerMenuProps {
    onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
    const hamburgerMenuRef = useRef<HTMLButtonElement>(null);
    const hamburgerTopRef = useRef<HTMLSpanElement>(null);
    const hamburgerMiddleRef = useRef<HTMLSpanElement>(null);
    const hamburgerBottomRef = useRef<HTMLSpanElement>(null);
    const handleClick = () => {
        hamburgerMenuRef.current?.classList.toggle('active');
        hamburgerTopRef.current?.classList.toggle('rotate-45');
        hamburgerTopRef.current?.classList.toggle('translate-y-2');
        hamburgerMiddleRef.current?.classList.toggle('opacity-0');
        hamburgerBottomRef.current?.classList.toggle('-rotate-45');
        hamburgerBottomRef.current?.classList.toggle('-translate-y-2');
        onClick();
    };

    return (
        <button
            ref={hamburgerMenuRef}
            id="hamburger-menu"
            className="md:hidden relative w-6 h-6 focus:outline-none"
            onClick={handleClick}
        >
            <span ref={hamburgerTopRef} className="block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out transform origin-center" id="hamburger-top"></span>
            <span ref={hamburgerMiddleRef} className="block w-6 h-0.5 bg-gray-600 mt-1.5 transition-opacity duration-300 ease-in-out" id="hamburger-middle"></span>
            <span ref={hamburgerBottomRef} className="block w-6 h-0.5 bg-gray-600 mt-1.5 transition-transform duration-300 ease-in-out transform origin-center" id="hamburger-bottom"></span>
        </button>
    );
};

export default HamburgerMenu;