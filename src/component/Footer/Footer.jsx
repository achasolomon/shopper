import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_shop.png'
import instagram from '../Assets/instagram.png'
import facebook from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import whatsapp from '../Assets/whatsapp.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Officers</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={facebook} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={twitter} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All right reserved</p>
        </div>
    </div>
  )
}
