import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/stories/store.ts';
import { EventBlock } from '../../shared/components/eventblock/EventBlock.tsx';
import { EventDataType } from '../../shared/types.ts';
import {EventFilter} from './ui/eventfilter/EventFilter.tsx';
import { Pagination } from '../../shared/components/index.ts';
import { Link } from 'react-router-dom';
import './events.scss';


export const Events: React.FC = ()=>{

  const eventsData: EventDataType[] = useSelector<RootState, EventDataType[]>(state=>state.events.events);
  const view: number = useSelector<RootState, number>(state=>state.filter.view);
  const show: number = useSelector<RootState, number>(state=>state.filter.show);
  const start = useSelector<RootState, number>(state=>state.filter.start);

  return (
    <main className='events'>
        <div className="container">
            <div className="events_wrapper">

              <div className='events__header'>
                <p>Our Events</p>
                <h1>Lectures, workshops & master-classes</h1>
                <EventFilter show={show}/>
              </div>

              <section className={`events-block-${view}`}>
                <div className="events__block-content">
                {
                  eventsData.slice(start, start+show).map((item)=>{

                    return <Link key={item.id} to={`${item.id}`.toLowerCase()} 
                            state={{
                              id: item.id,
                              month:item.month,
                              day: item.day,
                              category: item.category,
                              topic: item.topic,
                              time: item.time,
                              themes: item.themes
                            }}>

                            <EventBlock  id={item.id}
                              month={item.month}
                              day={item.day}
                              category={item.category}
                              topic={item.topic}
                              time={item.time}
                            />
                          </Link>
                  })
                }
                </div>

              <Pagination/>
              </section>
            </div>
        </div>
    </main>
  )
}
