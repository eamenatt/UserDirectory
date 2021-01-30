import React from "react";
import SearchName from "./SearchName.js";
import "./styles.css";

function SearchBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse row" id="navbarNav">
          <SearchName />
      </div>
    </nav>
  );
}
export default SearchBar;