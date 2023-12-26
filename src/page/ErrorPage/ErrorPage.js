import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.scss'

export default function ErrorPage() {
  return (
    <div className='error-content'>
        <div className='error-box'>
            <h1 className='h1-error'>404</h1>
            <h3 className='h3-error'>Il n'y a rien ici</h3>
            <p className='p-error'>Peut-être que la page que vous cherchez n'existe plus</p>
            <div className='div-btn'>
                <Link to={"/"} className='btn-back'>Retour à la page d'accueille</Link>
            </div>
        </div>
    </div>
  )
}
