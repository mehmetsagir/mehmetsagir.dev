import Link from 'next/link';

import { availableDocs } from '@/lib/app-docs';

import DocNav from './doc-nav';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    appName: string;
  }>;
}

// A server component so the tabs can be built from the files each app actually has.
// It used to render a fixed three-tab list for every app, which meant sage showed
// Permissions and User Agreement (neither exists — both 404 on click) and hid its
// Support page, the one Apple links to from the App Store.
export default async function AppDocsLayout({ children, params }: LayoutProps) {
  const { appName } = await params;
  const docs = availableDocs(appName);

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
          <DocNav
            appName={appName}
            docs={docs.map(({ slug, label }) => ({ slug, label }))}
          />
        </div>
      </nav>
      {children}
    </div>
  );
}
