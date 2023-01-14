import { createContext, useState } from "react";

export const CartContext = createContext();


const CartContextProvider = ({ children }) => {

    const [cart, SetCart] = useState([]);
    // const [searchedData, setSearchedData ] = useState([]);
    const addCart = (product)=>{
        var alreadyPresent = false;
        if(cart.length>0){
            cart.map((el)=>{
                if(el.id === product.id){
                    alreadyPresent = true
                }
            })
        }
        if(!alreadyPresent){
            SetCart([...cart, product]);
        }
    }


  return (
    <CartContext.Provider value={{cart, addCart}}  >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;