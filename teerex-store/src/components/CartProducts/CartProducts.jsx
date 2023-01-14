import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./CartProducts.css";

const CartProducts = () => {
  const { cart, addCart, removeFromCart } = useContext(CartContext);

  const handelSelectQuantity = (e) => {
    console.log(typeof cart.quantity);

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == +e.target.name) {
        if (+cart[i].quantity < +e.target.value) {
          alert(`Sorry, only ${cart[i].quantity} quantity is avaliable!!`);
          e.target.value = +cart[i].quantity;
        }
      }
    }
  };


  const handelDeleteFromCart = (id)=>{
    console.log(id);
    //   const newCart= cart.filter((el)=>{
    //     return +el.id !== id;
    //   })
    removeFromCart(id)

      console.log(cart);

  }

  if(cart.length===0){
      return <h1>Nothing in the cart</h1>
  }
  return (
    <div className="CartProducts">
      {cart.map((prod) => {
        return (
          <div key={prod.id} className="eachSingleProductOfCart">
            <img src={prod.imageURL} alt="" />
            <div className="CartNameAndPrice">
              <div className="name">{prod.name}</div>
              <div className="price">Rs. {prod.price}</div>
            </div>
            <div>
              <label>Qty:</label>
              <select name={prod.id} onClick={handelSelectQuantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <button onClick={()=>handelDeleteFromCart(prod.id)} className="DeleteFromCart" >Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartProducts;
