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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var win = typeof window !== 'undefined' ? window : null;
                  if (win) {
                    // 1. If window.fetch has only a getter, provide a setter to prevent TypeError
                    var winDesc = Object.getOwnPropertyDescriptor(win, 'fetch');
                    if (winDesc && winDesc.get && !winDesc.set && winDesc.configurable) {
                      Object.defineProperty(win, 'fetch', {
                        get: winDesc.get,
                        set: function(v) {
                          try {
                            Object.defineProperty(win, 'fetch', {
                              value: v,
                              writable: true,
                              configurable: true,
                              enumerable: true
                            });
                          } catch (_) {}
                        },
                        configurable: true,
                        enumerable: winDesc.enumerable !== undefined ? winDesc.enumerable : true
                      });
                    }

                    // 2. Also check Window.prototype.fetch
                    var proto = win.Window && win.Window.prototype;
                    if (proto) {
                      var protoDesc = Object.getOwnPropertyDescriptor(proto, 'fetch');
                      if (protoDesc && protoDesc.get && !protoDesc.set && protoDesc.configurable) {
                        Object.defineProperty(proto, 'fetch', {
                          get: protoDesc.get,
                          set: function(v) {
                            try {
                              Object.defineProperty(this, 'fetch', {
                                value: v,
                                writable: true,
                                configurable: true,
                                enumerable: true
                              });
                            } catch (_) {}
                          },
                          configurable: true,
                          enumerable: protoDesc.enumerable !== undefined ? protoDesc.enumerable : true
                        });
                      }
                    }

                    // 3. If window.fetch is a function, make it a standard writable property
                    try {
                      if (typeof win.fetch === 'function') {
                        var origFetch = win.fetch;
                        Object.defineProperty(win, 'fetch', {
                          value: origFetch,
                          writable: true,
                          configurable: true,
                          enumerable: true
                        });
                      }
                    } catch (_) {}

                    // 4. Suppress the error if any nomodule or external polyfill triggers it
                    var origOnError = win.onerror;
                    win.onerror = function(msg, url, line, col, error) {
                      var str = typeof msg === 'string' ? msg : (error && error.message ? error.message : '');
                      if (str.indexOf('fetch') !== -1 && (str.indexOf('getter') !== -1 || str.indexOf('Cannot set property') !== -1)) {
                        return true;
                      }
                      if (origOnError) return origOnError.apply(this, arguments);
                    };

                    win.addEventListener('error', function(e) {
                      var msg = (e && e.message) ? String(e.message) : '';
                      if (msg.indexOf('fetch') !== -1 && (msg.indexOf('getter') !== -1 || msg.indexOf('Cannot set property') !== -1)) {
                        if (e.preventDefault) e.preventDefault();
                        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
                        return true;
                      }
                    }, true);
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
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
