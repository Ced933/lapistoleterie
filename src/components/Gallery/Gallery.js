import React, { useState } from 'react';
import './Gallery.scss';
import dataImg from '../../Data/dataImg';
import Carrousel from '../Carrousel/Carrousel';
import { Link } from 'react-router-dom';


export default function Gallery() {
    const [carrousel, setCarrousel] = useState(false)
    console.log(dataImg);

    const handleGallery = (imgSrc)=>{
        console.warn(imgSrc)
        // on recupère l'url de l'image 
        // On le donne à notre variable carrousel 
        setCurrentImg(imgSrc)
        // on affiche le carroussel 
        setCarrousel(true)
    }

    const [currentImg, setCurrentImg] = useState()

  return (
    <div className='gallery-container' id='gallery'>
                <Carrousel currentImg={currentImg} trigger={carrousel} setTrigger={setCarrousel} />

        <div className='gallery-box'>

            <h2 className='h2-gallery'>Travaux Réalisés</h2>
            <div className='grille'>
                {
                  dataImg.map((img, index) =>{

                      return (
                      <div className='div-img-caroussel' key={index} onClick={() => handleGallery(img.imgSrc) } >
                        <img onClick={handleGallery} className='img-gallery' src={img.imgSrc} />
                      </div>
                      
                      )
                  })  
                }
               


            </div>

        </div>

    </div>
  )
}
