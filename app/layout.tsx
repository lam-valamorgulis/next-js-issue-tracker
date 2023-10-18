//  Nextjs 13 wrap your pages with a layout component, providing a consistent structure across those pages.
//Next.js uses a file-system based router where folders are used to define routes.

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Learning Nextjs 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
