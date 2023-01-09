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
        <div className="max-w-3xl mx-auto p-4">
          <Menu />
          <main className="mt-10 sm:mt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
