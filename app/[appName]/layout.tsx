'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    appName: string;
  };
}

const DOC_TYPES = [
  { slug: 'permissions', label: 'Permissions' },
  { slug: 'privacy-policy', label: 'Privacy Policy' },
  { slug: 'user-agreement', label: 'User Agreement' }
];

export default function AppDocsLayout({ children, params }: LayoutProps) {
  const { appName } = params;
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <nav className="mb-8 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between py-4">
          <div>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              ← Back to Home
            </Link>
          </div>
          <div className="flex space-x-6">
            {DOC_TYPES.map(doc => {
              const isActive = pathname === `/${appName}/${doc.slug}`;
              return (
                <Link
                  key={doc.slug}
                  href={`/${appName}/${doc.slug}`}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-blue-600 font-medium dark:text-blue-400'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                  }`}
                >
                  {doc.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
