import React from "react";
import { Link } from "react-router-dom";
import style from './style.module.scss';

const NavBar = ()=>{

    const links = [
        {service: 'Услуги'},
        {price: 'Цены'},
        {hardware: 'Наше оборудование'},
        {video: 'Видео'},
        {news: 'Новости'},
        {reviews: 'Отзывы'},
        {franchise: 'Франшиза'},
        {contact: 'Контакты'}
    ];
    
    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                {
                    links.map((item, index)=>{
                        const arr = Object.entries(item)[0];
                        return <li key={index}><Link to={`${arr[0]}`}>{arr[1]}</Link></li>
                    })
                }
            </ul>
        </nav>
    )
}

export default NavBar;