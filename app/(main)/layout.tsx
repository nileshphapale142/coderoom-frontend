import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Navbar } from '@/components/Navbar';
import { RecoidContextProvider } from '@/Recoil';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coderoom',
  description: 'Empowering educators to design coding tests and enabling students to conquer them within set time frames.',
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
          <Navbar />
          {children}
          {/* </CookiesProvider> */}
        </RecoidContextProvider>
      </body>
    </html>
  );
}
