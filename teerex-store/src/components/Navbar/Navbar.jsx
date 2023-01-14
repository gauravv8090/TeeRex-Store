import React from "react";
import "./Navbar.css";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Navbar = () => {
  const {cart} = useContext(CartContext);
  return (
    <div className="Navbar">
      <div className="left">
        <h1>TeeRex Store</h1>
      </div>

      <div className="right">
        <Link to={"/"} className="ProductTag">
          <h1> Products</h1>
        </Link>
        <div className="CartLogoDiv" >
        <Link to={"/cart"} className="CartIcon">
          <UilShoppingCartAlt size="50" />
        </Link>
          <h2>{cart.length>0 ? cart.length : ''}</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
