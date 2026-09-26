'use client';

import React from 'react';
import { Star, ShieldCheck, Heart } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  occasion: string;
  comment: string;
  flavor: string;
  rating: number;
}

const REVIEWS: Review[] = [
  {
    name: 'Neha Sharma',
    location: 'Kosi Kalan',
    occasion: 'Daughter’s 5th Birthday',
    comment:
      'Finding 100% pure eggless cake with real bakery moistness is tough in Kosi Kalan, but Cake Craft exceeded all expectations! The chocolate truffle was so rich without being overly sweet. Everyone in the family loved it!',
    flavor: 'Belgian Dark Truffle (1 kg)',
    rating: 5,
  },
  {
    name: 'Rahul & Priya Verma',
    location: 'Near Ram Nagar, Kosi Kalan',
    occasion: '1st Wedding Anniversary',
    comment:
      'We sent an Instagram picture of a blush floral 2-tier cake, and she recreated it flawlessly! The Rasmalai fusion flavor was out of this world — so fragrant and fresh. Pre-ordering a day before was so worth it.',
    flavor: 'Rasmalai Fusion Two-Tier (2 kg)',
    rating: 5,
  },
  {
    name: 'Pooja Agrawal',
    location: 'Kosi Kalan Mandi Road',
    occasion: 'Surprise Bento Celebration',
    comment:
      'Ordered the cute Korean bento cake for my best friend. The packaging was so aesthetic, and the handwritten piping was super neat. 100% pure veg peace of mind for our household. Will always order from Cake Craft!',
    flavor: 'Strawberry Cream Bento',
    rating: 5,
  },
  {
    name: 'Amit Singhal',
    location: 'Kosi Kalan Station Road',
    occasion: 'Father’s 60th Birthday',
    comment:
      'The butterscotch praline cake was wonderfully crunchy and fresh. You can immediately tell it was baked on the same day, not kept in cold storage. Great communication on WhatsApp too.',
    flavor: 'Butterscotch Golden Praline',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white border-t border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#B85D65] mb-2">
            <Heart className="w-3.5 h-3.5 fill-[#B85D65] text-[#B85D65]" />
            <span>Community Love</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E1A]">
            Loved by Families Across Kosi Kalan
          </h2>
          <p className="text-sm sm:text-base text-[#786057] mt-2">
            Real feedback from our happy neighbors, parents, and celebration hosts.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.name}
              className="p-6 sm:p-7 rounded-2xl bg-[#FDFBF7] border border-[#EFE7DE] shadow-sm flex flex-col justify-between hover:border-[#D9CCC0] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#2F613A] bg-[#EBF5EE] px-2 py-0.5 rounded flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#2E7D32]" />
                    Verified Order
                  </span>
                </div>

                <p className="text-sm text-[#4A3831] leading-relaxed italic mb-4">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE7DE] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-[#2C1E1A]">{rev.name}</h4>
                  <p className="text-[#8C7A73]">{rev.location} · {rev.occasion}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#9C5A63] font-medium block">
                    Ordered:
                  </span>
                  <span className="text-[11px] font-semibold text-[#544038]">
                    {rev.flavor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
