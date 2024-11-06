import React from "react";
import vk from '../../images/icons/vk.svg';
import whatsapp from '../../images/icons/whatsapp.svg';
import youtube from '../../images/icons/youtube.svg';
import tg from '../../images/icons/tg.svg';
import style from './style.module.scss';
import { Link } from "react-router-dom";


const Social = ()=>{

    return (
        <div className={style.social}>
            <Link to={'https://vk.com/ahmed_1990'} target="_blank" className={style.vk}>
                <img src={vk} alt="vk"/>
            </Link>
            
            <Link to={'https://web.whatsapp.com/'} target="_blank" className={style.whatsapp}>
                <img src={whatsapp} alt="whatsapp"/>
            </Link>
            
            <Link to={'https://www.youtube.com/'} target="_blank" className={style.youtube}>
                <img src={youtube} alt="youtube"/>
            </Link>
            
            <Link to={'https://web.telegram.org/a/'} target="_blank" className={style.tg}>
                <img src={tg} alt="tg"/>
            </Link>
        </div>
    )
}

export default Social;