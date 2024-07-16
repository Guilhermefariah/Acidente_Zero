import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "@/models/Metadata/metadata";
const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  const descriptionContent = metadata.description || "";

  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={descriptionContent} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
