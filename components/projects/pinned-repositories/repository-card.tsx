import Link from 'next/link';

import { Condition } from '@/components/condition';
import ForkIcon from '@/public/svgs/fork.svg';
import GithubRepoIcon from '@/public/svgs/github-repo.svg';
import StarIcon from '@/public/svgs/star.svg';
import { PinnedRepository } from '@/types';

export function RepositoryCard({
  repo,
  description,
  languageColor,
  link,
  language,
  stars,
  forks
}: PinnedRepository) {
  return (
    <div className="flex flex-col rounded border border-zinc-700 p-4 font-semibold">
      <div className="flex items-center gap-2">
        <GithubRepoIcon className="fill-gray-300/60" />
        <Link
          href={link}
          target="_blank"
          className="text-sm text-blue-500 hover:underline"
        >
          {repo}
        </Link>
      </div>
      <p className="mt-2 flex-1 text-xs text-gray-300/60">{description}</p>
      <div className="mt-2 flex items-center gap-4 text-xs text-gray-300/60">
        <div className="flex items-center gap-1">
          <div
            className="h-3 w-3 rounded-full"
            style={{
              backgroundColor: languageColor
            }}
          />
          <span>{language}</span>
        </div>
        <Condition condition={Number(stars || 0) > 0}>
          <Link
            href={`${link}/stargazers`}
            className="group flex items-center gap-1 transition-colors hover:text-blue-500"
          >
            <StarIcon className="fill-gray-300/60 transition-colors group-hover:fill-blue-500" />
            <span>{stars}</span>
          </Link>
        </Condition>
        <Condition condition={Number(forks || 0) > 0}>
          <Link
            href={`${link}/network/members`}
            className="group flex items-center gap-1 transition-colors hover:text-blue-500"
          >
            <ForkIcon className="fill-gray-300/60 transition-colors group-hover:fill-blue-500" />
            <span>{forks}</span>
          </Link>
        </Condition>
      </div>
    </div>
  );
}
