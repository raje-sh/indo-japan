import { NextRequest, NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { defaultLocale, locales } from "./app/i18n";


function getLocale(request: NextRequest) {
    const acceptedLanguage = request.headers.get('accept-language') ?? undefined
    const headers = { 'accept-language': acceptedLanguage }
    const languages = new Negotiator({ headers }).languages()
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products, The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - api, _next, outstatic
     */
        '/((?!api|_next/static|outstatic|_next/image|images).*)',
    ],
}