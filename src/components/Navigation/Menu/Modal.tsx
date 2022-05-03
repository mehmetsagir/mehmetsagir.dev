import { rgba } from 'polished';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import useClickOutside from '/src/hooks/useClickOutside';

import Header from './Header';
import MenuGroup from './MenuGroup';

type Props = {
  setShowMenu: (isOpen: boolean) => void;
};

const Modal: React.FC<Props> = ({ setShowMenu }) => {
  const [search, setSearch] = useState('');

  const ref = useRef(null);
  useClickOutside(ref, () => setShowMenu(false));

  return (
    <Container ref={ref}>
      <Header setSearch={setSearch} />
      <MenuGroup search={search} />
    </Container>
  );
};

const Container = styled.div`
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
`;

export default Modal;
