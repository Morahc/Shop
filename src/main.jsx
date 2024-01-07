import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollTotop";
import AuthState from "./context/auth/AuthState";
import ProductState from "./context/product/ProductState";
import Notification from "./components/Notification";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <React.StrictMode>
      <AuthState>
        <ProductState>
          <Notification />
          <App />
        </ProductState>
      </AuthState>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);
