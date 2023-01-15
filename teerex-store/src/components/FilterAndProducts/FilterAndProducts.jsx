import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CartContext } from "../../context/cartContext";
import { ProductContext } from "../../context/productContext";
import "./FilterAndProducts.css";

const FilterAndProducts = () => {
  const [data, setData] = useState([]);
  const [red, setRed] = useState(true);

  const { product, addProduct, searchedData, filterProducts,addfilteredData } = useContext(ProductContext);
  const { cart, addCart } = useContext(CartContext);

  // console.log(product);

  const fetchData = () => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((res) =>{
        addProduct(res)
        addfilteredData(res)
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handelCheckBox = (e) => {
    setRed(!red);
    console.log(e.target.value);
  };

  const handelAddCart = (ele) => {
    addCart(ele);
  };
  console.log(cart, "this is cart right now");

  const selectCategoryHandler = (e)=>{
    const {checked,value}=e.target;
    if(checked){
     setData([...data,value]);
     
    }
    else{
       setData([...data.filter((e)=>e!=value)])
    }
  }
  useEffect(()=>{
    filterProducts(data)
  }, [data])
  console.log(data);

  return (
    <div className="FilterAndProductsBox">
      <div className="FilterDiv">
        <div>
          {/* color filter box */}
          <h3 className="filterBox">Color</h3>
          <div className="filterBox">
            <input
              type="checkbox"
              value={'Red'}
              // onClick={handelCheckBox}
              onChange={selectCategoryHandler}
              name=""
              id=""
            />
            <label>Red</label>
          </div>
          <div className="filterBox">
            <input type="checkbox" onChange={selectCategoryHandler}
             value={'Blue'} name="" id="" />
            <label>Blue</label>
          </div>
          <div className="filterBox">
            <input type="checkbox" value={'Green'}
            onChange={selectCategoryHandler} name="" id="" />
            <label>Green</label>
          </div>
        </div>
        <div>
          <h3 className="filterBox">Gender</h3>
          {/* Gender filter box */}
          <div className="filterBox">
            <input type="checkbox" onChange={selectCategoryHandler}
             value={'Men'} name="" id="" />
            <label>Men</label>
          </div>
          <div className="filterBox">
            <input type="checkbox" onChange={selectCategoryHandler}
             value={'Women'} name="" id="" />
            <label>Women</label>
          </div>
        </div>
        <div>
          <h3 className="filterBox">Price</h3>
          {/* price filter box */}
          <div className="filterBox">
            <input type="checkbox"onChange={selectCategoryHandler}
             value={'250'} name="" id="" />
            <label>0-Rs250</label>
          </div>
          <div className="filterBox">
            <input type="checkbox" onChange={selectCategoryHandler}
             value={'251'} name="" id="" />
            <label>Rs251-450</label>
          </div>
          <div className="filterBox">
            <input type="checkbox"onChange={selectCategoryHandler}
             value={'450'} name="" id="" />
            <label>Rs450</label>
          </div>
        </div>
        <div>
          {/* type filter box */}
          <h3 className="filterBox">Type</h3>
          <div className="filterBox">
            <input type="checkbox" onChange={selectCategoryHandler}
             value={'Polo'} name="" id="" />
            <label>Polo</label>
          </div>
          <div className="filterBox">
            <input type="checkbox" onChange={selectCategoryHandler}
             value={'Hoodie'} name="" id="" />
            <label>Hoodie</label>
          </div>
          <div className="filterBox">
            <input type="checkbox"onChange={selectCategoryHandler}
             value={'Basic'} name="" id="" />
            <label>Basic</label>
          </div>
        </div>
      </div>
      <div className="ProductsDiv">
        {searchedData.length === 0
          ? product.map((ele) => {
              return (
                <div key={ele.id} className="product">
                  <div className="ProductTitle">
                    <h3>{ele.name}</h3>
                  </div>
                  <img className="image" src={ele.imageURL} alt="" />
                  <div className="insideProductBox">
                    <h4> Price: Rs.{ele.price}</h4>
                    <button
                      className="cartButton"
                      onClick={() => handelAddCart(ele)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })
          : searchedData.map((ele) => {
              return (
                <div key={ele.id} className="product">
                  <div className="ProductTitle">
                    <h3>{ele.name}</h3>
                  </div>
                  <img className="image" src={ele.imageURL} alt="" />
                  <div className="insideProductBox">
                    <h4> Price: Rs.{ele.price}</h4>
                    <button
                      className="cartButton"
                      onClick={() => handelAddCart(ele)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default FilterAndProducts;
