import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch} from '../../../../app/stories/store.ts';
import { getCarts } from '../../../../app/stories/slices/cartSlice.ts';
import { Button } from '../../../../shared/components/index.ts';
import { Cart } from '../../../../shared/components/index.ts';
import { CartProductType } from '../../../../shared/types.ts';
import './featuredcourses.scss';


export const FeaturedCourses: React.FC = ()=>{

    const dispatch = useAppDispatch();
    let data = useSelector<RootState, CartProductType[]>(state=>state.carts.carts);
    const status = useSelector<RootState, boolean>(state=>state.carts.status);

    React.useEffect(()=>{
        const abortSignal = new AbortController();
        const signal = abortSignal.signal;

        const params = {
            url: 'http://localhost:8000/products/?_limit=6',
            signal,
        }
        dispatch(getCarts(params));

        return ()=>{
            abortSignal.abort('abort');
        }
    }, [dispatch])

    return (
        <section className='featuredcourses'>
            <header className='featuredcourses__header'>
                <div className="featuredcourses__text">
                    <p>Ready to learn?</p>
                    <h2 className='featuredcourses__title'>Featured Courses</h2>
                </div>

                <Button text='View all courses' className='btn-type-2' width='203px'/>
            </header>

            <div className='featuredcourses__cart-list'>
            {
                status === true ? data.map((item, idx)=>{
                    return <Cart key={item.id} category={item.category}
                        id={idx}
                        title={item.title}
                        price={item.price}
                        teacher={item.teacher}
                        image={item.image}
                        />
                }) : <h1>Не удалось получить карточки! :{'('} </h1>
            }
            </div>
        </section>
    )
}
