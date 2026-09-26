'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, MessageCircle, X, ZoomIn, Instagram, ShieldCheck } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'theme' | 'bento' | 'anniversary' | 'chocolate';
  categoryLabel: string;
  image: string;
  description: string;
  flavor: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Silky Floral Celebration Tier',
    category: 'anniversary',
    categoryLabel: 'Anniversary & Tiers',
    image: '/images/cake_hero_artisan_1790393364515.jpg',
    description:
      'Two-tier vanilla bean sponge with raspberry compote and edible gold leaf embellishments. Hand-placed fresh floral blooms.',
    flavor: 'Vanilla Raspberry Gateau',
  },
  {
    id: 'gal-2',
    title: 'Belgian Dark Truffle Gloss Drip',
    category: 'chocolate',
    categoryLabel: 'Chocolate Decadence',
    image: '/images/cake_chocolate_truffle_1790393376361.jpg',
    description:
      '55% dark chocolate ganache drip with hand-tempered chocolate shards and gold flakes on pure eggless cocoa sponge.',
    flavor: 'Belgian Dark Truffle',
  },
  {
    id: 'gal-3',
    title: 'Korean Aesthetic Bento Mini',
    category: 'bento',
    categoryLabel: 'Bento Mini Cakes',
    image: '/images/cake_bento_designer_1790393387796.jpg',
    description:
      'Trending Korean vintage piping with customized handwritten message inside an eco-friendly clamshell box. Ideal for intimate celebrations.',
    flavor: 'Strawberries & Whipped Cream',
  },
  {
    id: 'gal-4',
    title: 'Blush Watercolor Floral Two-Tier',
    category: 'anniversary',
    categoryLabel: 'Anniversary & Tiers',
    image: '/images/cake_floral_anniversary_1790393399556.jpg',
    description:
      'Subtle watercolor blush textures, baby’s breath florals, and sugar pearls. Designed for silver jubilees and engagement dinners.',
    flavor: 'Rasmalai Saffron Infusion',
  },
  {
    id: 'gal-5',
    title: 'Gourmet Swirled Artisanal Cupcakes',
    category: 'theme',
    categoryLabel: 'Cupcakes & Treats',
    image: '/images/cake_cupcakes_assorted_1790393409384.jpg',
    description:
      'Six-pack of gourmet cupcakes with tall swirled buttercreams, fresh strawberry glaze, pistachio crunch, and dark chocolate drops.',
    flavor: 'Assorted Gourmet Flavors',
  },
  {
    id: 'gal-6',
    title: 'Custom Superhero & Birthday Theme',
    category: 'theme',
    categoryLabel: 'Theme & Custom',
    image: '/images/cake_chocolate_truffle_1790393376361.jpg',
    description:
      'Kid-favorite character colors, fondant badges, and customized chocolate topper accents. 100% vegetarian peace of mind.',
    flavor: 'Butterscotch Crunch',
  },
];

export default function GalleryLightbox() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Designs' },
    { id: 'anniversary', label: 'Anniversary & Tiers' },
    { id: 'bento', label: 'Bento Cakes' },
    { id: 'chocolate', label: 'Truffle & Chocolate' },
    { id: 'theme', label: 'Theme & Custom' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleWhatsAppInquiry = (item: GalleryItem) => {
    const text = `Hello Cake Craft! I saw the "${item.title}" (${item.categoryLabel}) in your gallery. I would love to order something similar for my celebration in Kosi Kalan! Could you please share options?`;
    return `https://wa.me/918630985166?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-t border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#EFE7DE]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B85D65] mb-2">
              <Instagram className="w-3.5 h-3.5 text-[#B85D65]" />
              <span>Instagram Feed · @_.cake_craft._</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E1A]">
              Our Handcrafted Creations
            </h2>
            <p className="text-sm sm:text-base text-[#786057] mt-1 max-w-xl">
              A peek into recent custom orders baked right here in Kosi Kalan. Click any design to view details and inquire instantly.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#2C1E1A] bg-[#FAF5EE] hover:bg-[#F2ECE4] border border-[#E8DDCF] rounded-xl transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#B85D65]" />
              <span>Follow @_.cake_craft._</span>
            </a>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9777F] ${
                activeFilter === filter.id
                  ? 'bg-[#2C1E1A] text-white shadow-sm'
                  : 'bg-[#FAF7F2] text-[#544038] hover:bg-[#F2ECE4] border border-[#EFE7DE]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#FAF5EE] border border-[#EFE7DE] cursor-pointer shadow-sm hover:shadow-lg transition-all"
            >
              {/* Photo */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                {/* Eggless badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-semibold text-[#2F613A] flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                  <span>100% Eggless</span>
                </div>

                {/* Hover zoom indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#2C1E1A] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-[#F3D5D8] font-medium block">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white leading-tight mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-200 mt-1 line-clamp-1">
                    {item.flavor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#EAE0D5] relative animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Container */}
              <div className="relative aspect-[16/10] bg-[#FAF5EE]">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-md text-xs font-semibold text-[#2F613A] flex items-center gap-1.5 shadow">
                  <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                  <span>100% Pure Vegetarian Eggless</span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B85D65]">
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2C1E1A] mt-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-[#544038] mt-2 leading-relaxed">
                  {selectedPhoto.description}
                </p>

                <div className="mt-4 pt-4 border-t border-[#F2ECE4] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-[#786057]">
                    <span className="block font-semibold text-[#2C1E1A]">Popular Flavor:</span>
                    <span>{selectedPhoto.flavor}</span>
                  </div>

                  <a
                    href={handleWhatsAppInquiry(selectedPhoto)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                    <span>Inquire on WhatsApp (+91 8630985166)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
