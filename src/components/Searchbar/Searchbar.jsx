import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    search: '',
  };
  handleChange = e => {
    this.setState({
      search: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getSearch(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      search: '',
    });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.search}
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
  }
}
