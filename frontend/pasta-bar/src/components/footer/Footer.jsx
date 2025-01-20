import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';

const socialNetworks = require.context('../../assets/icons/networks/');


export default function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="content">
                <div className="left">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="line-1">
                        <p>Калорийность и состав</p>
                        <p>Правовая информация</p>
                    </div>
                    <div className="line-2"><p>Мы в соцсетях</p></div>
                    <div className="line-3">
                        <div className='network'>
                            <Link to='https://www.youtube.com/'>YouTube</Link>
                            <Link to='https://instagram.com/'>Instagram</Link>
                        </div>
                        <div className='network'>
                            <Link to='https://www.facebook.com/'>Facebook</Link>
                            <Link to='https://vk.com/'>ВКонтакте</Link>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div className="line-4"></div>
                    <div className="line-5"></div>
                </div>
                <div className="right">
                    <h2 className='title'>Остались вопросы? А мы всегда на связи:</h2>
                    <div className="networks">
                        {
                            socialNetworks.keys().map((item, index)=>{
                                return <div className='item' key={index}>
                                    <img src={require(`../../assets/icons/networks${item.substring(1)}`)} alt="" />
                                </div>
                            })
                        }
                        <button className='btn'>Написать нам</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
