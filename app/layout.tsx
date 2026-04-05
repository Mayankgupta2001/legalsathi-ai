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

        <footer className="mt-auto bg-gray-950 text-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-x-4 text-sm text-gray-300 flex flex-wrap gap-3">
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
                <a href="/about" className="hover:text-white transition">About</a>
                <a href="/fir-guide" className="hover:text-white transition">FIR Guide</a>
                <a href="/" className="hover:text-white transition">Home</a>
              </div>
              <p className="text-sm text-gray-400 max-w-xl">
                © 2026 LegalSathi AI | Free Legal Help for India 🇮🇳
              </p>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Ye platform legal advice nahi deta.
            </p>
          </div>
        </footer>
      </body>
      <GoogleAnalytics gaId="G-C3D0W30EJH" />
    </html>
  );
}