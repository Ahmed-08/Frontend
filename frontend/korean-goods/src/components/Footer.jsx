import React from 'react'
import Logo from '../images/icons/logo.svg';


import '../styles/footer.scss';


export default function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul>
                        <li>Покупателям</li>
                        <li>Как это работает</li>
                        <li>Защита покупателя</li>
                        <li>Условия оплаты</li>
                        <li>Условия использования</li>
                        <li>Регистрация аккаунта</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>Поставщикам</li>
                        <li>Как стать продавцом</li>
                        <li>Правила участия</li>
                        <li>Личный кабинет продавца  </li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>О компании</li>
                        <li>О PlaceMik</li>
                        <li>Новости</li>
                        <li>Часто задаваемые вопросы</li>
                        <li>Служба поддержки </li>
                        <li>Сообщить о нарушении авторских прав</li>
                    </ul>
                </div>
                <div className="subscribe">
                    <p className="title">Хотите быть в курсе последних новостей и акций?</p>
                    <div className="email">
                        <div className="email__block">konstantinkonstantinov@yandex.ru</div>
                        <button className="email__btn">Подписаться</button>
                    </div>
                </div>
            </div>
            <img src={Logo} alt="logo" />
        </div>
    </div>
  )
}
