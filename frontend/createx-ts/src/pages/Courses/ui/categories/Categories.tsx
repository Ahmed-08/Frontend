import React from 'react';
import debounce from 'lodash.debounce';
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import {setCategory, setInputText} from '../../../../features/model/slices/categorieSlice.ts';
import { useSelector } from 'react-redux';
import {courses} from '../../../../shared/constants.ts';
import { RootState, useAppDispatch } from '../../../../app/stories/store.ts';
import './categories.scss';



export default function Categories() {

    const inputRef = React.useRef<HTMLInputElement>(null);
    const category: number = useSelector<RootState, number>(state=>state.categories.category);
    const dispatch = useAppDispatch();
    
    const setDebounce = React.useCallback(
        debounce(()=>{
            if(inputRef.current)
                dispatch(setInputText(inputRef.current.value));
        }, 1000), []);

    const onChangeInput = ()=>{
        setDebounce();
    }

    const arrCourses = ['All', ...courses];
    return (
    <nav className='categories'>
        <ul>
            {
            arrCourses.map((item, index)=>{
                return <li key={index}
                            onClick={()=>dispatch(setCategory(index))}
                            className={category === index ? 'active': ''}
                        >
                    {item}
                </li>
            })
            }
        </ul>

        <div className='input'>
            <input type="text" ref={inputRef} onChange={onChangeInput} placeholder='Search course...'/>
            {
            inputRef.current?.value ? <IoMdClose style={{width:'18px', 
                height:'18px', 
                position: 'absolute',
                right: '10px'}}
                onClick={()=>{
                    if(inputRef.current){
                        inputRef.current.value = '';
                    }
                    inputRef.current?.focus();
                    dispatch(setInputText(inputRef.current?.value));
                }}
                /> 
                :<CiSearch style={{width:'18px', height:'18px', position: 'absolute', right: '10px'}}/>

            }
        </div>
    </nav>
    )
}
