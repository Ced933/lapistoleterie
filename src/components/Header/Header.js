import React from 'react';
import './Header.scss';
export default function Header() {
  return (
    <div className='header-container'>
        <div className='header-box-describe'>
            <h1 className='h1-header'>DE LA COULEUR À VOS  PROJETS</h1>
            <p className='p-header'>Intérieur, Extérieur, Rénovation,Tout support</p>
            <a href='#contactus' className='button-header'>NOUS CONTACTER </a>
        </div>
    </div>
  )
}
