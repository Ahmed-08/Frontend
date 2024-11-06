import React from "react";
import style from './style.module.scss';


const Calculate = ()=>{

    const [focusService, setFocusService] = React.useState(false);
    const [focusMaterial, setFocusMaterial] = React.useState(false);

    const onFocusService = ()=>{
        setFocusService(true);
    }

    const onBlurService = ()=>{
        setFocusService(false);
    }

    const onFocusMaterial = ()=>{
        setFocusMaterial(true);
    }

    const onBlurMaterial = ()=>{
        setFocusMaterial(false);
    }




    return (
        <section className={style.calculate}>
            <div className="content">
                <div className={style.calculateSummary}>
                    <h1 className={style.title}>Рассчитать <span>стоимость</span></h1>
                    <div className={style.items}>
                        <div>
                            <p>Услуга</p>
                            <input onFocus={onFocusService} onBlur={onBlurService} type="text" placeholder="Выбрать"/>

                            {
                                focusService && <div className={style.serviceList}>
                                    <ul>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Odio, aliquam deserunt.</li>
                                        <li>Accusantium, quo dolor.</li>
                                        <li>Officia, adipisci corporis.</li>
                                        <li>Maxime, modi officiis?</li>
                                    </ul>
                            </div>
                            }
                        </div>
                        <div>
                            <p>Материал</p>
                            <input type="text" onFocus={onFocusMaterial} onBlur={onBlurMaterial} placeholder="Выбрать"/>
                            {
                                focusMaterial && <div className={style.serviceList}>
                                    <ul>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Odio, aliquam deserunt.</li>
                                        <li>Accusantium, quo dolor.</li>
                                        <li>Officia, adipisci corporis.</li>
                                        <li>Maxime, modi officiis?</li>
                                    </ul>
                            </div>
                            }
                        </div>
                        <div>
                            <p>Доп. услуга</p>
                            <input type="text" placeholder="Выбрать"/>
                        </div>
                        <div>
                            <p>Количество</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Цена</p>
                            <input type="text" placeholder="0.00"/>
                        </div>
                        <div>
                            <p>Длительность</p>
                            <input type="text" placeholder="0 ч."/>
                        </div>
                        <div>
                            <p>Скидка</p>
                            <input type="text" placeholder="0 %"/>
                        </div>
                        <div>
                            <p>Итого</p>
                            <input type="text" placeholder="0.00"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calculate;