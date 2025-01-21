import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../app/stories/store.ts';
import { CartProductType } from '../../shared/types.ts';
import { Cart } from '../../shared/components/index.ts';
import { getCarts } from '../../app/stories/slices/cartSlice.ts';
import Categories from './ui/categories/Categories.tsx';
import { courses } from '../../shared/constants.ts';
import './courses.scss';


export const Courses: React.FC = ()=>{

  const carts: CartProductType[] = useSelector<RootState, CartProductType[]>(state=>state.carts.carts);
  const dispatch = useAppDispatch();

  const category = useSelector<RootState, number>(state=>state.categories.category);
  const inputText = useSelector<RootState, string>(state=>state.categories.inputText);

  React.useEffect(()=>{
    dispatch(getCarts(`http://localhost:8000/products/?${category === 0? '': 'category='+courses[category-1]}&q=${inputText}`));
  }, [category, inputText]);

  return (
    <div className='courses'>
        <div className="container">
            <div className="courses__title-content">
                <p>Enjoy your studying!</p>
                <h1 className="courses__title">Our online courses</h1>
                <Categories />
            </div>

            <section className="courses__main">
                <div className='courseList'>
                {
                    carts.map((item, idx)=>{
                        return <Cart key={item.id} category={item.category}
                            id={idx}
                            title={item.title}
                            price={item.price}
                            teacher={item.teacher}
                            image={item.image}
                            />
                    })
                }
                </div>
            </section>
        </div>
    </div>
  )
}
