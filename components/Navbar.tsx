'use client';

import React, { useState, useEffect } from 'react';
import { Cake, MessageCircle, Phone, Menu as MenuIcon, X, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Specialties', href: '#specialties' },
    { label: 'Menu & Prices', href: '#menu' },
    { label: 'Custom Builder', href: '#custom-builder' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'How to Order', href: '#how-to-order' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappUrl =
    'https://wa.me/918630985166?text=' +
    encodeURIComponent('Hello Cake Craft! I would like to inquire about ordering a fresh 100% eggless cake.');

  return (
    <>
      {/* Top Notice Banner */}
      <div className="bg-[#2C1E1A] text-[#F5EFEB] text-xs py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5 font-medium text-[#F0B8BC]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E07A5F]" />
              100% Pure Eggless
            </span>
            <span className="text-[#8C7A73]" aria-hidden="true">·</span>
            <span className="text-[#DDD0C8] hidden sm:inline">Handcrafted Home Baker in Kosi Kalan</span>
            <span className="text-[#8C7A73] hidden sm:inline" aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-[#F0B8BC]">
              <Clock className="w-3 h-3 text-[#E07A5F]" />
              Pre-orders only (1 day advance)
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[#DDD0C8] shrink-0 text-xs">
            <a
              href="tel:+918630985166"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#E07A5F]" />
              <span>+91 8630985166</span>
            </a>
            <span className="text-[#68534C]" aria-hidden="true">|</span>
            <span className="text-[#DDD0C8]">Ram Nagar Kali Mandir, Kosi Kalan</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar (Strict 3-Zone Contract) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md border-[#EFE7DE] shadow-sm py-3'
            : 'bg-[#FDFBF7] border-[#F2ECE4] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Wordmark Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9777F]"
          >
            <div className="w-9 h-9 rounded-full bg-[#FCECEE] flex items-center justify-center text-[#B85D65] border border-[#F5D5D9] group-hover:scale-105 transition-transform">
              <Cake className="w-5 h-5 text-[#B85D65]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C1E1A] group-hover:text-[#B85D65] transition-colors leading-none">
                Cake Craft
              </span>
              <span className="text-[10px] tracking-wider text-[#786057] uppercase font-medium mt-0.5">
                Kosi Kalan · 100% Eggless
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#544038]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#B85D65] transition-colors py-1 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9777F]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#544038] hover:text-[#2C1E1A] hover:bg-[#F2ECE4] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9777F]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FDFBF7] border-b border-[#EFE7DE] px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium text-[#544038]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg bg-[#FAF5EE] hover:bg-[#F4ECE2] hover:text-[#B85D65] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-[#EFE7DE] flex flex-col gap-2 text-xs text-[#786057]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B85D65]" />
                <span>Orders must be placed 1 day in advance</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-[#B85D65]" />
                <span>Ram Nagar Kali Mandir ke samne, Kosi Kalan</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
