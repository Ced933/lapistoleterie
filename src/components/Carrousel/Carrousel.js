import React from 'react'
import './Carrousel.scss'
import { Link } from 'react-router-dom'
export default function Carrousel({currentImg,trigger,setTrigger}) {

    console.log(currentImg);
  return (trigger) ?( 


    <div className='carrousel-container'>
        <div className='carrousel-bg' ></div>

        <div className='div-white-cross' onClick={() => setTrigger(false)}>
            <img src='./white-cross.png' />
        </div>
        <div className='div-carrousel-img'>
            <img className='carrousel-img' src={currentImg}/>
        </div>
    </div>
  ) : ""
}
