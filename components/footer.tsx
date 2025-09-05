export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-700/20 pt-8">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
        <p>© 2024 Mehmet Sağır. All rights reserved.</p>
        <p className="flex items-center gap-2">
          Made with
          <span className="animate-pulse text-red-500">♥</span>
          using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
