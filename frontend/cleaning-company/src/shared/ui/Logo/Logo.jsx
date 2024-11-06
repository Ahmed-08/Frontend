import React from "react";
import style from './style.module.scss';
import logo from '../../images/icons/logo.svg'
import { Link } from "react-router-dom";

const Logo = ()=>{
    return (
        <Link to={''} className={style.logo}>
            <img src={logo} alt="logo"/>
        </Link>
    )
}

export default Logo;