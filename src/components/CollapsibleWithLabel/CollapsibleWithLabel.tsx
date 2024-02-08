import React from 'react';
import ICollapsibleWithLabelProps, {
  ColorMode,
} from './CollapsibleWithLabel.interface';
import useCollapsible from './CollapsibleWithLabel.hook';
import Collapsible from 'components/Collapsible';
import CollapsibleToggleIcon from 'components/CollapsibleToggleIcon';

const CollapsibleWithLabel: React.FC<ICollapsibleWithLabelProps> = ({
  label,
  children,
  maxHeight,
  colorMode,
}) => {
  // const { contentRef, height, toggleIsOpen } = useCollapsible({ maxHeight });
  const { isOpen, toggleIsOpen } = useCollapsible();

  const colorModeLabelStyles: Record<ColorMode, string> = {
    blue: 'hover:bg-blue-100',
    gray: 'hover:bg-gray-300',
  };

  return (
    <div>
      <div
        onClick={toggleIsOpen}
        className={`flex items-center cursor-pointer font-bold py-3 px-3 ${colorMode && colorModeLabelStyles[colorMode]}`}
      >
        <h2 className="grow select-none">{label}</h2>
        <CollapsibleToggleIcon isOpen={isOpen} colorMode={colorMode} />
      </div>
      <Collapsible isOpen={isOpen} maxHeight={maxHeight} colorMode={colorMode}>
        {children}
      </Collapsible>
    </div>
  );
};

export default CollapsibleWithLabel;
