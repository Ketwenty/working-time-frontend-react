import React from "react";

function SearchBar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">{props.title}</a>
      <form className="form-inline" onSubmit={props.onSearch}>
        <input
          className="form-control mr-sm-2"
          type={props.inputType}
          value={props.defaultValue}
          aria-label="Search"
          placeholder={props.placeholder}
          onChange={props.onSearchValueChange}
          required
        />
        {props.children}
      </form>
    </nav>
  );
}
export default SearchBar;
