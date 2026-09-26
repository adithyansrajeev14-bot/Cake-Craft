'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, Sparkles, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const whatsappUrl =
    'https://wa.me/918630985166?text=' +
    encodeURIComponent('Hello Cake Craft! I am looking to order a custom 100% eggless cake. Could you please share the availability for my date?');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FDFBF7] via-[#FAF5EE] to-[#FDFBF7]">
      {/* Delicate background ambient blur circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FBECEE] to-[#F7EFE4] rounded-full blur-3xl opacity-70 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Story & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Location & Purity Whisper */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9C5A63]">
              <span className="flex items-center gap-1.5 bg-[#FAF0F2] text-[#9C5A63] px-3 py-1 rounded-full border border-[#F3D5D9]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B85D65]" />
                100% Eggless Home Baker
              </span>
              <span className="text-[#CDBEAF]" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-[#6C5850]">
                <MapPin className="w-3.5 h-3.5 text-[#B85D65]" />
                Kosi Kalan, UP
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#2C1E1A] font-bold leading-[1.15] text-balance">
              Artisanal Eggless Cakes, Handcrafted with Love in{' '}
              <span className="text-[#B85D65] italic font-normal">Kosi Kalan</span>.
            </h1>

            {/* Subheading / Context */}
            <p className="text-base sm:text-lg text-[#544038] max-w-2xl leading-relaxed">
              Every celebration deserves a masterpiece. From dreamy birthday layers and delicate anniversary tiers to Korean bento boxes — freshly baked to your order with 100% pure vegetarian ingredients.
            </p>

            {/* Advance Notice Highlight Box */}
            <div className="p-4 rounded-xl bg-white border border-[#EFE7DE] shadow-sm flex items-start gap-3.5 max-w-xl">
              <div className="w-8 h-8 rounded-lg bg-[#FAF0E6] flex items-center justify-center shrink-0 text-[#B85D65] mt-0.5">
                <Clock className="w-4 h-4 text-[#B85D65]" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-[#2C1E1A]">
                  Pre-orders Only (Minimum 1 Day in Advance)
                </p>
                <p className="text-[#786057] text-xs mt-0.5">
                  Because our cakes are baked fresh from scratch without frozen sponges, we dedicate slow hand-piping time to each creation.
                </p>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Order on WhatsApp (+91 8630985166)</span>
              </a>

              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#2C1E1A] bg-white hover:bg-[#FAF6F0] active:scale-[0.98] border border-[#E4D8CB] rounded-xl shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9777F]"
              >
                <span>Explore Cake Menu</span>
                <ArrowRight className="w-4 h-4 text-[#786057]" />
              </a>
            </div>

            {/* Micro Trust Stats */}
            <div className="pt-3 border-t border-[#EFE7DE] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#786057]">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
                Zero Animal Products or Gelatin
              </span>
              <span className="text-[#DDD0C8]" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
                Custom Name & Themed Fondant Accents
              </span>
              <span className="text-[#DDD0C8]" aria-hidden="true">·</span>
              <span>Near Ram Nagar Kali Mandir</span>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#F7DADB] to-[#E9D9CE] rounded-3xl blur-xl opacity-60 transform -rotate-1" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#EAE0D5]">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                  <Image
                    src="/images/cake_hero_artisan_1790393364515.jpg"
                    alt="Cake Craft 100% Eggless Artisanal Celebration Cake in Kosi Kalan"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>

                {/* Floating Image Badge / Caption */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#F0E6DC] shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#B85D65]">
                      Freshly Baked To Order
                    </p>
                    <p className="font-serif text-sm sm:text-base font-bold text-[#2C1E1A]">
                      Artisanal Layered Floral Cake
                    </p>
                    <p className="text-[11px] text-[#786057]">
                      100% Pure Eggless · Rich Vanilla & Raspberry
                    </p>
                  </div>

                  <a
                    href="#custom-builder"
                    className="shrink-0 px-3 py-1.5 bg-[#2C1E1A] hover:bg-[#43312B] text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    Customize
                  </a>
                </div>
              </div>

              {/* Floating Testimonial Micro-Pill */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white py-2 px-3.5 rounded-xl shadow-md border border-[#EAE0D5] flex items-center gap-2">
                <span className="text-amber-500 font-bold text-sm">★ 5.0</span>
                <div className="text-[11px] leading-tight">
                  <span className="font-semibold text-[#2C1E1A] block">Guaranteed Tasty</span>
                  <span className="text-[#8C7A73]">Loved in Kosi Kalan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
