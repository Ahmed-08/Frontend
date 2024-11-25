import React, { useContext } from 'react'
import { CustomContext } from '../js/Context'
import ProductCard from '../components/ProductCart';
import '../styles/favourites.scss';

export default function Favourites() {
  const {favourites} = useContext(CustomContext);

  return (
    <div className='favourites__page'>
      <div className="container">
      {
      favourites.map((item, index)=>{

          return <ProductCard key={index} 
              price={item.price}
              rating={item.rating} 
              description={item.description} 
              img={item.img}
              color = {favourites.findIndex(el=>el.id === item.id) > -1 ? 'red': 'grey'}
              item = {item}
              />
      })
    }
    </div>

  </div>
  )
}
