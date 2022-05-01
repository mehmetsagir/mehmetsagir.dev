import Code from '/src/components/Code';
import Snippet from '/src/components/Snippets/Snippet';

const useIsMountFirstTimes = () => {
  const code = `
import { useRef, useEffect } from 'react';

const useIsMountFirstTime = () => {
  const isMountFirstTimeRef = useRef(true);
  useEffect(() => {
      isMountFirstTimeRef.current = false;
  }, []);  
  return isMountFirstTimeRef.current;
};

export default useIsMountFirstTime;
  `;

  return (
    <Snippet title="useIsMountFirstTime">
      <Code language="javascript" code={code} />
    </Snippet>
  );
};

export default useIsMountFirstTimes;
