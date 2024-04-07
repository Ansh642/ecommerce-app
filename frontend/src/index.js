import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./context/context";
import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <BrowserRouter>
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
    <App />
    </CartProvider>
    </SearchProvider>
  </AuthProvider>
  </BrowserRouter>
  <ToastContainer />
  </>
);


