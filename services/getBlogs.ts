export async function getBlogs() {
  const response = await fetch(`${process.env.BASE_URL}/api/blogs`);
  if (!response.ok) return [];

  const data = await response.json();
  return data;
}
