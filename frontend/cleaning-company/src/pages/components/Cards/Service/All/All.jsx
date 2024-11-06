import React from "react";
import style from './style.module.scss';


const All = ()=>{

    const card = [
        {
            title: 'Химчистка мебели',
            text: ['Химчистка мягкой мебели',
                'Химчистка кожаной мебели',
                'Химчистка диванов',
                'Химчистка матрасов',
                'Химчистка штор'
            ]
        },
        {
            title: 'Химчистка ковровых покрытий',
            text: ['Химчистка ковров', 'Химчистка ковролина в офисе']
        },
        {
            title: 'Клининговые услуги',
            text: ['Генеральная уборка',
                'Уборка после ремонта',
                'Чистка линолеума',
                'Удаление запаха мочи'
            ]
        },
        {
            title: 'Спецработы',
            text: ['Химчистка салонов авто',
                'Дезинфекция генератором ОЗОНА',
                'Удаление неприятных запахов из помещений',
                'Удаление неприятных запахов из салона авто'
            ]
        },
    ]
    return (
        <section className={style.all}>
            <div className="container">
            <h1 className={style.title}>Все <span>услуги</span></h1>
            <div className={style.content}>
                
                {
                    card.map((item, index)=>{
                        const img = require(`../../../../../shared/images/service/all${index+1}.svg`);
                        return (
                            <div key={index} className={style.contentCard}>
                                <h1>{item.title}</h1>
                                <div className={style.cardBlock}>
                                    <div className={style.cardText}>
                                    {
                                        item.text.map((line, idx)=>{
                                            return <p key={idx}>{line}</p>
                                        })
                                    }
                                    </div>
                                    <div className={style.cardImg}>
                                        <img src={img} alt="все услуги"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                </div>
        </section>
    )
}

export default All;
