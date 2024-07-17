import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { metadata } from "@/models/Metadata/metadata";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode; 
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const title = (metadata.title as string) || "Default Title";
  const descriptionContent = (metadata.description as string) || "Default description";

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={descriptionContent} />
      </Head>
      <div className={inter.className}>
        {children}
      </div>
    </>
  );
}

export default RootLayout;
