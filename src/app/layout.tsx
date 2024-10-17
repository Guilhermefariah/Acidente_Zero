import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const title = 'Acidente Zero'
  const descriptionContent = 'Acidente Zero'

  return (
    <html lang='pt-br'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='description' content={descriptionContent} />
      </head>
      <body className={`${inter.className} bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 shadow-lg`}>{children}</body>
    </html>
  )
}
