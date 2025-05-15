import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import footer_logo from '../Assets/logo_big.png'
import ig_icon from '../Assets/instagram_icon.png'
import printerest from '../Assets/pintester_icon.png'
import whatapp_icon from '../Assets/whatsapp_icon.png'
export const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-logo">
        <img src={footer_logo} alt="" />
        {/* <p>SHOPPER</p> */}
    </div>
    <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icon">
        <div className="footer-icon-container">
            <Link to="https://www.instagram.com/rb_yadva18"><img src={ig_icon} alt="" /></Link>
        </div>
        <div className="footer-icon-container">
            <img src={printerest} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatapp_icon} alt="" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr/>
        <p>Copyright &copy; 2025 -All right Reserved</p>
    </div>
    </div>
  )
}