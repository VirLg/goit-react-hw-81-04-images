import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Searchbar = function ({ getSearch, resetpage }) {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
    if (e.target.value !== search) resetpage();
  };
  const handleSubmit = e => {
    e.preventDefault();
    getSearch(search);
    // reset();
  };
  const reset = () => {
    // setSearch('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          onChange={handleChange}
          value={search}
          name="search"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
