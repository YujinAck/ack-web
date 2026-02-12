
import React, { useRef } from 'react';
import FooterComponent from './FooterComponent.jsx';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import HeaderComponent from './HeaderComponent.jsx'
import AckLogo from '../assets/ack-logo.png'
import AckLogoWhite from '../assets/ack-logo-white.png'
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
import Services1 from '../assets/services/consulting-img-1.jpg'
import Services2 from '../assets/services/training-img-1.jpg'
import Services3 from '../assets/services/discuss-img-1.jpg'
import Services4 from '../assets/services/maintain-img-1.jpg'

import LineEffect3 from '../assets/others/line-effect-3.png'
export default function SolutionsPage({}){
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
   <div className='careers-overview-page'  style={{backgroundColor:'#f5f5f5',minHeight:'100vh'}}>
      <HeaderComponent/>
      <div style={{}}>
         <div style={{backgroundColor:'#cf1b39',maxHeight:'82vh', height:'100%',display:'flex',flexDirection:isMobile?'column':'row',justifyContent:'center'}}>
            <div style={{width:'100%',paddingRight:'5vw',paddingLeft:'5vw',paddingTop:'',textAlign:'right',paddingBottom:isMobile?'4vh':''}}>
                  <div style={{display:'flex',flexDirection:'column',height:'100%',justifyContent:'center'}}>
                      <p style={{fontSize:isMobile?'2rem':'2.6rem',fontWeight:'400',paddingTop:'8vh',color:'white'}}>From strategy to delivery</p>
                      <p style={{fontSize:'1.2rem',fontWeight:'400',lineHeight:'1.5rem', color:'rgb(64, 64, 64)',marginTop:'12px',color:'white'}}>ACK Solutions Inc. empowers organizations to move faster and deliver with confidence by reinforcing teams with highly experienced Avaloq specialists. Choosing ACK Solutions means gaining a reliable partner committed to performance, quality, and sustainable growth.</p>         
                  </div>
                </div>
               {!isMobile&&<div style={{width:'100%'}}>
                  <div style={{width:'100%', alignContent:'center',justifyContent:'center',display:'flex',height:'100%'}}> 
                    <div style={{overflow:'hidden',width:'100%',position:'relative '}}>
                      <img src={FadeRed4} alt="fade" style={{transform: 'scaleX(-1)',marginLeft:'-1px', width: '100%', height: '100%', objectFit:'cover',position:'absolute' }} />
                      <img src={ManilaBldg1} alt="manila ack logo" style={{ width: '100%', height: '100%', objectFit:'cover' }} />
                    </div>
                  </div>
                </div>}
          </div>
          <p style={{fontSize:isMobile?'1.9rem':'2.3rem',fontWeight:'700',textAlign:'center',paddingTop:'8vh',color:'#3a4149'}}>Why ACK Solutions Inc.</p>
                
          <div style={{display:'flex', flexDirection:isMobile?'column':'', color:'white', marginTop:'2vw',width:'100%',padding:'0 8vw'}}>
                                <div className='ack-a scale-hover-2' style={{margin:isMobile?'6px 0px':'6px', backgroundColor:'#cf1b39',width:'100%',borderRadius:'10px',padding:'22px'}}>
                                    <p style={{fontSize:'1.2rem',fontWeight:'500'}}>
                                        <span style={{color:'white',fontWeight:'600',fontSize:'2.2rem'}}>A</span>
                                        <span>ccelerate</span>
                                    </p>
                                    <p style={{position:'absolute',fontSize:'8rem',marginTop:'-110px',marginLeft:'-18px',opacity:'0.15'}}>A</p>
                                    <p style={{fontSize:'1rem',fontWeight:'400',color:'rgb(255, 245, 245)'}}>Enables your team by bringing in expertise provided by seasoned Avaloq professionals.</p>
                                </div>

                                <div className='ack-a scale-hover-2' style={{margin:isMobile?'6px 0px':'6px', backgroundColor:'#cf1b39',width:'100%',borderRadius:'10px',padding:'22px'}}>
                                    <p style={{fontSize:'1.2rem',fontWeight:'500'}}>
                                        <span style={{color:'white',fontWeight:'600',fontSize:'2.2rem'}}>C</span>
                                        <span>omplete</span>
                                    </p>
                                    <p style={{position:'absolute',fontSize:'8rem',marginTop:'-110px',marginLeft:'-18px',opacity:'0.15'}}>C</p>
                                    <p style={{fontSize:'1rem',fontWeight:'400',color:'rgb(255, 245, 245)'}}>Accomplish more by ensuring deliverables are in good quality through efficient solutioning.</p>
                                </div>

                                <div className='ack-a scale-hover-2' style={{margin:isMobile?'6px 0px':'6px', backgroundColor:'#cf1b39',width:'100%',borderRadius:'10px',padding:'22px'}}>
                                    <p style={{fontSize:'1.2rem',fontWeight:'500'}}>
                                        <span style={{color:'white',fontWeight:'700',fontSize:'2.2rem'}}>K</span>
                                        <span>ick Start</span>
                                    </p>
                                    <p style={{position:'absolute',fontSize:'8rem',marginTop:'-110px',marginLeft:'-18px',opacity:'0.15'}}>K</p>
                                    <p style={{fontSize:'1rem',fontWeight:'400',color:'rgb(255, 245, 245)'}}>Kick start your projects by having professional that can mentor and guide the team.</p>
                                </div>
          </div>

         <div className='services-offered-full-page'  style={{height:'100%', minHeight:isMobile?'50vh':'800px', backgroundColor:'#f7f7f7',paddingBottom:'6vh'}}>
            <div style={{}}>
              <p style={{ textAlign:'center',  paddingBottom:'10vh', paddingTop:'2vh',paddingRight:'10vw',paddingLeft:'10vw',fontWeight:'400',fontSize:isMobile?'1rem':'1.2rem',color:'rgb(60,60,60)'}}>We deliver comprehensive services covering consulting, training, customization, and ongoing maintenance. Our experts help organizations design the right solutions, build capable teams, tailor Avaloq to business needs, and ensure long-term platform stability.</p>
            </div>
           <div className='show-grid' style={{display:'flex', justifyContent:'center', minHeight:isMobile?'80vh':'100%', flexDirection: 'row', flexWrap: 'wrap',height:isMobile?'80%':'70%', justifyContent:'center', paddingLeft:isMobile?'12px':'6vw',paddingRight:isMobile?'12px':'6vw'}}>
                   
                    <div className='service-1' style={{ position:'relative ', width:'100%', height:isMobile?'40vh':'60vh',minHeight:isMobile?'40vh':'500px', marginRight:'6px',maxWidth:isMobile?'42vw':'300px',marginTop:'12px',borderRadius:'24px',overflow:'hidden'}}>
                        <div style={{backgroundColor:'#cf1b39',width:'100%',height:'100%',display: 'flex',flexDirection:'column'}}>
                            <div style={{width:'100%',height:'100%',opacity:'0.8', position :'absolute', backgroundColor:'red',position :'absolute', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundImage: "url(" + Services1 + ")",}}></div>
                            <div style={{backgroundColor:'#731d2b',zIndex:2, padding:'8px',width:isMobile?'fit-content':'70%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px',paddingRight:'12px'}}>CONSULTING</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{zIndex:2,padding:isMobile?'12px':'18px', fontSize:isMobile?'1rem':'1.1rem',lineHeight:isMobile?'1.1rem':'', fontWeight:'500',color:'white'}}>We analyze and design business requirements into effective, technology-driven solutions.</p>
                        </div>
                    </div>

                    <div className='service-2' style={{ position:'relative ', width:'100%', height:isMobile?'40vh':'60vh',minHeight:isMobile?'40vh':'500px', marginRight:'6px',maxWidth:isMobile?'42vw':'300px',marginTop:'12px',borderRadius:'24px',overflow:'hidden'}}>
                        <div style={{backgroundColor:'#cf1b39',width:'100%',height:'100%',display: 'flex',flexDirection:'column'}}>
                            <div style={{backgroundImage: "url(" + Services2 + ")",width:'100%',height:'100%',opacity:'0.8', position :'absolute', backgroundColor:'red',position :'absolute', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}></div>
                            <div style={{backgroundColor:'#731d2b',zIndex:2, padding:'8px',width:isMobile?'fit-content':'70%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px',paddingRight:'12px'}}>TRAINING</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{zIndex:2,padding:isMobile?'12px':'18px', fontSize:isMobile?'1rem':'1.1rem',lineHeight:isMobile?'1.1rem':'', fontWeight:'500',color:'white'}}>
                               {isMobile?
                                'We provide Avaloq training to upskill developers with platform knowledge and best practices.'
                                :'We provide in-house Avaloq training to upskill developers with practical platform knowledge and best practices.'}
                            </p>
                        </div>
                    </div>

                    <div className='service-3' style={{ position:'relative ', width:'100%',  height:isMobile?'40vh':'60vh',minHeight:isMobile?'40vh':'500px', marginRight:'6px',maxWidth:isMobile?'42vw':'300px',marginTop:'12px',borderRadius:'24px',overflow:'hidden'}}>
                        <div style={{backgroundColor:'#cf1b39',width:'100%',height:'100%',display: 'flex',flexDirection:'column'}}>
                            <div style={{backgroundImage: "url(" + Services3 + ")",width:'100%',height:'100%',opacity:'0.8', position :'absolute', backgroundColor:'red',position :'absolute', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}></div>
                            <div style={{backgroundColor:'#731d2b',zIndex:2, padding:'8px',width:isMobile?'fit-content':'70%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px',paddingRight:'12px'}}>CUSTOMIZATION</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{zIndex:2,padding:isMobile?'12px':'18px', fontSize:isMobile?'1rem':'1.1rem', lineHeight:isMobile?'1.1rem':'', fontWeight:'500',color:'white'}}>
                                {isMobile?
                                    'We support Change the Bank and reliable project support'
                                    :'We support Change the Bank through controlled Avaloq customizations and reliable project support aligned with platform standards.'
                                }
                            </p>
                        </div>
                    </div>

                    <div className='service-4' style={{ position:'relative ', width:'100%',  height:isMobile?'40vh':'60vh',minHeight:isMobile?'40vh':'500px', marginRight:'6px',maxWidth:isMobile?'42vw':'300px',marginTop:'12px',borderRadius:'24px',overflow:'hidden'}}>
                        <div style={{backgroundColor:'#cf1b39',width:'100%',height:'100%',display: 'flex',flexDirection:'column'}}>
                            <div style={{backgroundImage: "url(" + Services4 + ")",width:'100%',height:'100%',opacity:'0.8', position :'absolute', backgroundColor:'red',position :'absolute', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}></div>
                            <div style={{backgroundColor:'#731d2b',zIndex:2, padding:'8px',width:isMobile?'fit-content':'70%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px',paddingRight:'12px'}}>MAINTENANCE</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{zIndex:2,padding:isMobile?'12px':'18px', fontSize:isMobile?'1rem':'1.1rem',lineHeight:isMobile?'1.1rem':'', fontWeight:'500',color:'white'}}>
                                {isMobile?
                                'We ensure stable Run the Bank operations and ongoing end-user support.'
                                :'We ensure stable Run the Bank operations through reliable Avaloq maintenance and ongoing end-user support.'
                                }
                            </p>
                        </div>
                    </div>

                </div>
        </div>

            <div style={{paddingLeft:isMobile?'18px':'10vw',marginBottom:isMobile?'3vh':'3vw',display:'flex',backgroundColor:'#cf1b39'}}>
                <div style={{width:isMobile?'90%':'55%',paddingTop:isMobile?'8vh':'22vh',paddingBottom:isMobile?'8vh':'22vh'}}>
                    <p style={{width:'100%', fontSize:isMobile?'1.4rem':'2rem',fontWeight:isMobile?'480':'420',lineHeight: isMobile?'1.4rem':'2rem',color:'white'}}>Proven track record of delivering complex banking initiatives across major regional markets</p>
                    <p style={{fontSize:isMobile?'0.85rem':'1.1rem', fontWeight:'360',marginTop:'12px',color:'white'}}>By combining deep industry expertise with a collaborative delivery approach, we have successfully partnered with leading banks across the region: helping them strengthen operations, improve efficiency, and achieve sustainable growth.</p>
                </div>
                 <div style={{width:'35%',height:'300px',marginRight:'5vw',paddingTop:'10vh'}}>
                     <img src={AckLogoWhite} alt="ACK LOGO ICON" style={{ marginTop:isMobile?'12px':'44px',width: '100%', height: '100%', objectFit:'contain' }} />
                </div>
             </div>

        <div className='footer-msg-careers' style={{padding:'5vw'}}>
          
            <div style={{backgroundColor:'#731d2b',borderRadius:'18px',position:'relative'}}>
                <div style={{display:'flex',position:'absolute',width:'100%',height:'100%',pointerEvents:'none', justifyContent:'flex-end',zIndex:0 }}>
                  <img src={LineEffect3} alt="fade" style={{float: 'right', objectFit:'contain'}} />
                </div>
              <div style={{padding:'42px 8vw',zIndex:4}}>
                <p style={{fontSize:'1.6rem',fontWeight:'500',color:'white'}}>Partner with us</p>
                <p style={{fontSize:'1.1rem',fontWeight:'400',color:'white',opacity:'0.9'}}>Whether your goal is to enhance agility, accelerate digital capabilities, or build long-term strategic advantage, the journey toward transformation begins with us.</p>
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
