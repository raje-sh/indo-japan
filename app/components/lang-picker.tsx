'use client';
import React, { useEffect, useState } from 'react';
import useIsMobile from '../hooks/use-is-mobile';

const languageOptions = [
    { value: 'en', label: 'English', flagEmoji: "🇮🇳" },
    { value: 'ja', label: '日本語', flagEmoji: "🇯🇵" },
];
const LanguagePicker: React.FC = () => {
    const isMobile = useIsMobile();
    const [language, setLanguage] = useState<string>(() => {
        return 'en'; // Default to English
    });

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage); // Update localStorage
    };

    useEffect(() => {
        const storedLanguage = window.localStorage.getItem('language');
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    return (
        <select
            value={language}
            onChange={handleChange}
            className="appearance-none rounded-md pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-slate-900"
        >
            {languageOptions.map(option => (
                <option key={option.value} value={option.value}>
                    {[option.flagEmoji, isMobile ? '' : option.label].join(" ")}
                </option>
            ))}
        </select>
    );
};

export default LanguagePicker;