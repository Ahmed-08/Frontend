import React from "react";
import style from './style.module.scss';
import img1 from '../../../shared/images/home1.png';
import img2 from '../../../shared/images/home2.png';
import img3 from '../../../shared/images/home3.png';
import img4 from '../../../shared/images/home4.png';

const Intro = ()=>{


    return (
        <section className={style.intro}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.content__left}>
                        <h1 className={style.title}>Профессиональная <br/>
                            <span>химчистка</span>мебели<br/>
                            и <span>клининговые услуги</span><br/>
                            по доступным ценам
                        </h1>
                        <button className={style.btn_price}>Рассчитать стоимость</button>
                    </div>
                    <div className={style.content__right}>
                        <div className={style.content__img}>
                            <img src={img1} alt="intro-image_1" />
                        </div>
                        <div className={style.content__img}>
                            <img src={img2} alt="intro-image_2" />
                        </div>
                        <div className={style.content__img}>
                            <img src={img3} alt="intro-image_3" />
                        </div>
                        <div className={style.content__img}>
                            <img src={img4} alt="intro-image_4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;