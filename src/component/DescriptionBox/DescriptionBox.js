import React from 'react'
import './DescriptionBox.css'

const DescriptionBox =() => {
  return (
    <div className='descriptionbox'>
       <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>

       </div>
        <div className='descriptionbox-description'>
            <p>Shooper is an online platform that facilitate buying and selling of products or services over the internet
                which serves as a virtual market place where business and individual shocase their products, interact with customers, and conduct transactions without the need for a physical presence. Shopper have gained imense popularity due 
                to their convenient, accessibile and global reach

            </p>
        </div>
    </div>
  )
}

export default DescriptionBox