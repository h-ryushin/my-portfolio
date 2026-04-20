"use client";

import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // メニュー項目を配列にしておくと管理が楽です
  const navLinks = [
    { name: "WORKS", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 mt-2 md:mt-5">
      <div className="max-w-[100%] mx-auto px-6 h-16 md:h-20 flex justify-between items-center relative">
        
        {/* ロゴ部分 */}
        <Link href="/" className="hover:opacity-70 transition-opacity z-50">
          <img
            src="/images/icon.png"
            alt="Logo"
            className="w-10 h-10 md:w-16 md:h-16 object-contain"
          />
        </Link>

        {/* --- PC用メニュー (md以上で表示) --- */}
        <nav className="hidden md:flex gap-12 font-bold tracking-[0.1em] text-[#a28d69]">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:opacity-70 transition-colors text-lg">
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-0.5 bg-[#a28d69] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-[#a28d69] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-[#a28d69] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* --- スマホ用オーバーレイメニュー --- */}
        <div className={`
          fixed inset-0 bg-[#F0EBE3]/fb flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{ backgroundColor: 'rgba(240, 235, 227, 0.95)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // クリックしたら閉じる
              className="text-2xl font-black text-[#a28d69] tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};