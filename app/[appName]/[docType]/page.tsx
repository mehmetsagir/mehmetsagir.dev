import fs from 'fs';
import { notFound } from 'next/navigation';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

import { docFileName } from '@/lib/app-docs';

interface PageProps {
  params: Promise<{
    appName: string;
    docType: string;
  }>;
}

async function getDocContent(appName: string, docType: string) {
  const fileName = docFileName(docType);
  if (!fileName) return null;

  const docPath = path.join(process.cwd(), 'app-docs', appName, fileName);

  try {
    const content = fs.readFileSync(docPath, 'utf8');
    return content;
  } catch {
    return null;
  }
}

export default async function DocPage({ params }: PageProps) {
  const { appName, docType } = await params;

  const content = await getDocContent(appName, docType);

  if (!content) {
    notFound();
  }

  const title = docType
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{title}</h1>
        <p className="capitalize text-gray-600 dark:text-gray-400">{appName}</p>
      </div>
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
