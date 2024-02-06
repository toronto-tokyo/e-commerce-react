import { useEffect, useRef, useState } from 'react';

interface IUseCollapsible {
  isOpen: boolean;
  maxHeight: number | undefined;
}

const useCollapsible = ({ maxHeight, isOpen }: IUseCollapsible) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      let height = contentRef.current?.scrollHeight || 0;
      if (maxHeight) {
        height = height > maxHeight ? maxHeight : height;
      }
      setHeight(height);
    } else {
      setHeight(0);
    }
  }, [isOpen, maxHeight]);

  return {
    contentRef,
    height,
  };
};
export default useCollapsible;
