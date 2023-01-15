import React from "react";
import CartProducts from "../components/CartProducts/CartProducts";
import Navbar from "../components/Navbar/Navbar";
import ShoppingCartHeading from "../components/ShoppingCartHeading/ShoppingCartHeading";

function Cart() {
  return (
    <div>
      <Navbar />
      <ShoppingCartHeading />
      <CartProducts />
    </div>
  );
}

export default Cart;
