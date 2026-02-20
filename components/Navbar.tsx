// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#e9e9e2]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        {/* 左上のロゴ：Topへ戻る */}
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <img
            src="/images/icon.png"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </Link>

        {/* 右側のメニュー：大文字・広めの字間 */}
        <nav className="flex gap-12 text-xs font-light tracking-[0.2em] text-gray-600">
          <Link href="#projects" className="hover:text-black transition-colors">WORKS</Link>
          <Link href="/about" className="hover:text-black transition-colors">ABOUT</Link>
          <Link href="#contact" className="hover:text-black transition-colors">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};