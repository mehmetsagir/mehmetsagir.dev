import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Icon from 'src/components/Icon';
import styled from 'styled-components';

import ModalOverlay from './ModalOverlay';
import { navigations } from './variables';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router: any = useRouter();

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
    navigations.forEach((navigation) => {
      navigation.routes.forEach((route) => {
        if (route.path === router.pathname) {
          document.title = `${route.label} | Mehmet Sağır`;
        }
      });
    });
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
  padding: 4px 8px;
  border-radius: 4px;
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
