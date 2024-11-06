import React from "react";
import Logo from "../Logo/Logo";
import SelectCity from "../SelectCity/SelectCity";
import Social from "../Social/Social";
import NavBar from "../NavBar/NavBar";
import style from './style.module.scss';

const Header = ()=>{

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.contacts}>
                    <div className={style.logo}>
                        <Logo/>
                    </div>
                    <div className={style.city}>
                        <SelectCity/>
                    </div>
                    <div className={style.social}>
                        <Social/>
                    </div>
                    <div className={style.ourNumber}>
                        <p className={style.number}>+7 (495) 649-62-46</p>
                        <p className={style.graph}>Мы на связи с 9:00 до 19:00</p>
                    </div>
                </div>

                <div className="navbar">
                    <NavBar />
                </div>
            </div>
        </header>
    )
}

export default Header;
