import React from 'react';
import { CartProductType } from '../../types';
import './cart.scss';


export const Cart: React.FC<CartProductType> = ({id, category, title, price, teacher}) => {
  return (
    <div className='teacher-cart'>
        <img src={require(`../../../shared/assets/images/teachers/image${id+1}.png`)} alt="teacher" />
        <div className='about-teacher'>
            <p className='category'>{category}</p>
            <h2 className='about-teacher__title'>{title}</h2>
            <div>
                <p className='price'>${price}</p>
                    <span>|</span>
                <p className='teacher'>by {teacher}</p>
            </div>
        </div>
    </div>
  )
}
