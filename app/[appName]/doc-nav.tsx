'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DocNavProps {
  appName: string;
  docs: { slug: string; label: string }[];
}

// Split out of the layout so the layout can stay a server component and read the
// filesystem; this part only needs the current path to mark the active tab.
export default function DocNav({ appName, docs }: DocNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex space-x-6">
      {docs.map(doc => {
        const isActive = pathname === `/${appName}/${doc.slug}`;
        return (
          <Link
            key={doc.slug}
            href={`/${appName}/${doc.slug}`}
            className={`text-sm transition-colors ${
              isActive
                ? 'font-medium text-blue-600 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            }`}
          >
            {doc.label}
          </Link>
        );
      })}
    </div>
  );
}
