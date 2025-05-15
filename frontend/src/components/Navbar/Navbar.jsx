import React, { useContext, useRef, useState } from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

    const [menu, setMeu] = useState("shop");
    const {getTotalCartItem} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <a href="/"><p>NOMEMART</p></a>
        </div>

        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <div ref={menuRef} className="nav-menu">
            <li onClick={()=> {setMeu("shop")}}>  <Link style={{textDecoration:"none"}} to='/'>Shop</Link> {menu === "shop"? <hr/>: <></>}</li>
            <li onClick={()=> {setMeu("mens")}}> <Link style={{textDecoration:"none"}} to='/mens'>Men</Link>  {menu === "mens"? <hr/>: <></>}</li>
            <li onClick={()=> {setMeu("womens")}}> <Link style={{textDecoration:"none"}} to='/womens'>Women</Link>  {menu === "womens"? <hr/>: <></>}</li>
            <li onClick={()=> {setMeu("kids")}}> <Link style={{textDecoration:"none"}} to='/kids'>Kids</Link>  {menu === "kids"? <hr/>: <></>}</li>
        </div>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItem()}</div>
        </div>
    </div>
  )
}

export default Navbar
