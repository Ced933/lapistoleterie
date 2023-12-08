import React from 'react';
import './AboutUs.scss'
import Data from '../../Data/data';

export default function AboutUs () {
  return (
    <div>
        <div className='about-container'>
            <div className='div-img-about'>

            <img className='img-about' src='./IMG_3280.jpeg' />
            </div>

            <div className='div-description'>
                <h2>ARTISAN QUALIFIÉ ET DIPLÔMÉ </h2>
                <div>
                    <ul className='ul-about'>
                        {
                            Data.map((feature,index) =>{
                               return <li className='li-about' key={index}>{feature}</li>
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}
