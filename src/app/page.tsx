'use client';
import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet";

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false });

export default function Home() {
    return (
        <div>
            <Head>
                <title>Acidente Zero</title>
                <link rel="icon" href="/favicon.icon" />
            </Head>
            <Header />
            <main>
                <Map />
            </main>
            <Footer />
        </div>
    );
}
