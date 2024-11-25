import React from 'react';
import MenuBtnContent from '../components/menu/MenuBtnContent';
import block1 from '../images/image15.svg';
import block2 from '../images/image16.svg';
import baner from '../images/baner1.png';
import { CustomContext } from '../js/Context';
import ProductCard from '../components/ProductCart';
import '../styles/home.scss';


export default function Home() {

  const {isOpenMenu, products, favourites} = React.useContext(CustomContext);

  return (
    <main>
        <section className="panel">
            <div className="container">
            {
                isOpenMenu && <MenuBtnContent />
            }

            <div className="advertisingBlock">
                <img src={baner} alt="baner" />
            </div>

            {
                !isOpenMenu && (<div className="rightBlocks">
                    <img src={block1} className="block" alt="block" />
                    <img src={block2} className="block" alt="block" />
                </div>)
            }
            </div>
        </section>

        <section className="buy">
            <div className="container">
            <h1 className="title">Успей купить</h1>
            <div className="buy__content">
            {
                products.map((item, index)=>{
                    return <ProductCard key={index} 
                        price={item.price}
                        rating={item.rating} 
                        description={item.description} 
                        img={item.img}
                        color = {favourites.findIndex(el=>el.id === item.id) > -1 ? 'red': 'grey'}
                        item = {item}
                        />
                })
            }
            </div>
            </div>
        </section>
    </main>
  )
}
