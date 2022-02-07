import { rgba } from 'polished';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import Modal from './Modal';

type Props = {
  setShowMenu: (isOpen: boolean) => void;
};

const ModalOverlay: React.FC<Props> = ({ setShowMenu }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return createPortal(
    <Container>
      <Modal setShowMenu={setShowMenu} />
    </Container>,
    document.body
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  position: fixed;
  inset: 0;
  background: ${({ theme }) => rgba(theme.colors.bg, 0.8)};
  backdrop-filter: blur(1.2px);
  padding-top: ${({ theme }) => theme.space[6]};
`;

export default ModalOverlay;
