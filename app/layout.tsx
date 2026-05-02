import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";


const reitam = localFont({
  src: "../public/fonts/Reitam Regular.otf",
  variable: "--font-reitam",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${reitam.variable} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
