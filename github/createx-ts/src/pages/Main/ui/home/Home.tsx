import React from 'react';
import { Button } from '../../../../shared/components/index.ts';
import './home.scss';

export const Home: React.FC = ()=>{
    console.log('home')
  return (
        <section className='home'>
            <img src={require('../../../../shared/assets/shapes.png')} className='shapes' alt="background"/>
            <img src={require('../../../../shared/assets/illustration.png')} className='illustration' alt="illustration"/>
            <div className="home__body">

                <div className="play">
                    <div className="btn-play">
                        <button><span></span></button>
                    </div>
                    <p>Play showreel</p>
                </div>
                <h1 className='title'>
                    Enjoy studying
                    with Createx Online Courses
                </h1>

                <div className="home__btns">
                    <Button text='About us' className='btn-type-2' width='148px'/>
                    <Button text='Explore courses' className='btn-type-1' width='201px'/>
                </div>

                <div className='home-bottom'>
                    <div>
                        <p>1200</p>
                        <p>Students graduated</p>
                    </div>
                    <div>
                        <p>84</p>
                        <p>Completed courses</p>
                    </div>
                    <div>
                        <p>16</p>
                        <p>Qualified tutors</p>                                
                    </div>
                    <div>
                        <p>5</p>
                        <p>Years of experience</p>                                 
                    </div>
                </div>
            </div>
        </section>
  )
}
