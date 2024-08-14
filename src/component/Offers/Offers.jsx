import React from 'react'
import './Offer.css'
import Exclusive_image from '../Assets/exclsive.png'

export default function offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
                <img src={Exclusive_image} alt="" />
        </div>
    </div>
  )
}
