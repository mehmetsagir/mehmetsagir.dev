export interface BlogTypes {
  title: string | JSX.Element;
  link: string;
  date: string;
  content: string | JSX.Element;
  tags: string[];
}

export interface PinnedRepository {
  owner: string;
  repo: string;
  link: string;
  description: string;
  image: string;
  website: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: string;
}

export interface EventProps {
  type: 'PushEvent' | 'ForkEvent' | 'PullRequestEvent' | 'IssuesEvent';
  created_at: string;
  repo_name: string;
  repo_url: string;
  actor: string;
  actor_link: string;
  title: string;
  link: string;
  commits?: {
    message: string;
    link: string;
  }[];
}
