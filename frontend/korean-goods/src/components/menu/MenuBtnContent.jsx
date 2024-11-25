import React from 'react'
import '../../styles/menu-btn-content.scss';

const categories = [
    'Компьютеры и оргтехника',
    'Электроника',
    'Бытовая техника',
    'Одежда для женщин',
    'Одежда для мужчин',
    'Все для детей',
    'Автотовары',
    'Красота и здоровье',
    'Спорт и развлечения'
]

const icons = require.context('../../images/icons/menu/');

export default function MenuBtnContent() {
  return (
    <div className='MenuBtnContent'>
        <div className="container">
            <ul className="menu-list">
                <li>Популярные категории</li>
                {
                    categories.map((item, index)=>{
                        const icon = icons.keys().map(image => icons(image));;
                        return <li key={index}>
                            <img src={icon[index]} alt="icon"/>
                            <a href='/'>{item}</a>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}
