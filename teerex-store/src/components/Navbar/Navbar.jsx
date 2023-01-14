import React from "react";
import "./Navbar.css";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left">
        <h1>TeeRex Store</h1>
      </div>

      <div className="right">
        <Link to={"/"} className="ProductTag">
          <h1> Products</h1>
        </Link>
        <Link to={"/cart"} className="CartIcon">
          <UilShoppingCartAlt size="50" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
