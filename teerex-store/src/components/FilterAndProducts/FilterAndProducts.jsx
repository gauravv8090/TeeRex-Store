import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ProductContext } from '../../context/productContext'
import './FilterAndProducts.css'

const FilterAndProducts = () => {

  const [data, setData] =  useState([])

  const {product, addProduct, searchedData} = useContext(ProductContext);

  // console.log(product);

  const fetchData = ()=>{
    fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
    .then((res)=>res.json())
    .then((res)=>addProduct(res))
  }
  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className='FilterAndProductsBox' >
      <div className='FilterDiv' >
        <div>
          <h3 className='filterBox'  >Color</h3>
          <div className='filterBox' >
            <input type='checkbox' name="" id="" />
            <label >Red</label>
          </div>
          <div className='filterBox'>
            <input type='checkbox' name="" id="" />
            <label >Blue</label>
          </div>
          <div className='filterBox'>
            <input type='checkbox' name="" id="" />
            <label >Green</label>
          </div>
        </div>
        <div>
          <h3 className='filterBox'  >Gender</h3>
          <div className='filterBox' >
            <input type='checkbox' name="" id="" />
            <label >Men</label>
          </div>
          <div className='filterBox'>
            <input type='checkbox' name="" id="" />
            <label >Women</label>
          </div>
        </div>
        <div>
          <h3 className='filterBox'  >Price</h3>
          <div className='filterBox' >
            <input type='checkbox' name="" id="" />
            <label >0-Rs250</label>
          </div>
          <div className='filterBox'>
            <input type='checkbox' name="" id="" />
            <label >Rs251-450</label>
          </div>
          <div className='filterBox'>
            <input type='checkbox' name="" id="" />
            <label >Rs450</label>
          </div>
        </div>
        <div>
          <h3 className='filterBox'  >Type</h3>
          <div className='filterBox' >
            <input type='checkbox' name="" id="" />
            <label >Polo</label>
          </div>
          <div className='filterBox'>
            <input type='checkbox' name="" id="" />
            <label >Hoodie</label>
          </div>
          <div className='filterBox'>
            <input type='checkbox' name="" id="" />
            <label >Basic</label>
          </div>
        </div>
      </div>
      <div className='ProductsDiv' >
        {
        searchedData.length === 0 ? product.map((ele)=>{
            return <div key={ele.id} className='product' >
              <div className='ProductTitle' >
              <h3>{ele.name}</h3>
              </div>
              <img className='image' src={ele.imageURL} alt="" />
              <div className='insideProductBox' >
                  <h4> Price: Rs.{ele.price}</h4>
                  <button className='cartButton' >Add to cart</button>
              </div> 

            </div> 
          }) :  searchedData.map((ele)=>{
            return <div key={ele.id} className='product' >
              <div className='ProductTitle' >
              <h3>{ele.name}</h3>
              </div>
              <img className='image' src={ele.imageURL} alt="" />
              <div className='insideProductBox' >
                  <h4> Price: Rs.{ele.price}</h4>
                  <button className='cartButton' >Add to cart</button>
              </div> 

            </div> 
          })
        }
      </div>
    </div>
  )
}

export default FilterAndProducts