// src/components/ProductsPage.js

import React from 'react'
import { useState } from 'react'
import jsonData from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar handleInputChange={(event) => {setSearchTerm(event.target.value)}}></SearchBar>
        <ProductTable searchTerm={searchTerm} setSearchTerm={setSearchTerm} products={products}></ProductTable>
      </div>    
  )
}

export default ProductsPage