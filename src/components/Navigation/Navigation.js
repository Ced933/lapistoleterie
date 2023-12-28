import React, { useState } from 'react';
import './Navigation.scss';

export default function Navigation() {

  // faire apparaitre ou disparaître le menu en cliquant sur le l'icon humburger
  const [active, setActive] = useState("ul-list-link");
const handleMenu = () =>{
  active === "ul-list-link" ? setActive("ul-list-link nav-active-mobile") : setActive("ul-list-link");
}

// lorsqu'on va cliquer sur un lien on sera redirigé vers se lien et le menu se fermera 
// si on clique sur un lien même en mode non responsivelorsqu'on passera en mode responsive le menu sera pas Ouvert 
const handleMenuLink = () =>{
  active === "ul-list-link nav-active-mobile" ? setActive("ul-list-link") : setActive("ul-list-link");
}
  // change color nav 
  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 80){
      setColor(true)
    }else{
      setColor(false)
    }

  }
  window.addEventListener('scroll', changeColor)

  return (
    <nav  className={color ? 'nav-bg nav' : 'nav'}>
        <div className='nav-container'>
          <a href='/'>

            <img className='img-nav' src='./finallaps-01.png' />
          </a>

            <ul className={active}>
              <li>
                <a className='link-nav' onClick={handleMenuLink} href='#about'>About us </a>
              </li>
              <li>
                <a className='link-nav' onClick={handleMenuLink} href='#gallery'>Gallery </a>
              </li>
              <li>
                <a className='link-nav' onClick={handleMenuLink} href='#faq'>FAQ</a>
              </li>
              <li>
                <a className='btn-contact' onClick={handleMenuLink} href='#contactus'>Contact</a>
              </li>
            </ul>
            <div onClick={handleMenu}  id="nav-icon4">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
    </nav>
  )
}
