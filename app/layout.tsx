import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cake Craft | 100% Eggless Artisanal Bakery in Kosi Kalan',
  description:
    'Handcrafted 100% pure eggless celebration cakes, designer bento cakes, and custom theme treats baked fresh with love in Kosi Kalan. Order 1 day in advance via WhatsApp.',
  keywords: [
    'Cake Craft Kosi Kalan',
    'Eggless cakes Kosi Kalan',
    'Home baker Kosi Kalan',
    'Birthday cakes Kosi Kalan',
    'Custom anniversary cake Kosi Kalan',
    'Bento cake Kosi Kalan',
    'Ram Nagar Kali Mandir cake bakery',
  ],
  openGraph: {
    title: 'Cake Craft | 100% Eggless Artisanal Bakery in Kosi Kalan',
    description:
      'Artisanal 100% eggless cakes baked fresh to order in Kosi Kalan. Pre-order 1 day in advance on WhatsApp: +91 8630985166.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cake Craft | 100% Eggless Artisanal Bakery in Kosi Kalan',
    description:
      '100% pure eggless custom celebration cakes baked fresh to order in Kosi Kalan. Pre-order 1 day in advance.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎂</text></svg>" />
      </head>
      <body
        className="font-sans bg-[#FDFBF7] text-[#2C1E1A] antialiased selection:bg-[#F3D5D8] selection:text-[#521C26] min-h-screen"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
