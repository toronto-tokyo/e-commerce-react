import { useEffect, useRef, useState } from 'react';

interface IUseCollapsible {
  maxHeight: number | undefined;
}

const useCollapsible = ({ maxHeight }: IUseCollapsible) => {
  const [isOpen, setIsOpen] = useState(false);
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
  }, [isOpen, height, maxHeight]);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return {
    contentRef,
    height,
    toggleIsOpen,
  };
};
export default useCollapsible;
