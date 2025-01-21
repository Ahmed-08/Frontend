import React from 'react';
import { Link } from 'react-router-dom';
import { navbar } from '../../../../shared/constants.ts';
import './navbar.css';

export const Navbar: React.FC = ()=>{
  return (
    <ul className='navbar-list'>
        {
            navbar.map((item, idx)=>{
                return <li className='navbar-list__item' key={idx}><Link to={`/${item}`}>{item}</Link></li>
            })
        }
    </ul>
  )
}
