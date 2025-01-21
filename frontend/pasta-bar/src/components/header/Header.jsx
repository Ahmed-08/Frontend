import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg'
import yandex from '../../assets/icons/yandex.svg'
import './Header.scss';
import { context } from '../../services/context/context';

export default function Header() {
                                           
  const nav = [
        'Пицца',
        'Паста',
        'Супы',
        'Салаты',
        'Напитки',
        'Десерты',
        'Бакалея',
        'Антипасти',
        'Акции',
        'Комбо',
        'Контакты'
    ];

  const {setLogin, user, setUser} = React.useContext(context);
  console.log('header.jsx', user);

  return (
    <div className='header'>
        <div className="container">
            <div>
                <Link to='/'>
                    <div className="logo">
                        <img src={logo} alt="logo" className="logo__icon" />
                    </div>
                </Link>

                <div className="city">

                    <div className="roof">
                        <p>Доставка пасты</p>
                    </div>

                    <div className="floor">
                        <div className="rating">
                            <img src={yandex} alt="icon" />
                            <div className="yandex">
                                <p>Яндекс еда</p>
                            </div>
                            <p>4.8</p>
                        </div>
                        <div className="time">
                            <p>Время доставки</p>
                        </div>
                    </div>
                </div>

                <div className="phone-call">
                    <button className="call-btn">Заказать звонок</button>
                    <div className="number">8 499 391-84-49</div>
                </div>
            </div>

            <div className='header__nav'>
                <nav className='nav'>
                    <ul className='nav__list'>
                        {
                            nav.map((item, index)=>{
                                return <li className='item' key={index}><Link href='/'>{item}</Link></li>
                            })
                        }
                    </ul>
                </nav>

                {
                    
                    user.email.length > 0 ? <Link className='login' to='/' onClick={()=>{ 
                        localStorage.clear();
                        setUser({
                            email: ''
                        })
                        setLogin(false)
                    }}>Выйти</Link>:
                    <Link className='login' to='/' onClick={()=>{ setLogin(true) }}>Войти</Link>
                    
                }

                <Link to='/cart'><button className='cart-btn'>Корзина</button></Link>
            </div>
        </div>
    </div>
  )

}
