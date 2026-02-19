
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import AckLogoWhitePng from '../assets/ack-logo-white.png'
import LineEffect3 from '../assets/others/line-effect-2.png'
export default function FooterComponent({}){
  
  const isMobile = useMediaQuery({ maxWidth: 767 })
    const ref = useRef(null);
  return (
    <div className='footer-comp' style={{width:'100%',height:'fit-content',backgroundColor:'blue', position:'relative', backgroundColor:'#cf1b39',display:'flex',flexDirection:'column'}}>
        {!isMobile&&
        <div style={{display:'flex',position:'absolute',pointerEvents:'none',width:'100%',height:'100%',justifyContent:'flex-start' }}>
            <img src={LineEffect3} alt="fade" style={{float: 'right', objectFit:'contain', transform:'scaleX(-1)'}} />
        </div>}
        <div style={{height:'60px'}}>
        </div>
        <div style={{display:'flex'}}>
            {!isMobile&&<div style={{width:'100%',paddingLeft:'5vw'}}>
                <img src={AckLogoWhitePng} alt="ACK LOGO ICON" style={{ pointerEvents:'none', width: '240px', height: '240px', objectFit:'contain' }} />
            </div>}
            <div style={{width:'100%',display:'flex',paddingBottom:'26px',justifyContent:isMobile?'center':'right',paddingLeft:'5vw'}}>
                <div style={{width:'100%',maxWidth:isMobile?'':'200px'}}>
                    <p style={{fontSize:'1.2rem',fontWeight:'400',color:'white',opacity:'0.6'}}>Solutions</p>
                    <Link to="/solutions"><p className='footer-link'>Overview</p></Link>
                    <br/>
                    {/* <p style={{fontSize:'1.2rem',fontWeight:'400',color:'white',opacity:'0.6'}}>Services</p>
                    <Link to="/services/consulting">    <p className='footer-link'>Consulting</p></Link>
                    <Link to="/services/training">      <p className='footer-link'>Training</p></Link>
                    <Link to="/services/customization"> <p className='footer-link'>Customization</p></Link>
                    <Link to="/services/maintenance">   <p className='footer-link'>Maintenance</p></Link> */}
                </div>

                <div style={{width:'100%',maxWidth:isMobile?'':'200px'}}>
                    <p style={{fontSize:'1.2rem',fontWeight:'400',color:'white',opacity:'0.6'}}>About</p>
                    <Link to="/about/clients">      <p className='footer-link'>Clients</p></Link>
                    <Link to="/about/leadership">   <p className='footer-link'>Leadership</p></Link>
                    {/* <Link to="/blogs">              <p className='footer-link'>Blogs</p></Link> */}
                </div>
                
                <div style={{width:'100%',maxWidth:isMobile?'':'200px'}}>
                    <p style={{fontSize:'1.2rem',fontWeight:'400',color:'white',opacity:'0.6'}}>Careers</p>
                    <Link to="/careers"> <p className='footer-link'>Overview</p></Link>
                    {/* <Link to="/job-openings"> <p className='footer-link'>Job openings</p></Link> */}
                </div>
            </div>
        </div>
        <div style={{padding:'0 5vw',height:'fit-content',paddingBottom:'20px'}}>
            <div style={{borderTopColor:'#f98396',borderTopWidth:'2px',paddingTop:'10px'}}>
                <div style={{display:'flex'}}>
                    <div style={{width:'100%',display:'flex'}}>
                        <p style={{color:'white',fontSize:'0.8rem',marginTop:'8px',opacity:'0.7',cursor:'default'}}>©2026 ACK Solutions Inc.</p>
                    </div>
                    <div style={{width:'100%',display:'flex', flexDirection:isMobile?'column':'row',height:'100%', justifyContent:'flex-end',alignItems:'flex-end'}}>
                        <Link to="/legal-info"><p className='ft-underline-link'>Legal information</p></Link>
                        <Link to="/terms-of-use"><p className='ft-underline-link'>Terms of Use</p></Link>
                        <Link to="/privacy-policy"><p className='ft-underline-link'>Privacy policy</p></Link>
                        <Link to="/cookies"><p className='ft-underline-link'>Cookies</p></Link>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}
