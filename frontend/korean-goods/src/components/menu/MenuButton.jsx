import React from 'react'
import style from '../../styles/menu-button.module.scss';
//import { Context } from '../Root'
import { CustomContext } from '../../js/Context';

export default function MenuButton() {
    
  const {isOpenMenu, setOpenMenu} = React.useContext(CustomContext);
  return (
    <div className={style.button}>
        <div className={style.block} onClick={()=>setOpenMenu(!isOpenMenu)}>
            <div className={style.layer}></div>
            <div className={style.layer}></div>
            <div className={style.layer}></div>
        </div>
    </div>
  )
}
