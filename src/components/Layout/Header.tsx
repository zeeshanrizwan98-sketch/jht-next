'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Eligibility Quiz', href: '/eligibility' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top emergency/call banner */}
      <div className="bg-emerald-800 py-2 px-4 text-white text-xs md:text-sm font-medium flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></span>
          <span>ECO4 & GBIS Funding Schemes 2026 are Active UK-Wide</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:07506756911" className="hover:underline flex items-center gap-1.5 font-semibold">
            <Phone size={14} className="fill-white" />
            <span>Call Advisor: 07506756911</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-44 h-12">
                <Image
                  src="/images/Logo.png"
                  alt="JHT Energy Services Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors duration-200 hover:text-emerald-700 ${
                    isActive ? 'text-emerald-700 font-bold border-b-2 border-emerald-700 pb-1' : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-all duration-200 shadow-md shadow-emerald-600/10 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-[0.98] flex items-center gap-1.5"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-semibold hover:bg-slate-50 hover:text-emerald-700 ${
                  isActive ? 'bg-emerald-50 text-emerald-800' : 'text-slate-700'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-gray-100 px-3 space-y-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg text-base transition-colors"
            >
              Apply Now
            </Link>
            <a
              href="tel:07506756911"
              className="flex items-center justify-center gap-2 text-center text-slate-800 font-bold border border-slate-300 py-3 px-4 rounded-lg text-base hover:bg-slate-50"
            >
              <Phone size={18} className="text-emerald-600" />
              07506756911
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
