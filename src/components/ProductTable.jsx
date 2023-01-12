import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
  return (
    <div>
        <header>
        <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </table>
            <ProductRow searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm} products={props.products}></ProductRow>
        </header>
    </div>
  )
}

export default ProductTable