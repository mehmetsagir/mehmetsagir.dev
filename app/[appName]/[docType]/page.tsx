import fs from 'fs';
import { notFound } from 'next/navigation';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

interface PageProps {
  params: {
    appName: string;
    docType: string;
  };
}

const DOC_TYPE_MAPPING = {
  permissions: 'PERMISSIONS.md',
  'privacy-policy': 'PRIVACY_POLICY.md',
  'user-agreement': 'USER_AGREEMENT.md'
} as const;

async function getDocContent(appName: string, docType: string) {
  const fileName = DOC_TYPE_MAPPING[docType as keyof typeof DOC_TYPE_MAPPING];
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
  const { appName, docType } = params;

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
