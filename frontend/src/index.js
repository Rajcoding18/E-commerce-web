import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../src/components/Navbar/Navbar.css'
import ShopContextProvider, { ShopContext } from './context/ShopContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <ShopContextProvider>
    <App/>
  </ShopContextProvider>
);

