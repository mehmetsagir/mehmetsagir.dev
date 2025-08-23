import { Events } from '@/components/projects/events';
import { Gists } from '@/components/projects/gists';
import { PinnedRepositories } from '@/components/projects/pinned-repositories';
import { getEvents } from '@/services/getEvents';
import { getGists } from '@/services/getGists';
import { getPinnedRepositories } from '@/services/getPinnedRepositories';

export const revalidate = 7200; // 60 * 60 * 2

export default async function ProjectsPage() {
  const gists = await getGists();
  const pinnedRepositories = await getPinnedRepositories();
  const events = await getEvents();

  return (
    <div className="flex flex-col gap-8">
      {gists && gists.length > 0 && <Gists gists={gists} />}
      {pinnedRepositories && pinnedRepositories.length > 0 && (
        <PinnedRepositories repositories={pinnedRepositories} />
      )}
      {events && events.length > 0 && <Events events={events} />}
      {(!gists || gists.length === 0) &&
        (!pinnedRepositories || pinnedRepositories.length === 0) &&
        (!events || events.length === 0) && (
          <div className="text-center py-10">
            No project data available at the moment.
          </div>
        )}
    </div>
  );
}
