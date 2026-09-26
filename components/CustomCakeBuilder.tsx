'use client';

import React, { useState, useMemo } from 'react';
import { MessageCircle, Calendar, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

const OCCASION_OPTIONS = [
  'Birthday',
  'Anniversary',
  'Baby Shower',
  'Engagement / Ring Ceremony',
  'Kids Cartoon Theme',
  'Festival & Family Get-together',
];

const FLAVOR_OPTIONS = [
  { name: 'Belgian Dark Chocolate Truffle', priceDelta: 50 },
  { name: 'Rasmalai Kesar Pistachio (Fusion)', priceDelta: 80 },
  { name: 'Butterscotch Golden Praline Crunch', priceDelta: 0 },
  { name: 'Fresh Seasonal Fruit Gateau', priceDelta: 60 },
  { name: 'Red Velvet with Cream Cheese', priceDelta: 70 },
  { name: 'Lotus Biscoff Caramel Swirl', priceDelta: 90 },
  { name: 'Pineapple Sunshine Classic', priceDelta: 0 },
  { name: 'Black Forest Royale', priceDelta: 20 },
];

const SIZE_OPTIONS = [
  { label: 'Bento Mini (350g)', basePrice: 350, servings: '1-2 persons' },
  { label: '0.5 kg Standard', basePrice: 480, servings: '4-6 persons' },
  { label: '1.0 kg Celebration', basePrice: 850, servings: '8-12 persons' },
  { label: '1.5 kg Grand', basePrice: 1250, servings: '14-18 persons' },
  { label: '2.0 kg Two-Tier', basePrice: 1650, servings: '20-25 persons' },
];

export default function CustomCakeBuilder() {
  const [occasion, setOccasion] = useState('Birthday');
  const [flavor, setFlavor] = useState('Belgian Dark Chocolate Truffle');
  const [weight, setWeight] = useState('0.5 kg');
  const [spongeType, setSpongeType] = useState('Moist Chocolate');
  const [messageOnCake, setMessageOnCake] = useState('');
  const [deliveryType, setDeliveryType] = useState('pickup');
  const [celebrationDate, setCelebrationDate] = useState('');

  // Compute minimum date (tomorrow)
  const tomorrowStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }, []);

  // Calculate estimated price
  const estimatedPrice = useMemo(() => {
    const selectedSizeObj = SIZE_OPTIONS.find((s) => s.label === weight) || SIZE_OPTIONS[1];
    const selectedFlavorObj = FLAVOR_OPTIONS.find((f) => f.name === flavor) || FLAVOR_OPTIONS[0];
    return selectedSizeObj.basePrice + selectedFlavorObj.priceDelta;
  }, [weight, flavor]);

  const handleWhatsAppSend = () => {
    const orderDetails = [
      `*🎂 New Custom Cake Inquiry - Cake Craft Kosi Kalan*`,
      `• *Occasion:* ${occasion}`,
      `• *Flavor:* ${flavor} (100% Pure Eggless)`,
      `• *Size/Weight:* ${weight}`,
      `• *Sponge Base:* ${spongeType}`,
      `• *Message on Cake:* ${messageOnCake ? `"${messageOnCake}"` : 'None requested'}`,
      `• *Required Date:* ${celebrationDate || 'Not selected yet (1-day advance policy understood)'}`,
      `• *Preference:* ${deliveryType === 'pickup' ? 'Self-Pickup near Ram Nagar Kali Mandir' : 'Delivery in Kosi Kalan'}`,
      `• *Estimated Total:* ~₹${estimatedPrice}`,
      `\nPlease let me know if this slot is available! Thank you.`,
    ].join('\n');

    const url = `https://wa.me/918630985166?text=${encodeURIComponent(orderDetails)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="custom-builder" className="py-16 bg-[#FAF7F2] border-t border-[#EFE7DE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B85D65] bg-[#FCECEE] px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Cake Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E1A]">
            Design Your Custom Eggless Cake
          </h2>
          <p className="text-sm text-[#786057] mt-2">
            Choose your occasion, pure vegetarian flavor, size, and message. Instantly generate a WhatsApp order summary for our home baker in Kosi Kalan.
          </p>
        </div>

        {/* Builder Box */}
        <div className="bg-white rounded-3xl border border-[#EAE0D5] shadow-lg p-6 sm:p-8 lg:p-10">
          <div className="space-y-8">
            {/* Step 1: Occasion */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#8C5D65] mb-2.5">
                1. Select Celebration Occasion
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {OCCASION_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setOccasion(opt)}
                    className={`p-3 text-left rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      occasion === opt
                        ? 'bg-[#FAF0F2] text-[#9A4950] border-2 border-[#D9777F] shadow-sm font-semibold'
                        : 'bg-[#FDFBF7] text-[#544038] border border-[#EFE7DE] hover:bg-[#F4EDE5]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Flavor Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#8C5D65] mb-2.5">
                2. Choose 100% Eggless Gourmet Flavor
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FLAVOR_OPTIONS.map((f) => (
                  <button
                    key={f.name}
                    type="button"
                    onClick={() => setFlavor(f.name)}
                    className={`p-3 text-left rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                      flavor === f.name
                        ? 'bg-[#FAF0F2] text-[#9A4950] border-2 border-[#D9777F] shadow-sm font-semibold'
                        : 'bg-[#FDFBF7] text-[#544038] border border-[#EFE7DE] hover:bg-[#F4EDE5]'
                    }`}
                  >
                    <span>{f.name}</span>
                    {flavor === f.name && (
                      <CheckCircle2 className="w-4 h-4 text-[#B85D65] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Size & Serving */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#8C5D65] mb-2.5">
                3. Choose Weight & Size
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {SIZE_OPTIONS.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setWeight(s.label)}
                    className={`p-3 text-center rounded-xl text-xs transition-all ${
                      weight === s.label
                        ? 'bg-[#FAF0F2] text-[#9A4950] border-2 border-[#D9777F] shadow-sm'
                        : 'bg-[#FDFBF7] text-[#544038] border border-[#EFE7DE] hover:bg-[#F4EDE5]'
                    }`}
                  >
                    <span className="font-bold text-sm block text-[#2C1E1A]">{s.label}</span>
                    <span className="text-[11px] text-[#786057] block mt-0.5">{s.servings}</span>
                    <span className="text-xs font-mono font-semibold text-[#B85D65] block mt-1">
                      From ₹{s.basePrice}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Custom Message & Delivery Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#8C5D65] mb-1.5">
                  4. Custom Name / Inscription on Cake
                </label>
                <input
                  type="text"
                  placeholder="e.g. Happy 1st Birthday Aadhya!"
                  value={messageOnCake}
                  onChange={(e) => setMessageOnCake(e.target.value)}
                  maxLength={50}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#D9CCC0] bg-[#FDFBF7] text-[#2C1E1A] placeholder-[#9C8B82] focus:outline-none focus:ring-2 focus:ring-[#D9777F]"
                />
                <span className="text-[11px] text-[#8C7A73] block mt-1">
                  Hand-piped on cake board or chocolate plaque (max 50 chars)
                </span>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#8C5D65] mb-1.5">
                  5. Celebration Date (Pre-order 1 Day Ahead)
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={tomorrowStr}
                    value={celebrationDate}
                    onChange={(e) => setCelebrationDate(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#D9CCC0] bg-[#FDFBF7] text-[#2C1E1A] focus:outline-none focus:ring-2 focus:ring-[#D9777F]"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#A85157] font-medium mt-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>Strict policy: Pre-orders must be placed $\ge$ 1 day prior.</span>
                </div>
              </div>
            </div>

            {/* Delivery/Pickup Preference */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#8C5D65] mb-2">
                6. Pickup or Local Delivery
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryType('pickup')}
                  className={`p-3.5 text-left rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    deliveryType === 'pickup'
                      ? 'bg-[#FAF0F2] text-[#9A4950] border-2 border-[#D9777F]'
                      : 'bg-[#FDFBF7] text-[#544038] border border-[#EFE7DE]'
                  }`}
                >
                  <p className="font-semibold text-[#2C1E1A]">Self-Pickup (Free)</p>
                  <p className="text-xs text-[#786057] mt-0.5">
                    Near Ram Nagar Kali Mandir ke samne, Kosi Kalan
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`p-3.5 text-left rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    deliveryType === 'delivery'
                      ? 'bg-[#FAF0F2] text-[#9A4950] border-2 border-[#D9777F]'
                      : 'bg-[#FDFBF7] text-[#544038] border border-[#EFE7DE]'
                  }`}
                >
                  <p className="font-semibold text-[#2C1E1A]">Delivery within Kosi Kalan</p>
                  <p className="text-xs text-[#786057] mt-0.5">
                    Nominal local auto/delivery charges apply
                  </p>
                </button>
              </div>
            </div>

            {/* Price Estimate Summary & WhatsApp Trigger */}
            <div className="p-6 rounded-2xl bg-[#F6EFE6] border border-[#EADFCF] flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#786057] block">
                  Estimated Starting Price
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-bold font-mono tabular-nums text-[#2C1E1A]">
                    ₹{estimatedPrice}
                  </span>
                  <span className="text-xs text-[#786057]">
                    (Includes custom piping & packaging)
                  </span>
                </div>
                <p className="text-xs text-[#6C5850] mt-1">
                  Selected: <strong className="text-[#2C1E1A]">{weight}</strong> · {flavor}
                </p>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Confirm on WhatsApp (+91 8630985166)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
