import React, { useState } from 'react';
import './Footer.scss';

export default function Footer() {

  const [currentYear, setCurrrentYear] = useState(new Date().getFullYear())
  console.log(currentYear);
  return (
    <footer className='footer'>
        <p>{currentYear}, ©lapistoleterie All right reserved  </p>

    </footer>
  )
}
