import React from 'react';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className='nav'>
        <div className='nav-container'>
            <img className='img-nav' src='./finallaps-01.png' />

            <ul className='ul-list-link'>
              <li>
                <a className='link-nav' href='#about'>About us </a>
              </li>
              <li>
                <a className='link-nav' href='#gallery'>Gallery </a>
              </li>
              <li>
                <a className='link-nav' href='#contactus'>Contact</a>
              </li>
              <li>
                <a className='link-nav' href='#faq'>FAQ</a>
              </li>
            </ul>
        </div>
    </nav>
  )
}
