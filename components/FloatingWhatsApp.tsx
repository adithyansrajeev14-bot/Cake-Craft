'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [minimized, setMinimized] = useState(false);

  const whatsappUrl =
    'https://wa.me/918630985166?text=' +
    encodeURIComponent('Hello Cake Craft! I would like to order a fresh 100% eggless cake. (Noted: 1 day advance pre-order policy)');

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end flex-col gap-2">
      {!minimized && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-[#EAE0D5] text-xs text-[#2C1E1A] animate-in fade-in slide-in-from-bottom-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-semibold text-xs">Orders via WhatsApp</span>
          <span className="text-[#8C7A73]">· 1 Day Advance</span>
          <button
            type="button"
            onClick={() => setMinimized(true)}
            className="text-[#9C8B82] hover:text-[#2C1E1A] ml-1 p-0.5"
            aria-label="Dismiss message bubble"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white shadow-xl hover:shadow-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
        aria-label="Chat directly on WhatsApp with Cake Craft (+91 8630985166)"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent group-hover:scale-110 transition-transform" />
        <span className="sr-only">Order on WhatsApp</span>
      </a>
    </div>
  );
}
