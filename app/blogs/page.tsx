import { Blogs } from '@/components/blogs';
import { getBlogs } from '@/services/getBlogs';

export const revalidate = 86400; // 60 * 60 * 24

export default async function BlogsPage() {
  const blogs = await getBlogs();

  if (!blogs || blogs.length === 0) {
    return (
      <div className="pt-10 text-center">No blogs available at the moment.</div>
    );
  }

  return <Blogs title="Blogs" data={blogs} withInfo />;
}
