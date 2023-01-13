import { StyledLink } from '@/components/styled-link';

import { Section } from './section';

interface GistsProps {
  gists: {
    html_url: string;
    description: string;
  }[];
}

export function Gists({ gists = [] }: GistsProps) {
  return (
    <Section title="Gists" condition={gists.length > 0}>
      <div className="flex flex-col gap-y-2">
        {gists.map((gist, index) => (
          <div key={index} className="rounded bg-neutral-800/25 p-4">
            <StyledLink
              href={gist.html_url}
              className="text-sm font-semibold text-gray-300/80"
              target="_blank"
            >
              {gist.description}
            </StyledLink>
          </div>
        ))}
      </div>
    </Section>
  );
}
