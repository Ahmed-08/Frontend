import React from 'react'
import { useLocation } from 'react-router-dom';
import { IoAddSharp } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import {Button} from '../../shared/components/index.ts';
import './eventpage.scss';


export const EventPage: React.FC = ()=>{
      
  const location = useLocation();
  const {day, month, time, themes} = location.state;
  const [openId, setOpenId] = React.useState(null);
  const f = (id)=>{
    openId === id ? setOpenId(null) : setOpenId(id);
  }

  return (
    <main className='eventPage'>
        <div className="container">
            <div className="eventPage__content">
                <div className="eventPage__header">
                    <p>Online lecture</p>
                    <h1>Formation of the organizational structure of the company in the face of uncertainty</h1>
                </div>
                <section className="eventPage__section-1">

                    <h2 className="eventPage__title">We will talk about:</h2>

                    <div className="eventPage__cartBlock">
                        <p>time</p>
                        <div className="date">
                            <p className="month">{month}</p>
                            <p className="day">{day},</p> 
                            <p className="time">{time}</p>
                        </div>
                        <p className='txt'>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                        <Button text='Join the event' className='btn-type-1' width='431px' />
                    </div>
                    <div className="eventPage__themes">
                        <ul className='themes-list'>
                        {
                            themes.map((item, idx)=>{

                                return  <li onClick={()=>f(idx)} key={idx}>
                                            <div>
                                            {
                                                openId === idx ? <FiMinus color='red'/> : <IoAddSharp color='red' /> 

                                            }
                                            <span> Theme {idx+1}.</span> {item} 
                                            </div>
                                            <span className='theme-collapse' style={{display: `${idx === openId ? 'inline-block': 'none'}`}}>
                                                Nulla amet, sagittis potenti rhoncus sit.
                                                Elit lectus nec pulvinar aliquet donec enim, ornare.
                                                Lacus facilisi curabitur turpis varius mauris.
                                                Nisi, tempus risus, odio mi suscipit sed.
                                                Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis.
                                                Commodo nunc orci vitae accumsan id.
                                            </span>
                                        </li>
                            })
                        }

                        </ul>
                    </div>


                </section>
            </div>
        </div>
    </main>
  )
}
