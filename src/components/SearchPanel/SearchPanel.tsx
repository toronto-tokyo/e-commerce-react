import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import ISearchPanelProps from './SearchPanel.interface';

const SearchPanel: React.FC<ISearchPanelProps> = ({
  searchValue,
  handleSearch,
}) => {
  const [inputValue, setInputValue] = useState(searchValue);
  const [isFocus, setIsFocus] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFocus(false);
    handleSearch(inputValue);
  };

  return (
    <form
      className={`m-auto max-w-96 border rounded overflow-hidden flex justify-center ${isFocus ? 'border-slate-500' : ''}`}
      onSubmit={handleSubmit}
    >
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        className="outline-none py-2 px-3 grow"
        placeholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white w-10 flex items-center justify-center"
      >
        <IoMdSearch />
      </button>
    </form>
  );
};

export default SearchPanel;
