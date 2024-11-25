import React, { useContext } from 'react';
import MenuButton from './menu/MenuButton';
import Search from './Search';

import profile from '../images/icons/user.svg';
import liked from '../images/icons/like-heart.svg';
import shopCart from '../images/icons/shop-cart.svg';
import logo from '../images/icons/logo.svg';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import { CustomContext } from '../js/Context';



export default function Header() {

  const {user, logOutUser} = useContext(CustomContext);
  return (
    <header className='header'>
        <div className="container">
            <MenuButton />
            <div className='logo'>
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
            <Search />

            {
                user.email.length ? <span onClick={logOutUser} className='exit'>ВЫЙТИ</span>: 

                    <div className="auth">
                        <Link to='login'><img src={profile} alt="user" /></Link>
                        <p>Войти</p>
                    </div>
            }


            <div className="favourites">
                <Link to='favourites'> <img src={liked} alt="favourites" /> </Link>
                <p>Избранное</p>
            </div>

            <div className="shopCart">
                <Link to='cart'><img src={shopCart} alt="shopCart" /></Link>
                <p>Карзина</p>
            </div>

        </div>
    </header>
  )
}
