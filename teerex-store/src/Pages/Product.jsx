import React from 'react'
import FilterAndProducts from '../components/FilterAndProducts/FilterAndProducts'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'

function Product() {
  return (
    <div>
        <Navbar/>
        <Search/>
        <FilterAndProducts/>
    </div>
  )
}

export default Product