

import { useMediaQuery } from 'react-responsive'
import React, { useState, useEffect } from "react";
import './slideshow.css'
import MakatiCity2 from '../assets/makati-city-2.jpg'
import MakatiCity3 from '../assets/makati-city-2b.jpg'
import MakatiAck from '../assets/makati-ack.png'
import ManilaBldg1 from '../assets/manila-bldg-1.png'
export default function Slideshow({g}){
  
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const [images, setImages] = useState([MakatiAck,ManilaBldg1,MakatiCity2]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div style={{width:'100%',height:'100%',position:'relative'}}>
        {images.map((imgSrc, personIndex) => {
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === images.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} style={{overflow:'hidden',marginTop:'-1px'}}>
              <img style={{backgroundImage:"url("+imgSrc+")", opacity:'0.8', backgroundSize:'cover',width:'100%',height:'100%', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} />
            </article>
          );
        })}
    </div>
  )
}
