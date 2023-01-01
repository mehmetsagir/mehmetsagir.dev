import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="max-w-3xl mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
