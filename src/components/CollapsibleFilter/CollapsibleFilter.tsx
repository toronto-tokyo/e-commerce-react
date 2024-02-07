import React from 'react';
import ICollapsibleProps from './CollapsibleFilter.interface';
import useCollapsible from './CollapsibleFilter.hook';
import CollapsibleTest from 'components/Collapsible';
import CollapsibleToggleIcon from 'components/CollapsibleToggleIcon';

const CollapsibleFilter: React.FC<ICollapsibleProps> = ({
  label,
  children,
  maxHeight,
}) => {
  // const { contentRef, height, toggleIsOpen } = useCollapsible({ maxHeight });
  const { isOpen, toggleIsOpen } = useCollapsible();

  return (
    <div>
      <div
        onClick={toggleIsOpen}
        className="flex items-center cursor-pointer bold font-bold py-3 px-3 hover:bg-blue-100"
      >
        <h2 className="grow select-none">{label}</h2>
        <CollapsibleToggleIcon isOpen={isOpen} />
      </div>
      <CollapsibleTest isOpen={isOpen} maxHeight={maxHeight}>
        {children}
      </CollapsibleTest>
    </div>
  );
};

export default CollapsibleFilter;
