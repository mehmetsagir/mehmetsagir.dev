import './globals.css';

import { Menu } from '@/components/header';

import AnalyticsWrapper from './analytics';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="relative mx-auto max-w-3xl px-6 py-4 lg:px-0">
          <svg
            className="pointer-events-none fixed left-0 top-0 isolate z-50 opacity-70 mix-blend-soft-light"
            width="100%"
            height="100%"
          >
            <filter id="pedroduarteisalegend">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.80"
                numOctaves="4"
                stitchTiles="stitch"
              ></feTurbulence>
            </filter>
            <rect
              width="100%"
              height="100%"
              filter="url(#pedroduarteisalegend)"
            ></rect>
          </svg>
          <Menu />
          <main className="mt-8">{children}</main>
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
