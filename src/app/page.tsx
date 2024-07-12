'use client';
import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';


const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false });

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Acidente Zero</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <Map />
            </main>
            <Footer />
        </div>
    );
}
