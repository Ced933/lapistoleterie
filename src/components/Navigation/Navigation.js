import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className='nav'>
        <div className='nav-container'>
            <img className='img-nav' src='./finallaps-01.png' />

            <div>
                <Link className='link-nav'>ABOUT US</Link>
                <Link className='link-nav'>GALLERY</Link>
                <Link className='link-nav'>CONTACT US</Link>
            </div>
        </div>
    </nav>
  )
}
