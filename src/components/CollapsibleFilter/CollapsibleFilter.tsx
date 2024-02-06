import React from 'react';
import ICollapsibleProps from './CollapsibleFilter.interface';
import useCollapsible from './CollapsibleFilter.hook';
import CollapsibleTest from 'components/Collapsible';

const CollapsibleFilter: React.FC<ICollapsibleProps> = ({
  label,
  children,
  maxHeight,
}) => {
  // const { contentRef, height, toggleIsOpen } = useCollapsible({ maxHeight });
  const { isOpen, toggleIsOpen } = useCollapsible();

  return (
    <div>
      <div onClick={toggleIsOpen}>
        <h2 className="select-none cursor-pointer">{label}</h2>
      </div>
      <CollapsibleTest isOpen={isOpen} maxHeight={maxHeight}>
        {children}
      </CollapsibleTest>
    </div>
  );
};

export default CollapsibleFilter;
