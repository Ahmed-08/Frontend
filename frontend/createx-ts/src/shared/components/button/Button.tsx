import React from 'react';
import { btnPropsType } from '../../types';


export const Button: React.FC<btnPropsType> = ({text, className, width})=>{
  return (
    <button className={className} style={{width: width}}>{text}</button>
  )
}
