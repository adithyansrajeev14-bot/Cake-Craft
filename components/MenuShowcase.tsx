'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Sparkles, Check, ChevronRight } from 'lucide-react';

interface MenuItem {
  id: string;
  category: 'birthday' | 'anniversary' | 'bento' | 'theme' | 'cupcakes';
  name: string;
  tagline: string;
  description: string;
  startingPrice: number;
  availableSizes: string[];
  popularFlavors: string[];
  image: string;
  badge?: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'choc-truffle-delight',
    category: 'birthday',
    name: 'Belgian Dark Chocolate Truffle',
    tagline: 'Rich, glossy mirror glaze with pure cocoa decadence',
    description:
      'Our signature 100% eggless chocolate sponge layered with smooth dark chocolate ganache, finished with hand-shaved curls and edible gold dust.',
    startingPrice: 500,
    availableSizes: ['0.5 kg', '1.0 kg', '1.5 kg', '2.0 kg'],
    popularFlavors: ['Dark Truffle', 'Chocolate Mocha', 'Nutty Hazelnut'],
    image: '/images/cake_chocolate_truffle_1790393376361.jpg',
    badge: 'Bestseller in Kosi Kalan',
  },
  {
    id: 'designer-bento-korean',
    category: 'bento',
    name: 'Aesthetic Korean Bento Cake',
    tagline: 'Pocket-sized charm in eco-friendly takeaway box',
    description:
      'Trendy pastel mini cakes (~350g, 4 inches), perfect for intimate duo celebrations, surprise confessions, or monthly milestones. Custom piped text included.',
    startingPrice: 350,
    availableSizes: ['Bento (350g)'],
    popularFlavors: ['Strawberry Cream', 'Vanilla Buttercream', 'Dutch Chocolate'],
    image: '/images/cake_bento_designer_1790393387796.jpg',
    badge: 'Trending Design',
  },
  {
    id: 'anniversary-floral-tier',
    category: 'anniversary',
    name: 'Watercolor Floral Two-Tier',
    tagline: 'Breathtaking centerpiece for milestones and silver jubilees',
    description:
      'Majestic tiered eggless cake with hand-painted blush watercolor effects, organic floral blooms, baby’s breath, and lustrous sugar pearls.',
    startingPrice: 1200,
    availableSizes: ['1.5 kg', '2.0 kg Tier', '3.0 kg Grand Tier'],
    popularFlavors: ['Rasmalai Kesar', 'Red Velvet Cheese-cream', 'Rose Pistachio'],
    image: '/images/cake_floral_anniversary_1790393399556.jpg',
    badge: 'Occasion Luxury',
  },
  {
    id: 'gourmet-cupcake-set',
    category: 'cupcakes',
    name: 'Artisanal Swirled Cupcakes (Set of 6)',
    tagline: 'Velvety cupcakes with whipped gourmet swirls',
    description:
      'Six freshly baked eggless cupcakes in assorted flavors with handcrafted piped rosettes, Belgian chocolate drizzles, and rainbow pearl sprinkles.',
    startingPrice: 380,
    availableSizes: ['Box of 6', 'Box of 12'],
    popularFlavors: ['Strawberry Pistachio', 'Double Choc', 'Caramel Crunch'],
    image: '/images/cake_cupcakes_assorted_1790393409384.jpg',
  },
  {
    id: 'rasmalai-fusion-royale',
    category: 'anniversary',
    name: 'Royal Rasmalai Fusion Gateau',
    tagline: 'Traditional Indian sweet meets artisanal French sponge',
    description:
      'Cardamom-infused soft eggless sponge soaked in rich saffron milk, layered with juicy rasmalai chunks, crushed Iranian pistachios, and silver vark.',
    startingPrice: 580,
    availableSizes: ['0.5 kg', '1.0 kg', '1.5 kg'],
    popularFlavors: ['Kesar Rasmalai', 'Gulab Jamun Fusion', 'Rabdi Pistachio'],
    image: '/images/cake_hero_artisan_1790393364515.jpg',
    badge: 'Festive Favorite',
  },
  {
    id: 'butterscotch-caramel-crunch',
    category: 'birthday',
    name: 'Butterscotch Golden Praline',
    tagline: 'Sweet buttery sponge with crisp homemade butterscotch crunch',
    description:
      'A timeless favorite for kids and families in Kosi Kalan. Moist golden vanilla sponge loaded with crunchy caramelized praline and salted butterscotch sauce.',
    startingPrice: 480,
    availableSizes: ['0.5 kg', '1.0 kg', '1.5 kg'],
    popularFlavors: ['Butterscotch Crunch', 'Caramel Delight'],
    image: '/images/cake_chocolate_truffle_1790393376361.jpg',
  },
];

export default function MenuShowcase() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'choc-truffle-delight': '0.5 kg',
    'designer-bento-korean': 'Bento (350g)',
    'anniversary-floral-tier': '1.5 kg',
    'gourmet-cupcake-set': 'Box of 6',
    'rasmalai-fusion-royale': '0.5 kg',
    'butterscotch-caramel-crunch': '0.5 kg',
  });

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'birthday', label: 'Birthday & Classics' },
    { id: 'bento', label: 'Bento Mini Cakes' },
    { id: 'anniversary', label: 'Anniversary & Tiers' },
    { id: 'cupcakes', label: 'Cupcakes' },
  ];

  const filteredItems =
    activeTab === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeTab);

  const handleSizeSelect = (itemId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: size }));
  };

  const getWhatsAppOrderUrl = (item: MenuItem) => {
    const chosenSize = selectedSizes[item.id] || item.availableSizes[0];
    const text = `Hello Cake Craft (+91 8630985166)! I would like to order the 100% Eggless "${item.name}" (Size: ${chosenSize}). Could you please confirm pricing and availability for my date in Kosi Kalan?`;
    return `https://wa.me/918630985166?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#EFE7DE]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B85D65] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Baked Fresh To Order</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E1A]">
              Cake Craft Specialties & Menu
            </h2>
            <p className="text-sm sm:text-base text-[#786057] mt-1 max-w-xl">
              100% eggless creations customized for your special moments. All designs require pre-orders placed at least 1 day in advance.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <p className="text-xs text-[#8C7A73]">Have a custom Pinterest or photo idea?</p>
            <a
              href="https://wa.me/918630985166?text=Hello%20Cake%20Craft!%20I%20have%20a%20custom%20photo%20cake%20design%20I%20would%20like%20to%20recreate.%20Can%20I%20share%20the%20picture%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B85D65] hover:text-[#9A4950] transition-colors"
            >
              <span>Send Reference Photo on WhatsApp</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Tabs (Clean Segmented Control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9777F] ${
                activeTab === cat.id
                  ? 'bg-[#2C1E1A] text-white shadow-sm'
                  : 'bg-white text-[#544038] hover:bg-[#F2ECE4] border border-[#EFE7DE]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const currentSize = selectedSizes[item.id] || item.availableSizes[0];
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#EFE7DE] shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[4/3] bg-[#FAF5EE] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                    {/* Vegetarian Pure Icon Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm border border-[#EAE0D5] flex items-center gap-1.5 text-[11px] font-semibold text-[#2F613A]">
                      <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                      <span>100% Eggless</span>
                    </div>

                    {item.badge && (
                      <div className="absolute top-3 right-3 bg-[#2C1E1A]/90 text-white text-[11px] font-medium px-2.5 py-1 rounded-md backdrop-blur-sm">
                        {item.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs text-white/90 font-medium">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-[#2C1E1A] group-hover:text-[#B85D65] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6C5850] mt-1.5 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Flavors list */}
                    <div className="mt-3 pt-3 border-t border-[#F2ECE4]">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9C5A63] block mb-1">
                        Popular Fillings
                      </span>
                      <div className="flex flex-wrap gap-1 text-xs text-[#544038]">
                        {item.popularFlavors.map((flavor, fIdx) => (
                          <span key={flavor}>
                            {flavor}
                            {fIdx < item.popularFlavors.length - 1 && (
                              <span className="text-[#CDBEAF] mx-1">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Weight / Size Selector */}
                    <div className="mt-4">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#786057] block mb-1.5">
                        Select Serving Size
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.availableSizes.map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => handleSizeSelect(item.id, size)}
                            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                              currentSize === size
                                ? 'bg-[#FAF0F2] text-[#9A4950] border border-[#E9C3C8] font-semibold'
                                : 'bg-[#FAF7F2] text-[#6C5850] border border-[#EFE7DE] hover:bg-[#F2ECE4]'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & WhatsApp Action */}
                <div className="p-5 pt-0 mt-2">
                  <div className="flex items-center justify-between pt-3 border-t border-[#F2ECE4]">
                    <div>
                      <span className="text-[11px] text-[#8C7A73] block">Starting from</span>
                      <span className="text-base font-bold text-[#2C1E1A] font-mono tabular-nums">
                        ₹{item.startingPrice}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppOrderUrl(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] rounded-xl shadow-sm hover:shadow transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Custom Flavors */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF5EE] border border-[#EADFCF] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-base font-bold text-[#2C1E1A]">
              Don&apos;t see your dream flavor or theme here?
            </h4>
            <p className="text-xs text-[#786057]">
              We customize any design, cartoon character, tier structure, or exotic fruit combination! Just send us a WhatsApp DM with your inspiration.
            </p>
          </div>

          <a
            href="https://wa.me/918630985166?text=Hello%20Cake%20Craft!%20I%20have%20a%20unique%20custom%20theme%20flavor%20request%20for%20a%20celebration%20in%20Kosi%20Kalan."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 bg-[#2C1E1A] hover:bg-[#43312B] text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-2"
          >
            <span>Ask for Custom Flavor</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
