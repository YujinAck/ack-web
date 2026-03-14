
import React, { useRef } from 'react';
import FooterComponent from './FooterComponent.jsx';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import HeaderComponent from './HeaderComponent.jsx'
import AckLogo from '../assets/ack-logo.png'
import ActionButton from '../components/ActionButton.jsx'
import ManilaBldg1 from '../assets/manila-bldg-1.png'
import CollabImg1 from '../assets/others/collab-img-1.jpg'
import LightBulb1 from '../assets/others/lightbulb-img-1.png'
import OfficeTeam1 from '../assets/others/office-team-1.jpg'
import FadeRed1 from '../assets/fades/fade-red-1.png'
import FadeRed2 from '../assets/fades/fade-red-2.png'
import FadeRed3 from '../assets/fades/fade-red-3.png'
import FadeRed4 from '../assets/fades/fade-red-4.png'
import Maroon1 from '../assets/fades/fade-maroon-1.png'
import VicenteRed from '../assets/people/vicente-red-sq.jpg'
import CelsoRed from '../assets/people/celso-red-sq.jpg'

import LineEffect1 from '../assets/others/line-effect-2.png'
export default function LeadershipPage({}){
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
   <div className='careers-overview-page'  style={{backgroundColor:'#f5f5f5',minHeight:'100vh'}}>
      <HeaderComponent/>
      <div style={{}}>
        <div style={{display:'flex', flexDirection:isMobile?'column':'row',height:isMobile?'70vh':'80vh'}}>
            <div style={{width:'100%',marginTop:'10vh',paddingLeft:'5vw',paddingRight:'5vw'}}>
              <p style={{fontSize:isMobile?'2.2rem':'2.6rem',fontWeight:isMobile?'500':'400',paddingTop:'8vh',color:'black'}}>Built by Experts. Led by Experience.</p>
              <p style={{fontSize:'1.2rem',fontWeight:'400',lineHeight:'1.5rem', color:'rgb(64, 64, 64)',marginTop:'12px'}}>Our leadership is built on deep technical expertise and real-world delivery experience. The company was founded by seasoned Avaloq professionals who have spent years designing, developing, and implementing complex banking solutions across multiple markets.</p>         

            </div>
           {!isMobile&&<div style={{width:'100%',alignContent:'center',justifyContent:'center',display:'flex',padding:'10vh 0vw'}}> 
              <div style={{width:isMobile?'100vw':'28vw',borderRadius:'18px',overflow:'hidden'}}>
                <img src={ManilaBldg1} alt="manila ack logo" style={{ width: '100%', height: '100%', objectFit:'cover' }} />
              </div>
            </div>}
        </div>

        <div style={{padding:'2vh 5vw'}}>
          <div style={{backgroundColor:'#59272c',borderRadius:'12px',padding:isMobile?'5vh 30px':'5vh 5vw'}}>
              <p style={{color:'white',fontSize:'2rem',fontWeight:'500',lineHeight:'2rem',paddingBottom:'12px'}}>Leadership Rooted in Avaloq Mastery</p>
              <p style={{color:'white',fontSize:'1.3rem',fontWeight:'300'}}>Leadership rooted in practical experience creates clarity, confidence, and consistent results across every engagement.</p>
          </div>
        </div>

         <div style={{display:'flex',height:'100%',paddingLeft:'5vw',paddingRight:'5vw'}}>
            <div style={{width:'35%',height:'300px',marginRight:'5vw'}}>
                <img src={AckLogo} alt="ACK LOGO ICON" style={{width: '100%', height: '100%', objectFit:'contain' }} />
            </div>
            <div style={{width:'90%',alignContent:'center'}}>
                <p style={{fontSize:isMobile?'1.4rem':'2rem',fontWeight:isMobile?'480':'420',lineHeight: isMobile?'1.4rem':'2rem'}}>WHO WE ARE​</p>
                <p style={{fontSize:isMobile?'0.85rem':'1.1rem', fontWeight:'360',marginTop:'12px'}}>Founded on October 18, 2022, ACK Solutions was established by Avaloq professionals with over a decade of hands-on experience in customizing and enhancing Avaloq Wealth products. ​</p>
            </div>
        </div>

         <div style={{display:'flex',height:'100%',display:'flex',height:isMobile?'35vh':'80vh',marginTop:isMobile?'4vh':'10vh', marginBottom:isMobile?'2vh':'5vh'}}>
            <div style={{width:'100%',overflow:'hidden'}}>
                <div  style={{position:'absolute',padding:'20px'}}>
                  <p style={{color:'white',fontSize:isMobile?'1rem':'1.4rem',fontWeight:'300'}}>Vicente Figueroa III</p>
                  <p style={{color:'white',fontSize:isMobile?'0.8rem':'1rem',fontWeight:'300',marginTop:'-5px',opacity:'0.85'}}>President / CEO​</p>
                </div>
                <img src={VicenteRed} alt="ACK FOUNDER CEO" style={{width: '100%', height: '100%', objectFit:'cover' }} />
            </div>
            <div style={{width:'100%',overflow:'hidden',position:'relative'}}>
                <div style={{position:'absolute', width:'100%',padding:'20px',textAlign:'right',display:'flex',flexDirection:'column'}}>
                    <p style={{color:'white',fontSize:isMobile?'1rem':'1.4rem',fontWeight:'300'}}>Celso Ribunal</p>
                    <p style={{color:'white',fontSize:isMobile?'0.8rem':'1rem',fontWeight:'300',marginTop:'-5px',opacity:'0.85'}}>COO​</p>
                </div>
                <img src={CelsoRed} alt="ACK FOUNDER COO" style={{width: '100%', height: '100%', objectFit:'cover' }} />
            </div>
         </div>
         <div style={{padding:isMobile?'0 20px':'0 10vw',marginBottom:isMobile?'8vh':'12vh'}}>
           <p style={{fontSize:isMobile?'1rem':'1.8rem',textAlign:'center', fontWeight:isMobile?'300':'300',lineHeight:isMobile?'1.2rem':'2.2rem', color:'black',marginTop:'12px'}}>With deep expertise in configuration, development, and platform optimization, the founders have successfully supported financial institutions in tailoring Avaloq solutions to meet complex business and regulatory requirements.</p>         

         </div>
          


        <div className='footer-msg-careers' style={{padding:'5vw'}}>
          
            <div style={{backgroundColor:'#cf1b39',borderRadius:'18px',position:'relative'}}>
                <div style={{display:'flex',position:'absolute',width:'100%',height:'100%',pointerEvents:'none', justifyContent:'flex-end',zIndex:0 }}>
                  <img src={LineEffect1} alt="fade" style={{float: 'right', objectFit:'contain'}} />
                </div>
              <div style={{padding:'42px 8vw',zIndex:4}}>
                <p style={{fontSize:'1.3rem',fontWeight:'500',color:'white'}}>Are you ready to take the leap</p>
                <p style={{fontSize:'1rem',fontWeight:'400',color:'white',opacity:'0.85'}}>Step forward with confidence and explore opportunities that challenge and inspire you to grow.</p>
                <br/>
                
                <ActionButton title='Contact Us' type='white'/>
              </div>
            </div>

        </div>
      </div>
        
      <FooterComponent/>
   </div>
  )
}
