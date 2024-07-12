'use client';
import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Acidente Zero</title>
                <link rel="icon" href="/favicon.icon" />
            </Head>
            <Header />
            <main className="container mx-auto">
                {/* Conteúdo da página */}
            </main>
            <Footer />
        </div>
    );
}
