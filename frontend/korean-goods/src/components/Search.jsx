import React, { useContext, useRef } from 'react'
import loupe from '../images/icons/search.svg';
import icon from '../images/icons/close.svg';

import '../styles/search.scss';
import { CustomContext } from '../js/Context';

export default function Search() {

  const {searchValue, setSearchValue} = useContext(CustomContext);

  const ref = React.useRef(null);
  const handleClick = () => { ref.current.focus() }

  return (
    <div className='search'>
        <input ref={ref} type="text" value={searchValue} onChange={(event)=>setSearchValue(event.target.value)}/>
        {
          searchValue === '' ? <img src={loupe} onClick={handleClick} alt="search" />
                                : <img src={icon}
                                    onClick={()=>setSearchValue('')}
                                    style={{cursor: 'pointer'}}
                                    alt="search" />
        }
        
    </div>
  )
}
