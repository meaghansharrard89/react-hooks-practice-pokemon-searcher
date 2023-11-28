import React, { useState } from "react";

function Search( { pokemon, onSearch } ) {

  function handleChange(e) {
    onSearch(e.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
