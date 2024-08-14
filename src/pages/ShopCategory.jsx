import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../context/ShopContext'
import dropdown_icon from '../component/Assets/dropdown.png'
import Item from '../component/Item/Item'

 const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
       <img className='shopcategorybanner' src={props.banner} alt="" />
       <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shopcategory-sort">
        Sort by <img className='dropdown-icon' src={dropdown_icon} alt="" />
       </div>
       </div>
       <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }

        })}
       </div>
       <div className="shopcategory-loadmore">
        Explore More
       </div>
    </div>
  )
}
export default ShopCategory;