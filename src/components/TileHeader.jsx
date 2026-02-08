
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FLAG_ID from '../assets/tileheader/ID.png'
import FLAG_PH from '../assets/tileheader/PH.png'
import FLAG_SG from '../assets/tileheader/SG.png'
import FLAG_TW from '../assets/tileheader/TW.png'
const TileHeader = ({title,line1,line2,line3,order,img})=> {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); 
  const variants = {
    hidden: { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0 },
  }
  let imgFile = null
  switch(img){
    case 'ID': imgFile = FLAG_ID; break
    case 'PH': imgFile = FLAG_PH; break
    case 'SG': imgFile = FLAG_SG; break
    case 'TW': imgFile = FLAG_TW; break
  }
  return (
    <motion.div 
    className='scale-hover-0'
    style={{margin:'6px',width:'300px',overflow:'hidden',borderRadius:'8px'}}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} transition={{ duration: 0.5, delay: 0.15*order }}>
        <div  style={{cursor:'default'}}>
            <div style={{ backgroundColor:'#ce1a38', backgroundImage: "url(" + imgFile + ")",display:'flex', justifyContent:'center'}}>
                <p style={{textAlign:'center', fontSize:'1.2rem',fontWeight:'400', color:'white', padding:'12px'}}>{title}</p>
            </div>
           <div  style={{textAlign:'left', padding:'12px', backgroundColor:'white', fontSize:'1rem',color:'black'}}>
                <p>{line1}</p>
                <p>{line2}</p>
                <p>{line3}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default TileHeader;