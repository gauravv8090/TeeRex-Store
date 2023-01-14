import React from "react";
import "./Search.css";
import { UilSearch } from "@iconscout/react-unicons";

const Search = () => {
  return (
    <div className="SearchBox">
      <input
        type="text"
        placeholder="Search for Products..."
        className="InputBox"
      />
      <button className="SearchButton">
        <UilSearch color="#fff" />
      </button>
    </div>
  );
};

export default Search;
