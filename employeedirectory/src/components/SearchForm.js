import React from "react";

function SearchForm(props) {
  return (
    <form className="mb-8">
      <div className="form-group text-center">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Here!"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;