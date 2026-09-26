'use client';

import React from 'react';
import { Palette, Clock, CheckCircle2, MapPin, MessageCircle, AlertTriangle } from 'lucide-react';

export default function HowToOrder() {
  const steps = [
    {
      step: '01',
      icon: Palette,
      title: 'Pick or Share Your Design',
      description:
        'Browse our menu, choose a bento or tier cake, or simply send us a screenshot from Pinterest/Instagram that you adore.',
    },
    {
      step: '02',
      icon: Clock,
      title: 'Order ≥1 Day in Advance',
      description:
        'We strictly accept pre-orders placed at least 24 hours ahead. We never sell frozen, pre-made sponges — everything is mixed and baked fresh.',
      highlight: true,
    },
    {
      step: '03',
      icon: MessageCircle,
      title: 'Confirm on WhatsApp',
      description:
        'Chat with us at +91 8630985166. We confirm weight, flavor, personalized text on cake, and time slot immediately.',
    },
    {
      step: '04',
      icon: MapPin,
      title: 'Pickup or Local Delivery',
      description:
        'Collect your chilled creation from our home bakery right near Ram Nagar Kali Mandir ke samne, Kosi Kalan, or request local delivery.',
    },
  ];

  return (
    <section id="how-to-order" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#B85D65]">
            Simple & Transparent Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E1A] mt-1">
            How to Order from Cake Craft
          </h2>
          <p className="text-sm sm:text-base text-[#786057] mt-2">
            Enjoy fresh, artisanal baking delivered to your doorstep or ready for pickup in Kosi Kalan.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className={`p-6 rounded-2xl relative flex flex-col justify-between transition-all ${
                  s.highlight
                    ? 'bg-white border-2 border-[#D9777F] shadow-md ring-4 ring-[#FBECEE]'
                    : 'bg-white border border-[#EFE7DE] shadow-sm hover:border-[#D9CCC0]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-[#C7B5A7]">
                      {s.step}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        s.highlight
                          ? 'bg-[#FAF0F2] text-[#B85D65]'
                          : 'bg-[#FAF5EE] text-[#544038]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#2C1E1A] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#6C5850] leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {s.highlight && (
                  <div className="mt-4 pt-3 border-t border-[#F5D5D9] flex items-center gap-1.5 text-[11px] font-semibold text-[#9C5A63]">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#B85D65]" />
                    <span>Pre-orders only! No urgent spot sales.</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Advance Notice Deep Dive Card */}
        <div className="mt-12 bg-white rounded-2xl border border-[#EAE0D5] p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-6 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#FAF0F2] border border-[#F5D5D9] flex items-center justify-center shrink-0 text-[#B85D65]">
            <Clock className="w-7 h-7" />
          </div>

          <div className="space-y-1 text-center lg:text-left">
            <h4 className="font-serif text-lg font-bold text-[#2C1E1A]">
              Why do we strictly require a 1-day advance notice?
            </h4>
            <p className="text-xs sm:text-sm text-[#6C5850] leading-relaxed max-w-3xl">
              Unlike commercial storefronts that preserve sponge bases in chemical chillers for up to a week, Cake Craft is a boutique home bakery. Every sponge is whipped and baked from scratch only after receiving your booking. Slow-whipped cream and hand-piped artisanal details require 6–8 hours of settling to give you that melt-in-the-mouth, fresh perfection!
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://wa.me/918630985166?text=Hello%20Cake%20Craft!%20I%20would%20like%20to%20place%20an%20order%20for%20tomorrow%2Fupcoming%20date."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Book Tomorrow&apos;s Slot</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
