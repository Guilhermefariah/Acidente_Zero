'use client';
import Head from "next/head";
import Header from "@/components/Header/Header";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Acidente Zero</title>
                <link rel="icon" href="/favicon.icon" />
            </Head>
            <Header />
        </div>
    );
}