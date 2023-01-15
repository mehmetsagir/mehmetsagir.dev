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
