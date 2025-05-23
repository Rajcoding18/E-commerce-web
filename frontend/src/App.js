import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import LogniSignup from './pages/LogniSignup';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import { Footer } from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
function App() {
  return (
    <div>

      < BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          
          {/* <Route path='product' element={<Product/>}>
            <Route path='productID' element={<Product/>} />
          </Route> */}
          <Route path='/product/:productID' element={<Product />} />

          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LogniSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;