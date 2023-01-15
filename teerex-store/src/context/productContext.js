import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const addProduct = (product) => {
    setProduct(product);
  };
  const addSearchedData = (product) => {
    setSearchedData(product);
  };
  const addfilteredData = (product) => {
    setFilteredData(product);
  };
  const filterProducts = (filterData) => {
    let result = filteredData.filter((e) => {
      if (filterData.includes(e.color)) {
        return e;
      } else if (filterData.includes(e.gender)) {
        return e;
      } else if (filterData.includes(e.type)) {
        return e;
      } else if (filterData.includes("250")) {
        return e.price <= 250;
      } else if (filterData.includes("251")) {
        return e.price >= 251 && e.price <= 450;
      } else if (filterData.includes("450")) {
        return e.price >= 450;
      }
    });
    console.log(result, "filtered result");

    if (result.length > 0) {
      setProduct(result);
    } else {
      setProduct(filteredData);
    }
    // setFilteredData( [...result] )
    //  setProduct(result)
  };
  console.log(filteredData, "filtered data resukt");
  return (
    <ProductContext.Provider
      value={{
        product,
        addProduct,
        searchedData,
        addSearchedData,
        filterProducts,
        addfilteredData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
