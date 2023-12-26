import React, { useState } from 'react';
import './Dropdown.scss';

export default function Dropdown({index,datafaq}) {
    const [arrowOpen, setArrowOpen] = useState(false);
    const handleToggle = () => {

        setArrowOpen(!arrowOpen);
    } 
  return (
    <div  key={index} className='dropdown-item'>
      <div  className='header-dropdown-item'>
          <h3 className='h3-dropdown'>{datafaq.title}</h3>
          <img  onClick={()=>handleToggle(index)} src='./fetch.svg' className='img-arrow' style={{ transform:`rotate(${arrowOpen ? 180 : 0}deg)`, transition:'all 0.5s ease'}}  />
      </div>
      <div className={arrowOpen ? 'content-dropdown-item-active':'content-dropdown-item'}>  
        <p className='p-description'>
            {datafaq.description}
        </p>
    </div>
  
</div>
  )
}
