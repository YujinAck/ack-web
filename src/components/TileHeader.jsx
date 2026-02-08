
import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive'
import { motion, useInView } from 'framer-motion';
import FLAG_ID from '../assets/tileheader/ID.png'
import FLAG_PH from '../assets/tileheader/PH.png'
import FLAG_SG from '../assets/tileheader/SG.png'
import FLAG_TW from '../assets/tileheader/TW.png'
export default function TileHeader({title,story,tasks,order,img}){
  
  const isMobile = useMediaQuery({ maxWidth: 767 })
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
    let taskList = []
      tasks.forEach(t=>{
        taskList.push(
        <div style={{backgroundColor:'#00004d',margin:'2px',borderRadius:'8px'}}>
          <p style={{color:'white',fontSize:'0.72rem',fontWeight:'500',paddingLeft:'6px',paddingRight:'6px',paddingBottom:'1px'}}>{t}</p>
        </div>)
      })
  return (
    <motion.div 
    className='scale-hover-0'
    style={{margin:'6px',width:isMobile?'90vw':'300px',overflow:'hidden',backgroundColor:'white', height:'fit-content', borderRadius:'8px',paddingBottom:'4px'}}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} transition={{ duration: 0.5, delay: 0.15*order }}>
        <div  style={{cursor:'default'}}>
            <div style={{ backgroundColor:'#ce1a38', backgroundImage: "url(" + imgFile + ")", backgroundSize: 'cover', display:'flex', justifyContent:'center'}}>
                <p style={{textAlign:'center', fontSize:'1.2rem',fontWeight:'400', color:'white', padding:'12px'}}>{title}</p>
            </div>
            
            <div style={{backgroundColor:'white',paddingBottom:'12px'}}>
               <p style={{ padding:'10px', fontSize:'0.9rem',paddingTop:'8px', textAlign:'center'}}>{story}</p>
                <div style={{display:'flex',justifyContent:'center'}}>
                  {taskList}
                </div>
            </div>
            
        </div>
    </motion.div>
  )
}
