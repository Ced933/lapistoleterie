import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className='header-container'>
        <div className='header-box-describe'>
            <h1 className='h1-header'>DE LA COULEUR À VOS  PROJETS</h1>
            <p className='p-header'>Intérieur, Extérieur, Rénovation,Tout support</p>
            <Link to={"#contact"} className='button-header'>Nous contacter </Link>
        </div>
    </div>
  )
}
