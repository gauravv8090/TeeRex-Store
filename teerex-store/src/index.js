import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ProductContextProvider from './context/productContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ProductContextProvider>
);
