import { rgba } from 'polished';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import useOnClickOutside from '../hooks/useClickOutside';

type Props = {
  show?: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ show, onClose, children }) => {
  if (!show) return null;
  return <ModalContent onClose={onClose}>{children}</ModalContent>;
};

const ModalContent: React.FC<Props> = ({ onClose, children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    if (isMounted) {
      onClose();
    }
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return createPortal(
    <Overlay>
      <div className="content" ref={ref}>
        {children}
      </div>
    </Overlay>,
    document.body
  );
};

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  position: fixed;
  inset: 0;
  background: ${({ theme }) => rgba(theme.colors.bg, 0.8)};
  backdrop-filter: blur(1.2px);
  padding-top: 128px;

  .content {
    max-height: 400px;
    width: 95%;
    max-width: 540px;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => rgba(theme.colors.primary, 0.8)};
    border-radius: 8px;
    padding: 16px;
    overflow-y: auto;
    animation: open 0.3s ease-in-out forwards;

    @keyframes open {
      0% {
        transform: scale(0.97);
      }
      50% {
        transform: scale(1.03);
      }
      100% {
        transform: scale(1);
      }
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default Modal;
