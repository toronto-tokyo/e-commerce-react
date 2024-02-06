import { useEffect, useRef, useState } from 'react';

const useSortPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOuterClick = (e: MouseEvent) => {
      if (isOpen && !panelRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener('click', handleOuterClick);
    return () => {
      document.body.removeEventListener('click', handleOuterClick);
    };
  }, [isOpen]);

  return {
    isOpen,
    panelRef,
    inputRef,
    setIsOpen,
  };
};

export default useSortPanel;
