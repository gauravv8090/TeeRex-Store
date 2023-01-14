import { createContext, useState } from "react";

export const ProductContext = createContext();


const ProductContextProvider = ({ children }) => {

    const [product, setProduct] = useState([]);
    const [searchedData, setSearchedData ] = useState([]);

    const addProduct = (product)=>{
        setProduct(product);
    }
    const addSearchedData = (product)=>{
        setSearchedData(product);
    }

  return (
    <ProductContext.Provider value={{product, addProduct, searchedData, addSearchedData}}  >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;