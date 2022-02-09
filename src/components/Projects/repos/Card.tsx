import { rgba } from 'polished';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  repoUrl: string;
  image: string;
  url: string;
};

const Card: React.FC<Props> = ({ title, image, repoUrl, url }) => {
  const [projectLinkToReview, setProjectLinkToReview] = useState<null | string>(
    null
  );

  useEffect(() => {
    const closeModal = (e: any) => {
      if (projectLinkToReview && e.key === 'Escape') {
        setProjectLinkToReview(null);
        document.removeEventListener('keydown', closeModal);
      }
    };
    if (projectLinkToReview) {
      document.addEventListener('keydown', closeModal);
    }
  }, [projectLinkToReview]);

  return (
    <>
      <Container>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/repos/${image}`}
          alt={title}
          onClick={() => setProjectLinkToReview(url)}
          title="Inspect"
        />
        <a
          href={`https://github.com/mehmetsagir/${repoUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </Container>
      {projectLinkToReview && (
        <ReviewWrapper onClick={() => setProjectLinkToReview(null)}>
          <iframe src={projectLinkToReview} />
        </ReviewWrapper>
      )}
    </>
  );
};

const Container = styled.div`
  position: relative;
  border-radius: 7px;
  padding: 6px;
  background: ${({ theme }) => theme.colors.primary};
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 2px;
    cursor: zoom-in;
  }
  a {
    display: block;
    font-size: 16px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 10px 0;
    font-weight: 400;
    transition: 200ms;
    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

const ReviewWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: ${({ theme }) => rgba(theme.colors.bg, 0.8)};
  backdrop-filter: blur(1.2px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;

  iframe {
    width: 80%;
    height: 80%;
    object-fit: contain;
    background: #fff;
    margin: auto;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    @media (max-width: 768px) {
      width: 95%;
    }
  }
`;

export default Card;
