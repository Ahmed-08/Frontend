import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch} from '../../../../app/stories/store.ts';
import { getEvents } from '../../../../app/stories/slices/eventsSlice.ts';
import { EventDataType } from '../../../../shared/types.ts';
import { EventBlock } from '../../../../shared/components/index.ts';
import './events.scss';

export const EventsSection: React.FC = ()=>{

    const dispatch = useAppDispatch();
    const eventsData: EventDataType[] = useSelector<RootState, EventDataType[]>(state=>state.events.events);
    
    React.useEffect(()=>{
        const abortControll = new AbortController();
        const signal = abortControll.signal;

        const params = {
            url: 'http://localhost:8000/events/?_limit=3',
            signal: signal,
        }

        dispatch(getEvents(params));

        return ()=> {
            abortControll.abort("abort");
        }
    }, [dispatch])

    
    return (
    <section className='events-section'>
        <div className="events-section__wrapper">
            <header className='events-section__header'>
                <p>Our Events</p>
                <h2>Lectures & workshops</h2>
            </header>
            {
                eventsData.length > 0 ? eventsData.map(item=>{

                    return <EventBlock key={item.id} id={item.id}
                        month={item.month}
                        day={item.day}
                        category={item.category}
                        topic={item.topic}
                        time={item.time}
                        />
                }) : <h1 style={{color: 'red', fontWeight: 900, textTransform: 'uppercase'}}>Что-то пошло не так...</h1>
            }
        </div>
    </section>
    )
}
