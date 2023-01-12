import React from 'react';
import './App.css';
import jsondata from './data.json';
import ProductsPage from './components/ProductsPage';

function App() {
  return (
    <div className="App">
       <ProductsPage  products={ jsondata.data }  />
    </div>
  );
}

export default App;
