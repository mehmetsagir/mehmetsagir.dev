import Gists from '@/components/projects/gists';
import { getGists } from '@/services/getGists';

export default async function ProjectsPage() {
  const gists = await getGists();

  return (
    <div className="flex flex-col gap-8">
      <Gists gists={gists} />
    </div>
  );
}
