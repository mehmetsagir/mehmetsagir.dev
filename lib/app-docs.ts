import fs from 'fs';
import path from 'path';

// Single source of truth for the legal/support pages under /<appName>/<docType>.
// Both the page and the nav read from here so a doc type can never be routable but
// missing from the tabs, or listed in the tabs but 404 when clicked.
export const DOC_TYPES = [
  { slug: 'permissions', label: 'Permissions', file: 'PERMISSIONS.md' },
  { slug: 'privacy-policy', label: 'Privacy Policy', file: 'PRIVACY_POLICY.md' },
  { slug: 'support', label: 'Support', file: 'SUPPORT.md' },
  { slug: 'user-agreement', label: 'User Agreement', file: 'USER_AGREEMENT.md' }
] as const;

export type DocType = (typeof DOC_TYPES)[number];

const docsRoot = path.join(process.cwd(), 'app-docs');

export function docFileName(docType: string) {
  return DOC_TYPES.find(d => d.slug === docType)?.file ?? null;
}

// The docs an app actually ships. Apps carry different sets — pixora has permissions
// and a user agreement, sage has a support page instead — so the tabs are derived from
// what is on disk rather than from one fixed list that is wrong for every app but one.
export function availableDocs(appName: string): DocType[] {
  return DOC_TYPES.filter(doc =>
    fs.existsSync(path.join(docsRoot, appName, doc.file))
  );
}
