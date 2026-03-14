

import { useMediaQuery } from 'react-responsive'
import React, { useState, useEffect } from "react";
import './slideshow.css'
import MakatiCity2 from '../assets/makati-city-2.jpg'
import MakatiCity3 from '../assets/makati-city-2b.jpg'
import MakatiAck from '../assets/makati-ack.png'
import ManilaBldg1 from '../assets/manila-bldg-1.png'
import BanaueAck from '../assets/banaue-ack.png'
export default function Slideshow({g}){
  
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const [images, setImages] = useState([MakatiAck,ManilaBldg1,BanaueAck,MakatiCity2]);
  const [index, setIndex] = useState(0);

  const lines = [
    {
         headline:'Deliver Faster. Deliver Right.'
        ,subtext:'We help teams move quickly without compromising quality or compliance.'
    },
    {
         headline:'Proven Delivery Excellence'
        ,subtext:'A track record of reliable outcomes across complex, high-impact initiatives.'
    },
    {
      headline:'Driving Change While Preserving Stability'
      ,subtext:'We help organizations evolve continuously while keeping operations running smoothly.'
    },
    {
         headline:'Focused. Reliable. Results-Driven.'
        ,subtext:'A delivery mindset centered on outcomes that matter to the business.'
    }
    // ,{
    //      headline:''
    //     ,subtext:''
    // }
  ]
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
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div style={{width:'100%',height:'100%',position:'relative'}}>
        {images.map((imgSrc, personIndex) => {
          let position = "nextSlide";
          let slideLines = lines[personIndex]
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
            <div>
                <article className={position} style={{overflow:'hidden'}}>
                    <img style={{zIndex:1, backgroundImage:"url("+imgSrc+")",marginTop:'-1px', opacity:'0.8', backgroundSize:'cover',width:'100%',height:'101%', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} />
                </article>
                {personIndex===index&&
                <div style={{position:'absolute',zIndex:2,width:isMobile?'80vw':'70vw',paddingLeft:'2vw',paddingTop:'55vh'}}>
                    <p style={{fontSize:isMobile?'1.6rem':'2.4rem',fontWeight:'500',color:'white',textShadow: '3px 2px #00000077'}}>{slideLines.headline}</p>
                    <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'400',color:'white',marginTop:isMobile?'-4px':'-8px',textShadow: '2px 2px #00000077',lineHeight:isMobile?'1rem':'1.2rem'}}>{slideLines.subtext}</p>
                </div>}
            </div>
          );
        })}
    </div>
  )
}
