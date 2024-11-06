import React from "react";
import style from './style.module.scss';

const SelectCity = ()=>{
    const city = ['Москва', 'Санкт-Петербург', 'Тверь'];
    return (
        <select name="selectCity" id={style.city}>
            {
                city.map((item, index)=>{
                    return <option key={index} value={item}>{item}</option>
                })
            }
        </select>
    )
}

export default SelectCity;