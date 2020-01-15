import React from 'react';

const Search = (props) => {
  const { query, searchEvents } = props;
  return (
    <div className="form-group">
      <label htmlFor="searchBar">
        Search:
        <input
          className="from-control"
          id="searchBar"
          value={query}
          onChange={(e) => searchEvents(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Search;
