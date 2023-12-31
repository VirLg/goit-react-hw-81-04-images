import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { SearchbarDiv, Form, Input } from './SearchBar.styled';

const Searchbar = function ({ getSearch, resetpage, setRenderLoadMore }) {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
    if (e.target.value === '') setRenderLoadMore(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.value !== search) {
      resetpage();
      getSearch(search);
    }

    // reset();
  };

  return (
    <SearchbarDiv className="searchbar">
      <Form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <Input
          onChange={handleChange}
          value={search}
          name="search"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </SearchbarDiv>
  );
};

export default Searchbar;
Searchbar.propTypes = {
  getSearch: PropTypes.func,
  resetpage: PropTypes.func,
};
