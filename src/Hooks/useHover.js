import { useState, useRef, useCallback } from 'react';

function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const refElement = useRef();

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const callbackRef = useCallback(
    (node) => {
      if (refElement.current) {
        refElement.current.removeEventListener('mouseenter', handleMouseEnter);
        refElement.current.removeEventListener('mouseleave', handleMouseLeave);
      }

      refElement.current = node;

      if (refElement.current) {
        refElement.current.addEventListener('mouseenter', handleMouseEnter);
        refElement.current.addEventListener('mouseleave', handleMouseLeave);
      }
    },
    [handleMouseEnter, handleMouseLeave]
  );

  return [callbackRef, isHovered];
}

export default useHover;
