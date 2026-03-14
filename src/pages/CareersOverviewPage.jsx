
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

import LineEffect1 from '../assets/others/line-effect-2.png'
export default function CareersOverviewPage({}){
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
   <div className='careers-overview-page'  style={{backgroundColor:'#f5f5f5',minHeight:'100vh'}}>
      <HeaderComponent/>
      <div style={{}}>
        <div style={{display:'flex', flexDirection:isMobile?'column':'row',}}>
            <div style={{width:'100%',marginTop:'10vh',paddingLeft:'5vw',paddingRight:'5vw'}}>
              <p style={{fontSize:isMobile?'2rem':'2.6rem',fontWeight:'400',paddingTop:'8vh',color:'black'}}>Be part of our team</p>
              <p style={{fontSize:'1.2rem',fontWeight:'400',lineHeight:'1.5rem', color:'rgb(64, 64, 64)',marginTop:'12px'}}>ACK Solutions Inc. fosters a collaborative, supportive, and flexible work environment that empowers our people to perform at their best. Through continuous collaboration, open dialogue, and constructive feedback, we nurture a creative and engaging culture where ideas thrive and innovation is turned into reality.</p>         
              <br/>
              <ActionButton title='Explore jobs' to='/job-openings'/>
            </div>
            <div style={{width:'100%',alignContent:'center',justifyContent:'center',display:'flex',padding:'10vh 0vw'}}> 
              <div style={{width:isMobile?'100vw':'28vw',borderRadius:'18px',overflow:'hidden'}}>
                <img src={ManilaBldg1} alt="manila ack logo" style={{ width: '100%', height: '100%', objectFit:'cover' }} />
              </div>
            </div>
        </div>

        <div style={{ paddingTop:'10vh',paddingBottom:'10vh'}}>
            <div style={{backgroundColor:'#cf1b39',height:'100%',display:'flex',flexDirection:isMobile?'column':'row',justifyContent:'center'}}>
                {!isMobile&&<div style={{width:'100%'}}>
                  <div style={{width:'100%',alignContent:'center',justifyContent:'center',display:'flex',height:'100%'}}> 
                    <div style={{overflow:'hidden',width:'100%',position:'relative '}}>
                      <img src={FadeRed4} alt="fade" style={{ width: '100%', height: '100%', objectFit:'cover',position:'absolute' }} />
                      <img src={CollabImg1} alt="manila ack logo" style={{ width: '100%', height: '100%', objectFit:'cover' }} />
                    </div>
                  </div>
                </div>}
                <div style={{width:'100%',paddingRight:'5vw',paddingLeft:'5vw',paddingTop:'',paddingBottom:isMobile?'4vh':''}}>
                  <div style={{display:'flex',flexDirection:'column',height:'100%',justifyContent:'center'}}>
                    <p style={{fontSize:isMobile?'1.7rem':'2.4rem',fontWeight:'400',color:'white'}}>A culture built on collaboration  </p>
                    <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'300',lineHeight:isMobile?'1.2rem':'1.5rem', color:'#ffeaee',marginTop:'2px'}}>We promote a collaborative working culture where teamwork, transparency, and shared accountability drive success. By fostering open communication and strong partnerships across teams, we create an environment where individuals are empowered and collective goals are achieved.</p>
                  </div>
                </div>
            </div>
            <div style={{backgroundColor:'rgb(116, 29, 43)',height:'100%',display:'flex',flexDirection:isMobile?'column':'row',justifyContent:'center'}}>

                <div style={{width:'100%',paddingRight:'5vw',paddingLeft:'5vw',paddingTop:'',textAlign:'right',paddingBottom:isMobile?'4vh':''}}>
                  <div style={{display:'flex',flexDirection:'column',height:'100%',justifyContent:'center'}}>
                    <p style={{fontSize:isMobile?'1.7rem':'2.4rem',fontWeight:'400',color:'white'}}>A Learning-driven environment</p>
                    <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'300',lineHeight:isMobile?'1.2rem':'1.5rem', color:'#ffeaee',marginTop:'2px'}}>We encourage constant knowledge sharing, open feedback, and continuous improvement. Through close collaboration and transparent communication, our teams are supported in developing new skills, exploring ideas, and turning innovation into reality.</p>
                  </div>
                </div>
               {!isMobile&&<div style={{width:'100%'}}>
                  <div style={{width:'100%',alignContent:'center',justifyContent:'center',display:'flex',height:'100%'}}> 
                    <div style={{overflow:'hidden',width:'100%',position:'relative '}}>
                      <img src={Maroon1} alt="fade" style={{transform: 'scaleX(-1)', width: '100%', height: '100%', objectFit:'cover',position:'absolute' }} />
                      <img src={LightBulb1} alt="manila ack logo" style={{ width: '100%', height: '100%', objectFit:'cover' }} />
                    </div>
                  </div>
                </div>}
            </div>

             <div style={{backgroundColor:'#cf1b39',height:'100%',display:'flex',flexDirection:isMobile?'column':'row',justifyContent:'center'}}>
                 {!isMobile&&<div style={{width:'100%'}}>
                  <div style={{width:'100%',alignContent:'center',justifyContent:'center',display:'flex',height:'100%'}}> 
                    <div style={{overflow:'hidden',width:'100%',position:'relative '}}>
                      <img src={FadeRed4} alt="fade" style={{ width: '100%', height: '100%', objectFit:'cover',position:'absolute' }} />
                      <img src={OfficeTeam1} alt="office team" style={{ width: '100%', height: '100%', objectFit:'cover' }} />
                    </div>
                  </div>
                </div>}
                <div style={{width:'100%',paddingRight:'5vw',paddingLeft:'5vw',paddingTop:'',paddingBottom:isMobile?'4vh':''}}>
                  <div style={{display:'flex',flexDirection:'column',height:'100%',justifyContent:'center'}}>
                    <p style={{fontSize:isMobile?'1.7rem':'2.4rem',fontWeight:'400',color:'white'}}>Flexibility and trust</p>
                    <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'300',lineHeight:isMobile?'1.2rem':'1.5rem', color:'#ffeaee',marginTop:'2px'}}>We value outcomes over rigid structures. Our flexible work environment is built on trust, accountability, and giving you the space to perform at your best while maintaining balance.</p>
                  </div>
                </div>
            </div>
        </div>

         <div style={{paddingLeft:isMobile?'18px':'10vw',paddingBottom:isMobile?'3vh':'8vw',display:'flex',height:'100%'}}>
          <div style={{width:isMobile?'90%':'55%',paddingTop:isMobile?'8vh':'14vh'}}>
              <p style={{width:'80%', fontSize:isMobile?'1.4rem':'2rem',fontWeight:isMobile?'480':'420',lineHeight: isMobile?'1.4rem':'2rem'}}>What Sets Us Apart</p>
              <p style={{fontSize:isMobile?'0.85rem':'1.1rem', fontWeight:'360',marginTop:'12px'}}>Our culture is built on trust, open communication, and mutual respect—creating a positive space where individuals can grow, innovate, and succeed together.</p>
          </div>
          <div style={{width:'45%',height:'300px',marginRight:'5vw'}}>
              <img src={AckLogo} alt="ACK LOGO ICON" style={{ marginTop:isMobile?'12px':'44px',width: '100%', height: '100%', objectFit:'contain' }} />
          </div>
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
