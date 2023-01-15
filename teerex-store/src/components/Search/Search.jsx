import React, { useContext, useState } from "react";
import "./Search.css";
import { UilSearch } from "@iconscout/react-unicons";
import { ProductContext } from "../../context/productContext";

const Search = () => {
  const [search, setSearch] = useState("");
  const { product, searchedData, addSearchedData } = useContext(ProductContext);

  const handelSearch = () => {
    console.log(search);

    let searcharr = search.split(" ");

    let update1 = product.filter((elem) => {
      // searcharr[0] include hai kya
      let key =
        elem.name.toLowerCase() +
        elem.type.toLowerCase() +
        elem.color.toLowerCase();
      console.log(searcharr[0].toLowerCase());
      return key.includes(searcharr[0].toLowerCase());
    });

    if (searcharr.length > 1) {
      for (let i = 0; i < searcharr.length; i++) {
        update1 = update1.filter((elem) => {
          // searcharr[i] include hai kya
          let key =
            elem.name.toLowerCase() +
            elem.type.toLowerCase() +
            elem.color.toLowerCase();
          console.log(searcharr[i].toLowerCase(), "this was searched");

          return key.includes(searcharr[i].toLowerCase());
        });
      }
    }
    addSearchedData(update1);
  };
  console.log(searchedData);

  const handelChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="SearchBox">
      <input
        type="text"
        onChange={handelChange}
        placeholder="Search for Products..."
        className="InputBox"
      />
      <button className="SearchButton" onClick={handelSearch}>
        <UilSearch color="#fff" />
      </button>
    </div>
  );
};

export default Search;
