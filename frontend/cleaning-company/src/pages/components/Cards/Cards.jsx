import React from "react";
import style from './style.module.scss';

const Cards = ()=>{
    const card = [
        {
            title: 'Лучшая химия',
            text: 'у нас чуть лучше чем в среднем по рынку, поэтому можем себе позволить покупать лучшие средства',
        },
        {
            title: 'Работаем с 2008 года',
            text: 'Каждый год мы лучше и лучше 👌',
        },
        {
            title: 'Доступные цены',
            text: 'При этом у нас большой поток заказов, и именно поэтому, мы можем удерживать цены на минимальном уровне 💪',
        },
        {
            title: 'Лучшая техника',
            text: 'Наши мастера уже привыкли к мощной технике и морально не смогут работать слабыми моделями 😎',
        },
    ]
    return (
        <section className="cards">
            <div className="container">
                <div className="content">
                    <div className={style.cardsAbout}>
                        {
                            card.map((item, index)=>{
                                const img = require('../../../shared/images/icons/home/label/label' + (index+1) + '.svg');
                                return <div key={index} className={style.cardItem}>
                                    <h1>{item.title}</h1>
                                    <p>{item.text}</p>
                                    <div className={style.label}>
                                        <img src={img} alt="label" className="img" />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards;