import React from 'react';
import heart from '../../../../shared/assets/icons/Heart.svg';
import './bottom.css';

export const FooterBottom: React.FC = ()=>{
  return (
    <section className='footer-bottom'>
        <div className="container">
            <div className="wrapper">
                <div className="left">
                    <p>© All rights reserved.</p>
                    <p>Made with</p>
                    <img src={heart} className='heart' alt="heart"/>
                    <p>by Createx Studio </p>
                </div>

                <div className="right">
                    <p>GO TO TOP</p>
                </div>
            </div>
        </div>
    </section>
  )
}
