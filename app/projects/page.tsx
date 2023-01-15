import { Events } from '@/components/projects/events';
import { Gists } from '@/components/projects/gists';
import { PinnedRepositories } from '@/components/projects/pinned-repositories';
import { getEvents } from '@/services/getEvents';
import { getGists } from '@/services/getGists';
import { getPinnedRepositories } from '@/services/getPinnedRepositories';

export default async function ProjectsPage() {
  const gists = await getGists();
  const pinnedRepositories = await getPinnedRepositories();
  const events = await getEvents();

  return (
    <div className="flex flex-col gap-8">
      <Gists gists={gists} />
      <PinnedRepositories repositories={pinnedRepositories} />
      <Events events={events} />
    </div>
  );
}
