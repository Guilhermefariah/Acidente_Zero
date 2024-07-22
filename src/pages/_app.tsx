import '@/app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
