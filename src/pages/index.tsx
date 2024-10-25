'use client'
import React from 'react'
import { Header } from '@/(accidentzero)/Header'
import { Footer } from '@/(accidentzero)/Footer'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/(accidentzero)/Map').then((mod) => mod.Map), {
    ssr: false,
})

export default function Home() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow'>
                <Map />
            </main>
            <Footer />
        </div>
    )
}

