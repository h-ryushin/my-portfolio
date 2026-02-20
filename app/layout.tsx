import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";


const reitam = localFont({
  src: "../public/fonts/Reitam Regular.otf", // ここを実際のファイル名に変更
  variable: "--font-reitam", // CSS変数名
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
