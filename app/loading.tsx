import About from '@/components/about';
import BlogsLoader from '@/components/blogs/loader';

export default function HomeLoading() {
  return (
    <div className="pt-10">
      <About />
      <BlogsLoader title="Latest Blogs" />
    </div>
  );
}
