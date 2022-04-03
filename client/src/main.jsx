import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollTotop';
import AuthState from './context/auth/AuthState';
import ProductState from './context/product/ProductState';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <React.StrictMode>
      <AuthState>
        <ProductState>
          <App />
        </ProductState>
      </AuthState>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
