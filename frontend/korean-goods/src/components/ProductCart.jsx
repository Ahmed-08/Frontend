import React, { useContext } from 'react';
import star from '../images/icons/star.svg';
import { PiHeartStraightDuotone } from "react-icons/pi";
import '../styles/productCart.scss';
import { CustomContext } from '../js/Context';
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {

  const navigate = useNavigate();

  const {favourites, setFavourites} = useContext(CustomContext);

  const changeFavourites = (item)=>{

    if(localStorage.getItem('user') == null){
      navigate('/login')
    }
    else if(favourites.findIndex(el => el.id === item.id) > -1){
      setFavourites(favourites.filter(el => el.id !== item.id))
      
    }else{
      setFavourites([...favourites, item]);
    }
  }

  const img = require(`../images/goods/${props.img}`);
  return (
    <div className='product'>
        <div className="container">
          <div className="content">
            <img src={img} alt="painting" />
            <div className='price-block'>
              <p className='price'>{props.price} &#8381;</p>
              <PiHeartStraightDuotone  color={props.color} onClick={()=>changeFavourites(props.item)}/>
            </div>
            <div className="rating">
              <p>{props.rating}</p>
              <img src={star} className='star' alt="star" />
            </div>
            <div className='text'>
              <h1 className="title">MARPLE</h1>
              <p className='description'>{props.description}</p>
            </div>
            <button className='toCart'>В корзину</button>
          </div>
        </div>
    </div>
  )
}
