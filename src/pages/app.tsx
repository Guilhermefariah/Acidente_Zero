import '@/app/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/app/layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    )
}