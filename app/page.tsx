import { About } from '@/components/about';
import { Blogs } from '@/components/blogs';
import { StyledLink } from '@/components/styled-link';
import { getBlogs } from '@/services/getBlogs';

export default async function HomePage() {
  const blogs = await getBlogs();

  return (
    <div className="pt-10">
      <About />
      <Blogs
        title="Latest Blogs"
        data={blogs.slice(0, 4)}
        actions={<StyledLink href="/blogs">See all</StyledLink>}
      />
    </div>
  );
}
