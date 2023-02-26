import { About } from '@/components/about';
import { Blogs } from '@/components/blogs';
import { SocialLinks } from '@/components/social-links';
import { StyledLink } from '@/components/styled-link';
import { getBlogs } from '@/services/getBlogs';

export const revalidate = 86400; // 60 * 60 * 24

export default async function HomePage() {
  const blogs = await getBlogs();

  return (
    <div className="pt-10">
      <About />
      <SocialLinks className="mt-4" />
      <Blogs
        title="Latest Blogs"
        data={blogs.slice(0, 4)}
        actions={<StyledLink href="/blogs">See all</StyledLink>}
      />
    </div>
  );
}
