import React from "react";
import { context } from "../../services/context/context";
import ProductCart from "../../components/productcart/ProductCart";
import Login from "../login/Login";
import Register from "../register/Register";
import Map from '../../components/maps/Maps';
import './Home.scss';


export default function Home() {

  const {products, login, register, user} = React.useContext(context);

  const maptext = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  ];

  console.log('home.jsx', user);

  return (
    <>
      <section className="products">
      <div className="container">
        <div className="products__content">

          <h1 className="title_category">Пицца</h1>
          <div className="carts">
          {
            products.map((item, index)=>{
              return <ProductCart key={index}
                      id={item.id}
                      img={item.img}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
            })
          }
          </div>
        </div>
        {
          login && <Login />
        }
        {
          register && <Register />
        }
      </div>
    </section>
    <section className="actions">
      <div className="container">
        <div className="content">
          <h1 className="title"><span>Наши</span> акции</h1>

          <div className="actions__block">

            <div className="item">
              <img src={require('../../assets/images/action.png')} alt="" />
            </div>

            <div className="item">
              <img src={require('../../assets/images/action.png')} alt="" />
            </div>

            <div className="item">
              <img src={require('../../assets/images/action.png')} alt="" />
            </div>

            <div className="item">
              <img src={require('../../assets/images/action.png')} alt="" />
            </div>

            <div className="item">
              <img src={require('../../assets/images/action.png')} alt="" />
            </div>

          </div>

          <button className="actions__btn">Все вкции</button>
        </div>
      </div>
    </section>

    <section className="maps">
      <div className="container">
        <div className="maps__content">
          <h1 className="title">Оплата и доставка</h1>

          <div className="map__blocks">
          {
            maptext.map((item, index)=>{
              return <div className="block" key={index}>
                <div className="iconmap">
                  <img src={require(`../../assets/icons/map/iconmap${index+1}.svg`)} alt="icon" />
                </div>
                <p className="map__text">{item}</p>
              </div>
            })
          }
          </div>

          <div className="map">
            
          </div>
        </div>
      </div>
      
    </section>
    </>

  )
  
}
