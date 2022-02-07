import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Icon from 'src/components/Icon';
import styled from 'styled-components';

import ModalOverlay from './ModalOverlay';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (
        (e.metaKey || e.altKey) &&
        e.key === 'k' &&
        e.defaultPrevented === false
      ) {
        setIsOpen((isOpen) => !isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <>
      <Container onClick={() => setIsOpen(true)}>
        <Icon name="burger" size="100%" />
      </Container>
      {isOpen && <ModalOverlay setShowMenu={setIsOpen} />}
    </>
  );
};

const Container = styled.button`
  background: none;
  width: 40px;
  height: 40px;
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[2]}`};
  border-radius: ${({ theme }) => theme.radii.small};
  cursor: pointer;
  transition: 200ms;

  svg {
    fill: #fff;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export default Menu;
