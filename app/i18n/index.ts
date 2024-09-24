export const locales = ['en', 'ja'] as const;
export const defaultLocale = 'en'

export type AppLocale = typeof locales[number];

type LocaleData = {
    connect_with_us: string;
    recent_blogs: string;
    home: string;
    blogs: string;
}
export const i18nData: Record<AppLocale, LocaleData> = {
    en: {
        connect_with_us: 'CONNECT WITH',
        recent_blogs: 'Recent Blogs',
        home: 'Home',
        blogs: 'Blogs',
    },
    ja: {
        connect_with_us: 'CONNECT WITH',
        home: 'ホーム',
        blogs: 'ブログ',
        recent_blogs: '最新のブログ',
    },
}