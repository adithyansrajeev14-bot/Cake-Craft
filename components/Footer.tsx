'use client';

import React, { useState } from 'react';
import {
  Cake,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Share2,
  Copy,
  Check,
  Radio,
} from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const fullAddress = 'Ram Nagar Kali Mandir ke samne, Kosi Kalan, Mathura District, Uttar Pradesh 281403, India';
  const whatsappNumber = '+91 8630985166';
  const directWhatsAppUrl = 'https://wa.me/918630985166?text=' + encodeURIComponent('Hello Cake Craft! I would like to inquire about ordering a fresh eggless cake.');
  const whatsappChannelUrl = 'https://whatsapp.com/channel/0029VaCakeCraftKosi'; // Dedicated WhatsApp Channel link
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Ram Nagar Kali Mandir Kosi Kalan');
  const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://cakecraft-kosikalan.in');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="bg-[#231714] text-[#E8DCD5] pt-16 pb-12 border-t border-[#3A2722]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#3A2722]">
          {/* Brand & Ethos (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#3D2521] flex items-center justify-center text-[#F2A4AB] border border-[#52332D]">
                <Cake className="w-5 h-5 text-[#F2A4AB]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">
                  Cake Craft
                </span>
                <span className="text-[10px] tracking-wider text-[#BAA399] uppercase font-medium mt-1 block">
                  Kosi Kalan · 100% Eggless
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#BAA399] leading-relaxed max-w-sm">
              Artisanal home-bakery creating bespoke 100% pure vegetarian cakes for birthdays, anniversaries, bento surprises, and festivals. Handcrafted fresh to order.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all border border-[#25D366]/40"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a
                href={whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#3D2521] hover:bg-[#52332D] text-[#F2A4AB] flex items-center justify-center transition-all border border-[#52332D]"
                aria-label="WhatsApp Channel"
                title="Join WhatsApp Channel"
              >
                <Radio className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#3D2521] hover:bg-[#52332D] text-[#F2A4AB] flex items-center justify-center transition-all border border-[#52332D]"
                aria-label="Instagram handle _.cake_craft._"
                title="Instagram: _.cake_craft._"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#3D2521] hover:bg-[#52332D] text-[#F2A4AB] flex items-center justify-center transition-all border border-[#52332D]"
                aria-label="Share on Facebook"
                title="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F2A4AB]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#BAA399]">
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">Specialties</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Menu & Pricing</a>
              </li>
              <li>
                <a href="#custom-builder" className="hover:text-white transition-colors">Cake Builder</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#how-to-order" className="hover:text-white transition-colors">1-Day Advance Policy</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F2A4AB]">
              Bakery Location
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#BAA399]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F2A4AB] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Ram Nagar Kali Mandir ke samne</p>
                  <p className="text-xs text-[#BAA399]">Kosi Kalan, Mathura District, UP</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#F2A4AB] shrink-0" />
                <span>9:00 AM – 9:00 PM (Pre-orders only)</span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#F2A4AB] shrink-0" />
                <a href="tel:+918630985166" className="text-white hover:text-[#F2A4AB] transition-colors font-mono">
                  {whatsappNumber}
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3D2521] hover:bg-[#52332D] text-xs text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Address Copied!' : 'Copy Full Address'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Direct Order Box (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F2A4AB]">
              Quick WhatsApp Booking
            </h4>
            <p className="text-xs text-[#BAA399] leading-relaxed">
              Skip forms and chat directly with our home baker for quotes, custom photos, or flavor recommendations.
            </p>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="pt-1 flex items-center justify-between text-[11px] text-[#BAA399]">
              <a
                href={whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-2 flex items-center gap-1"
              >
                <span>WhatsApp Channel</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-2 flex items-center gap-1"
              >
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C756C]">
          <p>© {new Date().getFullYear()} Cake Craft. All rights reserved. 100% Eggless Home Bakery, Kosi Kalan.</p>
          <div className="flex items-center gap-4">
            <span>Pure Vegetarian Sponge</span>
            <span aria-hidden="true">·</span>
            <span>Pre-orders 1 Day Ahead</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
