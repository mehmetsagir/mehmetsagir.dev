export async function getGists() {
  const response = await fetch(
    'https://api.github.com/users/mehmetsagir/gists'
  );
  if (!response.ok) return [];

  const data = await response.json();
  return data;
}
