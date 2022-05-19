import Code from '/src/components/Code';
import Snippet from '/src/components/Snippets/Snippet';

const useViewportWidth = () => {
  const code = `
import { useCallback, useState } from 'react';

const browser = typeof window !== 'undefined';

const useViewportWidth = () => {
  const [width, setWidth] = useState(browser ? window.innerWidth : 0);

  const handleSize = useCallback(() => {
    setWidth(window.innerWidth || 0);
  }, []);

  if (browser) {
    window.addEventListener('resize', handleSize, { passive: true });
    window.addEventListener('orientationchange', handleSize, { passive: true });
  }

  return width;
};

export default useViewportWidth;
  `;

  return (
    <>
      <Snippet title="useViewportWidth">
        <Code language="javascript" code={code} />
      </Snippet>
    </>
  );
};

export default useViewportWidth;
