import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import clsx from "clsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(`${geistSans.variable} ${geistMono.variable} antialiased`,
          "flex flex-col min-h-screen text-slate-520 dark:text-slate-400 bg-white dark:bg-slate-900"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
