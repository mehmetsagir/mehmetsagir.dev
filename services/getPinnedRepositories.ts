export async function getPinnedRepositories() {
  const response = await fetch(
    `https://gh-pinned-repos.egoist.dev/?username=${process.env.GITHUB_USERNAME}`
  );
  if (!response.ok) return [];

  const data = await response.json();
  return data;
}
