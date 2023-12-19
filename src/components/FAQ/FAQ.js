import React, { useState } from 'react'
import './FAQ.scss';

export default function FAQ() {
    const [arrowOpen, setArrowOpen] = useState(false);
    const handleToggle = () => {
        setArrowOpen(!arrowOpen);
    } 

  return (
    <div className='faq-container'>
        <h2 className='faq-h2'>Foire aux questions</h2>
        <div className='dropdown-box'>
            <div className='dropdown-item'>
                <div className='header-dropdown-item'>
                    <h3 className='h3-dropdown'>QUELS SERVICES DE FINITION INTÉRIEURE PROPOSEZ-VOUS ?</h3>
                    <img onClick={handleToggle} src='./fetch.svg' className='img-arrow' style={{ transform:`rotate(${arrowOpen ? 180 : 0}deg)`, transition:'all 0.5s ease'}}  />
                </div>

             {
                arrowOpen ? ( <div className='content-dropdown-item' style={{opacity:'1'}}>   
                <p>La Pistoleterie offre une gamme complète de services de finition intérieure, 
                    y compris la peinture pour murs, sols, et plafonds, la pose d’enduits décoratifs, 
                    la rénovation de sols abîmés, la création de douches à l’italienne en béton ciré, 
                    l’application de papier peint personnalisé, et bien plus encore.
                    Nous sommes spécialisés dans la transformation de vos espaces intérieurs. 
                </p>
            </div>) : null
             }  
            </div>
        </div>

    </div>
  )
}
