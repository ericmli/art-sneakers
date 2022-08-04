import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="products" element={<ProductList />} />
      <Route path="product" element={<Product/>} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
);
