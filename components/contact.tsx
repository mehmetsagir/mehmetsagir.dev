import { StyledLink } from '@/components/styled-link';

export function Contact() {
  return (
    <div className="mt-14">
      <h2 className="mb-6 text-xl font-semibold text-gray-200">Get In Touch</h2>
      <div className="rounded-xl border border-gray-700/20 bg-neutral-800/30 p-6">
        <p className="mb-6 text-gray-300">
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you!
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <StyledLink
            href="mailto:mehmet@example.com"
            className="inline-flex items-center justify-center rounded-lg border border-blue-600/20 bg-blue-600/10 px-6 py-3 font-medium text-blue-400 transition-all duration-300 hover:border-blue-600/40 hover:bg-blue-600/20 hover:text-blue-300"
          >
            Send Email
          </StyledLink>

          <StyledLink
            href="https://linkedin.com/in/mehmetsagir"
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg border border-gray-600/20 bg-neutral-700/30 px-6 py-3 font-medium text-gray-300 transition-all duration-300 hover:border-gray-500/40 hover:bg-neutral-700/60 hover:text-white"
          >
            LinkedIn
          </StyledLink>
        </div>
      </div>
    </div>
  );
}
