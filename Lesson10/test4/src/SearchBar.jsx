import React from "react";

const SearchBar = ({ handleChange }) => {
  return (
    <form>
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <label>
        <input type="checkbox" onChange={handleChange} /> Only show products in
        stock
      </label>
    </form>
  );
};

export default SearchBar;
