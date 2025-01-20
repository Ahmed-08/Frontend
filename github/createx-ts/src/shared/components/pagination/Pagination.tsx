import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/stories/store';
import { EventDataType } from '../../types';
import { Link } from 'react-router-dom';
import { setStart } from '../../../features/model/slices/filterSlice.ts';
import { useAppDispatch } from '../../../app/stories/store.ts';
import './pagination.scss';



export const Pagination: React.FC = ()=>{

    const dispatch = useAppDispatch();
    const events: EventDataType[] = useSelector<RootState, EventDataType[]>(state=>state.events.events);
    const show: number = useSelector<RootState, number>(state=>state.filter.show);
    const pages = Math.ceil(events.length / show);

    return (
        <>
        {
            pages > 1 ? <ul className='pagination'>
                        {
                        events.slice(0, pages).map((_, idx)=>{
                            return <li className='page' onClick={()=>{dispatch(setStart(idx*show))}}
                                    key={idx}><Link to={''}>{idx+1}</Link>
                                </li>
                        })
                        }
                        </ul> : <></>
        }
        </>
    )
}