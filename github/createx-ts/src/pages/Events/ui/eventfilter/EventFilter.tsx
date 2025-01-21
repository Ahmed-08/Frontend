import React, { useRef } from 'react';
import { useSelector} from 'react-redux';
import { RootState, useAppDispatch } from '../../../../app/stories/store.ts';
import { getEvents } from '../../../../app/stories/slices/eventsSlice.ts';
import { setInputText, setShow, setSortby, setView } from '../../../../features/model/slices/filterSlice.ts';
import './eventfilter.scss';

const show = 1;
export const EventFilter: React.FC<{show: number}> = ({show})=>{

    const inputRef = useRef<HTMLInputElement>(null);
    const showRef = useRef<HTMLInputElement>(null);
    const sortRef = useRef<HTMLSelectElement>(null);
    const inputText = useSelector<RootState>(state=>state.filter.inputText);
    const sortby = useSelector<RootState, string>(state=>state.filter.sortby);
    const dispatch = useAppDispatch();

    
    React.useEffect(()=>{
        dispatch(getEvents(`http://localhost:8000/events/?_sort=day&_order=${sortby}&q=${inputText}`));
    }, [inputText, sortby, dispatch]);
    

    console.log('event filter')
    return (
    <div className="event-filter">
        <label htmlFor="themes">
            Event category
            <select name="themes" id="themes">
                <option value="all themes">all themes</option>
            </select>
        </label>

        <label htmlFor="sortby">
            Sort by
            <select ref={sortRef} onChange={()=>dispatch(setSortby(String(sortRef.current?.value)))} name="sortby" id="sortby">
                <option value="newest">newest</option>
                <option value="oldest">oldest</option>
            </select>
        </label>

        <label htmlFor="show">
            Show
            <input type="number" ref={showRef} id="show" step={1} onChange={()=>dispatch(setShow(Number(showRef.current?.value)))} value={`${show}`}/>
        </label>

        <label htmlFor="page">
            events per page
            <input ref={inputRef} type="text" id="page" onChange={()=>dispatch(setInputText(String(inputRef.current?.value)))} placeholder='Search event...' />
        </label>

        <div className="events__view">
            <div className="view-1" onClick={()=>dispatch(setView(1))}>
                <div></div>
                <div></div>
            </div>
            <div className="view-2" onClick={()=>dispatch(setView(2))}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    )
}
