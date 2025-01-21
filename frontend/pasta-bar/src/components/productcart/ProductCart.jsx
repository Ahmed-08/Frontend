import React, { useContext } from 'react'
import './ProductCart.scss';
import { context } from '../../services/context/context';


export default function ProductCart({img, title, description, price, id}) {

  const {user, setUser} = useContext(context);

  const image = require(`../../assets/images/${img}`);
  console.log('product.jsx', user);
  
  const addToCart = (id)=>{
  }
    
  return (
    <div className='cart'>
        <div className="container">
            <div className="content">
                <img src={image} alt={title} />
                <h1 className="title">{title}</h1>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="price-btn">
                    <p className="price">от {price}</p>
                    <button className='btn' onClick={()=>addToCart(id)}>В корзину</button>
                </div>
            </div>
        </div>
    </div>
  )
}
