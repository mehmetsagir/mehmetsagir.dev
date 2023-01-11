import { StyledLink } from '@/components/styled-link';

export function About() {
  return (
    <>
      <h1 className="text-2xl font-semibold sm:text-4xl">
        Hi, I&apos;m Mehmet!
      </h1>
      <p className="mt-4 sm:mt-6 sm:text-xl">
        I&apos;m a full time front-end developer with a passion for learning new
        technologies. <br /> I like to write clean, efficient and maintainable
        code. And I&apos;m freelancing from time to time.
      </p>
      <p className="mt-2 sm:text-lg">
        P.S. this website is open-source and available on&nbsp;
        <StyledLink
          href="https://github.com/mehmetsagir/mehmetsagir.dev"
          target="_blank"
        >
          Github.
        </StyledLink>
      </p>
    </>
  );
}
