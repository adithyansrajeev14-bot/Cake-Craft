import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import MenuShowcase from '@/components/MenuShowcase';
import CustomCakeBuilder from '@/components/CustomCakeBuilder';
import GalleryLightbox from '@/components/GalleryLightbox';
import HowToOrder from '@/components/HowToOrder';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Cake Craft',
    image: 'https://ais-pre-scwln77v3ljmdhuz3chzsv-790941937607.asia-east1.run.app/images/cake_hero_artisan_1790393364515.jpg',
    telephone: '+918630985166',
    url: 'https://ais-pre-scwln77v3ljmdhuz3chzsv-790941937607.asia-east1.run.app',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ram Nagar Kali Mandir ke samne',
      addressLocality: 'Kosi Kalan',
      addressRegion: 'Uttar Pradesh',
      postalCode: '281403',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '27.7850',
      longitude: '77.4330',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    priceRange: '₹350 - ₹2000',
    servesCuisine: '100% Pure Vegetarian Eggless Bakery & Custom Celebration Cakes',
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C1E1A] flex flex-col selection:bg-[#F3D5D8] selection:text-[#521C26]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Highlights / Trust Badges */}
      <TrustBadges />

      {/* Specialties & Menu Showcase */}
      <MenuShowcase />

      {/* Interactive Custom Cake Estimator & WhatsApp Generator */}
      <CustomCakeBuilder />

      {/* Interactive Photo Gallery with Lightbox */}
      <GalleryLightbox />

      {/* How to Order & 1-Day Advance Notice Policy */}
      <HowToOrder />

      {/* About the Home Baker & Story */}
      <AboutSection />

      {/* Customer Testimonials & Reviews */}
      <Testimonials />

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Sticky Quick Action */}
      <FloatingWhatsApp />
    </main>
  );
}
