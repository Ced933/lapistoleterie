import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Home.scss';
import Header from '../../components/Header/Header';
import AboutUs from '../../components/AboutUs/AboutUs';
import Parallax from '../../components/Parallax/Parallax';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
export default function Home() {
  return (
    <div>
        <Navigation/>
        <Header/>
        <AboutUs/>
        <Parallax/>
        <Contact/>
        <Footer/>
    </div>
  )
}
