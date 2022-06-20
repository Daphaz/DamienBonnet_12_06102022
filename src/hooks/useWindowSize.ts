import { useEffect, useState } from 'react';

/**
 * @description This is the return interface of hook
 */
export interface WindowSize {
  /**
   *  width number of the viewport
   */
  width: number;
  /**
   *  height number of the viewport
   */
  height: number;
}

/**
 * @description This is a custom hook for get the window sizes
 */
export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleSize();
    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
};
