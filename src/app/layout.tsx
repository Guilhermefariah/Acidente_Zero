import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "@/models/Metadata/metadata";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  const title = (metadata.title as string) || "Default Title";
  const descriptionContent = (metadata.description as string) || "Default description";

  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={descriptionContent} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
