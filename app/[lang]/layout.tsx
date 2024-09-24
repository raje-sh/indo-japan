import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Footer from "@/components/footer";
import Header, { HeaderProps } from "@/components/header";
import React from "react";
import { AppLocale, defaultLocale, i18nData } from "../i18n";
import { getDocumentBySlug } from "outstatic/server";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IndoJapan Events",
  description: "IndoJapan Events",
};

const getNavLinks = (locale: AppLocale) => {
  return [{ url: '', label: i18nData[locale].home }, { url: '/blogs', label: i18nData[locale].blogs }]
    .map(it => ({ ...it, url: `/${locale}${it.url}` }));
}
export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {
    lang: string;
  }
}>) {
  const lang = (params.lang ?? defaultLocale) as AppLocale;
  const siteInfo = getDocumentBySlug('siteinfo', lang, ['title', 'description', 'coverImage']);
  const headerProps: HeaderProps = {
    logoUrl: siteInfo?.coverImage ?? '',
    siteTitle: siteInfo?.title ?? '',
    navLinks: getNavLinks(lang),
    lang: lang,
  }
  return (
    <html lang={lang}>
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`,
          "flex flex-col min-h-screen text-slate-900 dark:text-slate-400 bg-white dark:bg-slate-900"
        )}
      >
        <Header {...headerProps} lang={lang} />
        {children}
        <Footer {...headerProps} lang={lang} />
      </body>
    </html>
  );
}
