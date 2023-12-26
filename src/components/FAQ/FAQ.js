import React, { useState } from 'react'
import './FAQ.scss';
import dataFaq from '../../Data/dataFaq';
import Dropdown from '../Dropdown/Dropdown';

export default function FAQ() {
   
console.log(dataFaq);

  return (
    <div data-testid="faq" id='faq' className='faq-container'>
        <h2 className='faq-h2'>Foire aux questions</h2>
        <div className='dropdown-box'>
            {
                dataFaq.map((faq,index) =>{
               return <Dropdown  key={index} index={index} datafaq={faq} />
                })
                       
            }
     
        </div>

    </div>
  )
}
