export async function getGists() {
  const response = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/gists`
  );
  if (!response.ok) return [];

  const data = await response.json();
  return data;
}
