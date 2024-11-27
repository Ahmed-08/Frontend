import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import '../scss/Slider.scss';

const img = require.context('../assets/images/');

export default function Slider() {

    const [index, setIndex] = React.useState(0);

    const nextImage = ()=>{
        if(index >= img.keys().length-1){
            setIndex(0);
            return;
        }
        setIndex(index+1);
    }

    const prevImage = ()=>{
        if(index === 0){
            setIndex(4);
            return;
        }
        setIndex(index-1);
    }

    return (
        <div className='slider'>
            <div className="container">
                <div className="arrow-block" onClick={prevImage}>
                    <FaArrowLeftLong  className='arrow' color='green'/>
                </div>
                <div className="row">
                    <div className="cols">
                        <img src={require(`../assets/images${img.keys()[index].substring(1)}`)} alt="car" />
                    </div>

                    <div className="dots">
                        {
                            img.keys().map((_, i)=>{
                                return <div key={i} className='dot'style={{backgroundColor: i ===index?'#000':'#fff'}}></div>
                            })
                        }
                    </div>
                </div>
                <div className="arrow-block" onClick={nextImage}>
                    <FaArrowRight  color='green'/>
                </div>
            </div>
        </div>
  )
}
