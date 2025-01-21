import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg';
import { context } from '../../services/context/context';
import ProductCart from '../productcart/ProductCart';

export default function Cart() {

  const {user, products} = useContext(context);
  const [cart, setCart] = React.useState([])

  console.log('cart.jsx')
  
  return (
    <section className='cart'>
        <div className="container">
            <header className="header">
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </header>
            <section>
                {
                    products.map((item, index)=>{
                        return <ProductCart key={index} id={item.id} img={item.img} title={item.title} description={item.description} price={item.price}/>
                    })
                }
            </section>
        </div>
    </section>
  )
}
