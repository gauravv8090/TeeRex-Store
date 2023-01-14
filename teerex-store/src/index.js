import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ProductContextProvider from './context/productContext.js';
import CartContextProvider from './context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductContextProvider>
    <CartContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </CartContextProvider>
  </ProductContextProvider>
);
