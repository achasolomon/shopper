import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrumb_arrow.png'

const Breadcrum = (props) =>{
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt=""  className='arrow_image'/> SHOP <img src={arrow_icon} alt="" className='arrow_image'/> {product.category} <img scr={arrow_icon} alt='' className='arrow_image'/> {product.name}
    </div>
  )
}

export default Breadcrum