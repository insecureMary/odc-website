'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products & Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? 'bg-navy-900/98 shadow-lg backdrop-blur-sm py-3' : 'bg-navy-900 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center shrink-0 group-hover:bg-gold-400 transition-colors">
            <span className="text-white font-black text-base tracking-tight">ODC</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold text-base leading-none">ODC Ventures</div>
            <div className="text-gold-400 text-[10px] tracking-widest uppercase mt-0.5">Tiles · Finishings · Electrical</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${active
                  ? 'text-gold-400 bg-white/10'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+2348012345678"
            className="flex items-center gap-1.5 text-white/70 hover:text-gold-400 transition-colors text-sm"
          >
            <Phone size={14} />
            <span>+234 703 918 1821</span>
          </a>
          <Link
            href="/contact"
            className="bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="px-4 pb-4 pt-2 flex flex-col gap-1 border-t border-white/10 mt-3">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active
                  ? 'text-gold-400 bg-white/10'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold px-4 py-3 rounded-lg text-center transition-colors"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+2348035376467"
            className="flex items-center justify-center gap-2 text-white/70 text-sm py-2"
          >
            <Phone size={14} />
            +234 703 918 1821
          </a>
        </nav>
      </div>
    </header>
  );
}
