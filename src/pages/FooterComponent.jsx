
import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive'
export default function FooterComponent({}){
  
  const isMobile = useMediaQuery({ maxWidth: 767 })
    const ref = useRef(null);
  return (
    <div className='footer-comp' style={{width:'100%',height:'fit-content',backgroundColor:'blue', backgroundColor:'#cf1b39',display:'flex',flexDirection:'column'}}>
        <div style={{height:'60px'}}>
        </div>

        <div style={{display:'flex',paddingBottom:'26px',justifyContent:isMobile?'center':'right',paddingLeft:'5vw'}}>
            <div style={{width:'100%',maxWidth:isMobile?'':'200px'}}>
                <p style={{fontSize:'1.2rem',fontWeight:'400',color:'white',opacity:'0.6'}}>Solutions</p>
                <p className='footer-link'>Overview</p>
                <br/>
                <p style={{fontSize:'1.2rem',fontWeight:'400',color:'white',opacity:'0.6'}}>Services</p>
                <p className='footer-link'>Consulting</p>
                <p className='footer-link'>Training</p>
                <p className='footer-link'>Customization</p>
                <p className='footer-link'>Maintenance</p>
            </div>

            <div style={{width:'100%',maxWidth:isMobile?'':'200px'}}>
                <p style={{fontSize:'1.2rem',fontWeight:'400',color:'white',opacity:'0.6'}}>About</p>
                <p className='footer-link'>Clients</p>
                <p className='footer-link'>Leadership</p>
                <p className='footer-link'>Partnerships</p>
            </div>
            
            <div style={{width:'100%',maxWidth:isMobile?'':'200px'}}>
                <p style={{fontSize:'1.2rem',fontWeight:'400',color:'white',opacity:'0.6'}}>Careers</p>
                <p className='footer-link'>Overview</p>
                <p className='footer-link'>Job openings</p>
            </div>
        </div>

        <div style={{padding:'0 5vw',height:'fit-content',paddingBottom:'20px'}}>
            <div style={{borderTopColor:'#f98396',borderTopWidth:'2px',paddingTop:'10px'}}>
                <div style={{display:'flex'}}>
                    <div style={{width:'100%',display:'flex'}}>
                        <p style={{color:'white',fontSize:'0.8rem',marginTop:'8px',opacity:'0.7',cursor:'default'}}>©2026 ACK Solutions Inc.</p>
                    </div>
                    <div style={{width:'100%',display:'flex', flexDirection:isMobile?'column':'row',height:'100%', justifyContent:'flex-end',alignItems:'flex-end'}}>
                        <p className='ft-underline-link'>Legal information</p>
                        <p className='ft-underline-link'>Terms of Use</p>
                        <p className='ft-underline-link'>Privacy policy</p>
                        <p className='ft-underline-link'>Cookies</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}
