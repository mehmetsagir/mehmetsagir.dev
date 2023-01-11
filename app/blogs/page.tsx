import { Blogs } from '@/components/blogs';
import { getBlogs } from '@/services/getBlogs';

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return <Blogs title="Blogs" data={blogs} withInfo />;
}
