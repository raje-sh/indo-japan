import React from 'react'
import Link from 'next/link';
import { getDocuments } from 'outstatic/server';
import { AppLocale, i18nData } from '../i18n';

const toHumanDate = (date: Date) => {
    return date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
export const BlogList: React.FC<{ locale: AppLocale, limit?: number }> = ({ locale, limit = 100 }) => {
    let blogs = getDocuments('blogs', ['title', 'description', 'locale', 'slug', 'publishedAt']).filter(it => it.locale === locale)
        .map(it => ({ ...it, publishedAt: new Date(it.publishedAt) }));
    blogs = blogs.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    return (
        <div className="rounded-lg p-6">
            <div className="flex flex-col items-start">
                <div className="mb-6 md:mb-0 text-center md:text-left font-extrabold dark:text-white">
                    <h2 className='text-xl mb-2 uppercase'>{i18nData[locale].recent_blogs}</h2>
                </div>
                <div className="flex flex-col justify-center items-center w-full">
                    {!blogs.length && (<div className="bg-orange-100 borde text-orange-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">No blogs found!</span>
                    </div>)}
                    {blogs.slice(0, limit).map((it, i) => <div key={i} className='w-full shadow-md rounded-lg p-4 m-2'>
                        <div className="flex flex-row">
                            <span className=''>
                                <Link href={`/${locale}/blogs/${it.slug}`} className='text-lg font-bold'>{it.title}</Link>
                            </span>
                            <span className="flex-grow"></span>
                            <span className="text-gray-500 text-sm">
                                {toHumanDate(it.publishedAt)}
                            </span>
                        </div>
                        <p className='text-gray-600'>{it.description}</p>
                    </div>)}
                </div>
            </div>
        </div>
    );
}