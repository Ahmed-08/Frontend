import React from "react";
import style from './style.module.scss';


const Popular = ()=>{

    const popular = [
        {
            title: 'Химчистка мягкой мебели',
            price: '2 100 руб.',
        },
        {
            title: 'Химчистка матрасов',
            price: '500 руб.',
        },
        {
            title: 'Химчистка штор',
            price: '50 руб.',
        },
        {
            title: 'Химчистка ковров',
            price: '750 руб.',
        },
        {
            title: 'Химчистка ковролина',
            price: '5 000 руб.руб.',
        },
        {
            title: 'Генеральная уборка',
            price: '2 600 руб.',
        }
    ]

    return (
        <section className={style.popular}>
            <div className="container">
                <div className={style.content}>
                    <h1 className={style.title}>Популярные <span>услуги</span></h1>
                    <div className={style.content__img}>
                    {
                        popular.map((item, index)=>{
                            const img = require(`../../../../../shared/images/service/popular${index+1}.png`);
                            return (
                                <div key={index} className={style.popular__item}>
                                    <img src={img} alt="Популярные услуги"/>
                                    <h1>{item.title}</h1>
                                    <button className={style.btn__detail}>Подробнее</button>
                                </div>
                            )
                        })
                    }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Popular;