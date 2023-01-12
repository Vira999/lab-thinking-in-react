import React from 'react'

function SearchBar(props) {

  return (
    <div>
        <h1>Search</h1>
        <input type="text" size="50" onChange={props.handleInputChange}></input>
        <div>
            <input onChange={props.handleRadioButton} type="text" placeholder='Only show products in stock'></input>
            <label>Only show products in stock</label>
        </div>
    </div>
  )
}

export default SearchBar