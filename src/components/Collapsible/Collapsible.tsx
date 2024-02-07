import React from 'react';
import ICollapsibleProps from './Collapsible.interface';
import useCollapsibleTest from './Collapsible.hook';

const Collapsible: React.FC<ICollapsibleProps> = ({
  isOpen,
  maxHeight,
  children,
}) => {
  const { contentRef, height } = useCollapsibleTest({ isOpen, maxHeight });
  return (
    <div
      ref={contentRef}
      className={`overflow-y-scroll transition-[height] duration-200 scrollbar`}
      style={{ height: `${height}px` }}
    >
      {children}
    </div>
  );
};

export default Collapsible;
