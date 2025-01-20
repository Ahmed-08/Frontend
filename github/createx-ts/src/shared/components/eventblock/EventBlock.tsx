import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/stories/store';
import { EventDataType } from '../../types';
import './eventblock.scss';

export const EventBlock: React.FC<EventDataType> = ({id, day, month, time, topic, category})=>{

  const view: number = useSelector<RootState, number>(state=>state.filter.view);

  return (
    <div key={id} className={`eventsBlock-${view}`}>
      {
        view === 1 ? <div className="date">
          <p className='day'>{day < 10 ? '0' + day: day}</p>
          <div className="month">
              <p>{month}</p>
              <p>{time}</p>
          </div>
        </div> :
        <div className="date">  
          <div className="date__number">
            <p className='day'>{day < 10 ? '0' + day: day}</p>
            <p>{month}</p>
          </div>
          <p>{time}</p>
        </div>
      }

      <div className='event__theme'>
          <p>{topic}</p>
          <p>{category}</p>
      </div>

        <button className='event-btn'>View more</button>
    </div>
  )
}
