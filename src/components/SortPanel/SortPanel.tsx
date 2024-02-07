import React from 'react';
import ISortPanelProps from './SortPanel.interface';
import CollapsibleTest from 'components/Collapsible';
import useSortPanel from './SortPanel.hook';
import CollapsibleToggleIcon from 'components/CollapsibleToggleIcon';

const SortPanel: React.FC<ISortPanelProps> = ({
  selectedValue,
  values,
  handleChange,
}) => {
  const { isOpen, inputRef, panelRef, setIsOpen } = useSortPanel();

  return (
    <div className="relative w-max" ref={panelRef}>
      <div
        className="flex bg-white"
        ref={inputRef}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <input
          className="outline-none cursor-pointer pl-2"
          value={selectedValue}
          readOnly
        />
        <CollapsibleToggleIcon isOpen={isOpen} />
      </div>
      <div
        className={`w-full absolute z-10 bg-white top-[${inputRef.current?.scrollHeight}px] left-0`}
      >
        <CollapsibleTest isOpen={isOpen} maxHeight={200}>
          <ul>
            {values.map((item) => (
              <li
                key={item.value}
                onClick={() => {
                  setIsOpen(false);
                  handleChange(item.value);
                }}
                className="cursor-pointer hover:bg-blue-100 py-1 px-2"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </CollapsibleTest>
      </div>
    </div>
  );
};

export default SortPanel;
