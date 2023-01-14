import React, { useContext, useState } from "react";
import "./Search.css";
import { UilSearch } from "@iconscout/react-unicons";
import { ProductContext } from "../../context/productContext";

const Search = () => {

  const [search, setSearch] = useState("");
  const {product, searchedData, addSearchedData} = useContext(ProductContext);

  const handelSearch = ()=>{
    console.log(search);

    let searcharr = search.split(" ");


   let update1 = product.filter((elem)=>{
      // searcharr[0] include hai kya
      let key = elem.name + elem.type + elem.color;
      return key.includes(searcharr[0]);
    })

    if(searcharr.length>1){
      for(let i=1; i<searcharr.length; i++){
        update1 = update1.filter((elem)=>{
          // searcharr[i] include hai kya
          let key = elem.name + elem.type + elem.color;

          return key.includes(searcharr[i]);
        }) 
      }
    }
    addSearchedData(update1);
  }
  console.log(searchedData)

  const handelChange = (e)=>{
    setSearch(e.target.value);
  }

  return (
    <div className="SearchBox">
      <input
        type="text"
        onChange={handelChange}
        placeholder="Search for Products..."
        className="InputBox"
      />
      <button className="SearchButton" onClick={handelSearch} >
        <UilSearch color="#fff" />
      </button>
    </div>
  );
};

export default Search;
