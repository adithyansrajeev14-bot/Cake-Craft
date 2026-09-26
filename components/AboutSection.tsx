'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, MapPin, Check, Phone } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'Strict 100% pure vegetarian home kitchen',
    'Premium Belgian cocoa & fresh dairy cream',
    'Customized theme toppings, numbers & names',
    'Baked fresh to order — zero pre-frozen stock',
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual container (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#EAE0D5] bg-white relative">
                <Image
                  src="/images/cake_cupcakes_assorted_1790393409384.jpg"
                  alt="Cake Craft Kitchen Artisanal Treats in Kosi Kalan"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Home Baker Badge */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-white p-4 rounded-2xl shadow-lg border border-[#EAE0D5] max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-[#B85D65] fill-[#B85D65]" />
                  <span className="text-xs font-bold text-[#2C1E1A]">Home Baker with Heart</span>
                </div>
                <p className="text-[11px] text-[#786057] leading-relaxed">
                  Every sponge is hand-whipped right in Kosi Kalan near Ram Nagar Kali Mandir.
                </p>
              </div>
            </div>
          </div>

          {/* Text Container (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B85D65]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Our Story & Craft</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E1A] leading-tight">
              Baked with Passion, Loved by Kosi Kalan.
            </h2>

            <p className="text-sm sm:text-base text-[#544038] leading-relaxed">
              At <strong>Cake Craft</strong>, we started with a simple belief: pure vegetarian families deserve cakes that are just as light, decadent, and visually enchanting as the finest European patisseries.
            </p>

            <p className="text-sm sm:text-base text-[#544038] leading-relaxed">
              We operate exclusively as an artisanal home bakery in Kosi Kalan. That means zero artificial chemical enhancers, no pre-baked sponges resting on refrigerated shelves for days, and complete dedication to your celebration. We craft each detail with love — from delicate hand-piped rosettes to customized thematic toppers.
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#43312B]">
                  <div className="w-5 h-5 rounded-full bg-[#FAF0F2] flex items-center justify-center text-[#B85D65] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#EFE7DE] flex flex-wrap items-center gap-4 text-xs text-[#786057]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#B85D65]" />
                <span>Ram Nagar Kali Mandir ke samne, Kosi Kalan</span>
              </div>
              <span className="text-[#CDBEAF]" aria-hidden="true">·</span>
              <a
                href="tel:+918630985166"
                className="flex items-center gap-1.5 hover:text-[#B85D65] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B85D65]" />
                <span>+91 8630985166</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
