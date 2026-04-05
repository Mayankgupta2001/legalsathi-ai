import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LegalSathi AI - Free Legal Help for Indians",
  description: "Free AI-powered legal guidance in Hindi. Know your rights! 100% Free.",
  verification: {
    google: "1q8Om_MrxenH3-Di3OiP7ds3Bi7wmVsS8gGb6Og_wgw",
  },
  other: {
    "google-adsense-account": "ca-pub-4314810893346292",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4314810893346292"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
      <GoogleAnalytics gaId="G-C3D0W30EJH" />
    </html>
  );
}