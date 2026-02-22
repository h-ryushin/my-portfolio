// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-70 mt-5">
      <div className="max-w-[95%] mx-auto px-8 h-20 flex justify-between items-center">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <img
            src="/images/icon.png"
            alt="Logo"
            className="w-12 h-12 md:h-20 md:w-20 object-contain"
          />
        </Link>
        <nav className="flex gap-12 font-medium tracking-[0.1em] text-[#a28d69]" style={{ fontSize: '1.4vw' }}>
          <Link href="/" className="hover:opacity-70 transition-colors text-inherit">WORKS</Link>
          <Link href="/about" className="hover:opacity-70 transition-colors text-inherit">ABOUT</Link>
          <Link href="/contact" className="hover:opacity-70 transition-colors text-inherit">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};