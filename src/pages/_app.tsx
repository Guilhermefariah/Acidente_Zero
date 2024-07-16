// _app.tsx

import React from 'react';
import type { AppProps } from 'next/app';
import RootLayout from '@/app/layout';
import Navigation from '@/components/Header/Navigation';
import Footer from '@/components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <Navigation />
            <Component {...pageProps} />
            <Footer /> 
        </RootLayout>
    );
}

export default MyApp;
