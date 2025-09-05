import { About } from '@/components/about';
import { SocialLinks } from '@/components/social-links';

export default function HomePage() {
  return (
    <div className="pt-10">
      <About />
      <SocialLinks className="mt-4" />
    </div>
  );
}
