import React from 'react';
import ICollapsibleProps from './Collapsible.interface';
import useCollapsible from './Collapsible.hook';

const Collapsible: React.FC<ICollapsibleProps> = ({
  label,
  children,
  maxHeight,
}) => {
  const { contentRef, height, toggleIsOpen } = useCollapsible({ maxHeight });

  return (
    <div>
      <div onClick={toggleIsOpen}>
        <h2 className="select-none cursor-pointer">{label}</h2>
      </div>
      <div
        ref={contentRef}
        className={`pl-3 overflow-y-scroll transition-[height] duration-200`}
        style={{ height: `${height}px` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
