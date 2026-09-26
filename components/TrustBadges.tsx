'use client';

import React from 'react';
import { Cake, Home, Clock, Star, Sparkles, CheckCircle } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Cake,
      title: '100% Eggless Purity',
      subtitle: 'Pure vegetarian sponge with velvety crumb, strictly gelatin-free.',
      tag: 'Strict Veg Kitchen',
    },
    {
      icon: Home,
      title: 'Freshly Home-Baked',
      subtitle: 'Never pre-frozen. Batter mixed & baked on your celebration day.',
      tag: 'Made from Scratch',
    },
    {
      icon: Clock,
      title: '1-Day Advance Notice',
      subtitle: 'Pre-orders only to ensure bespoke artistry and slow gentle chilling.',
      tag: 'Handcrafted Detail',
    },
    {
      icon: Star,
      title: 'Guaranteed Delicious',
      subtitle: 'High-grade chocolate, fresh creams, and calibrated perfect sweetness.',
      tag: '5-Star Taste',
    },
  ];

  return (
    <section id="specialties" className="py-12 bg-white border-y border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#B85D65]">
            Why Kosi Kalan Loves Cake Craft
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E1A] mt-1">
            Artisanal Care in Every Single Slice
          </h2>
          <p className="text-sm text-[#786057] mt-2">
            We believe you should never have to compromise between pure vegetarian values and world-class bakery taste.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#EFE7DE] hover:border-[#DFCFC3] hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF0F2] border border-[#F5D5D9] flex items-center justify-center text-[#B85D65] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#8A5157] uppercase tracking-wider mb-1">
                    <CheckCircle className="w-3 h-3 text-[#B85D65]" />
                    <span>{badge.tag}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2C1E1A] mb-1.5">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-[#6C5850] leading-relaxed">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
