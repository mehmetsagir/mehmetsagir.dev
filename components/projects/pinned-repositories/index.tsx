import { Section } from '@/components/projects/section';
import { PinnedRepository } from '@/types';

import { RepositoryCard } from './repository-card';

interface PinnedRepositoriesProps {
  repositories: PinnedRepository[];
}

export function PinnedRepositories({
  repositories = []
}: PinnedRepositoriesProps) {
  return (
    <Section title="Pinned Repositories" condition={repositories.length > 0}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {repositories.map((repo: PinnedRepository, index) => (
          <RepositoryCard key={index} {...repo} />
        ))}
      </div>
    </Section>
  );
}
