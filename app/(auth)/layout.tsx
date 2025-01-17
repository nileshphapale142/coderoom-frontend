import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { RecoidContextProvider } from '@/Recoil';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coderoom',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <RecoidContextProvider>
          {/* <CookiesProvider> */}
          {children}
          {/* </CookiesProvider> */}
        </RecoidContextProvider>
      </body>
    </html>
  );
}
