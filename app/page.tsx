import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Skills } from '@/components/skills';
import { SocialLinks } from '@/components/social-links';
import { Status } from '@/components/status';

export default function HomePage() {
  return (
    <>
      <div className="space-y-8 pb-16 pt-10">
        <div className="animate-fadeInUp">
          <Status />
          <About />
          <SocialLinks className="mt-4" />
        </div>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <Skills />
        </div>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <Experience />
        </div>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}
