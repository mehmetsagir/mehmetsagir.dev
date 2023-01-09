import './globals.css';

import Menu from '@/components/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="max-w-3xl mx-auto py-4 px-6 lg:px-0 relative">
          <svg
            className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light top-0 left-0"
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
      </body>
    </html>
  );
}
