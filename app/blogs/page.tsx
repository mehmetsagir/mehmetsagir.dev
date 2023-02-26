import { Blogs } from '@/components/blogs';
import { getBlogs } from '@/services/getBlogs';

export const revalidate = 86400; // 60 * 60 * 24

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return <Blogs title="Blogs" data={blogs} withInfo />;
}
