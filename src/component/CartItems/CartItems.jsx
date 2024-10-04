import React, { useContext, useEffect } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cross_icon.png'


const CartItems = () => {
    const {all_product,CartItems,removeFromCart} = useContext(ShopContext)
    useEffect(()=>{
        
    }, [])

    console.log(CartItems);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
<hr />
{all_product.map((e)=>{
  
        return <div>
        <div className="cartItem-format">
            <img src={e.image} alt="" className='carticon-product-icon' />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            {/* <button className='cartitems-quantity'>{CartItems[e.id]}</button> */}
            {/* <p>{e.new_price*CartItems[e.id]}</p> */}
            <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr /> 
    </div>
    
    
})}

        </div>
    </div>
  )
}

export default CartItems