import React from 'react';
import ICollapsibleProps, { ColorMode } from './Collapsible.interface';
import useCollapsibleTest from './Collapsible.hook';

const Collapsible: React.FC<ICollapsibleProps> = ({
  isOpen,
  maxHeight,
  children,
  colorMode,
}) => {
  const { contentRef, height } = useCollapsibleTest({ isOpen, maxHeight });

  const colorModeStyles: Record<ColorMode, string> = {
    blue: 'scrollbar-blue',
    gray: 'scrollbar-gray',
  };

  return (
    <div
      ref={contentRef}
      className={`overflow-y-scroll transition-[height] duration-200 ${colorMode && colorModeStyles[colorMode]}`}
      style={{ height: `${height}px` }}
    >
      {children}
    </div>
  );
};

export default Collapsible;
