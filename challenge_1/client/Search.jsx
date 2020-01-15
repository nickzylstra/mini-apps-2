import React from 'react';

const Search = (props) => {
  const { query, searchEvents } = props;
  return (
    <div className="form-group">
      <input
        className="from-control"
        value={query}
        onChange={(e) => searchEvents(e.target.value)}
      />
    </div>
  );
};

export default Search;
