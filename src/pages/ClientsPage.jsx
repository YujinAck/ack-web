

import FooterComponent from './FooterComponent.jsx';
import { useMediaQuery } from 'react-responsive'
import HeaderComponent from './HeaderComponent.jsx'
import ActionButton from '../components/ActionButton.jsx'
import ManilaBldg1 from '../assets/manila-bldg-1.png'
import FadeRed4 from '../assets/fades/fade-red-4.png'
import RedLinesBG from '../assets/backgrounds/red-lines-bg.jpg'

import LineEffect1 from '../assets/others/line-effect-2.png'
import TileHeader from '../components/TileHeader.jsx';
export default function ClientsPage(){
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
   <div className='careers-overview-page'  style={{backgroundColor:'#f5f5f5',minHeight:'100vh'}}>
      <HeaderComponent/>

      <div style={{ display:'flex', alignItems:'center', backgroundImage: "linear-gradient(rgba(255, 255, 255,1), rgba(255, 255, 255, 0.4)), url(" + RedLinesBG + ")",backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center',width:'100%',height:'90vh'}}>
          <div style={{width:isMobile?'100%':'70%', paddingLeft:'5vw',paddingRight:'5vw'}}>
              <p style={{fontSize:isMobile?'2rem':'2.6rem',fontWeight:'400',paddingTop:'8vh',color:'black'}}>Our Success History</p>
              <p style={{fontSize:'1.6rem',fontWeight:'400',lineHeight:'1.8rem', color:'rgb(64, 64, 64)',marginTop:'12px'}}>We deliver comprehensive services covering consulting, training, customization, and ongoing maintenance. Our experts help organizations design the right solutions, build capable teams, tailor Avaloq to business needs, and ensure long-term platform stability.</p>
              <br/>
         </div>
      </div>
        
      <div style={{}}>
        <div style={{ paddingTop:'10vh'}}>
            <div style={{backgroundColor:'#cf1b39',height:'100%',display:'flex',flexDirection:isMobile?'column':'row',justifyContent:'center'}}>
                {!isMobile&&<div style={{width:'100%'}}>
                  <div style={{width:'100%',alignContent:'center',justifyContent:'center',display:'flex',height:'100%'}}> 
                    <div style={{overflow:'hidden',width:'100%',position:'relative '}}>
                      <img src={FadeRed4} alt="fade" style={{ width: '100%', height: '100%', objectFit:'cover',position:'absolute' }} />
                      <img src={ManilaBldg1} alt="manila ack logo" style={{ width: '100%', maxHeight:'60vh', height: '100%', objectFit:'cover' }} />
                    </div>
                  </div>
                </div>}
                <div style={{width:'100%',paddingRight:'5vw',paddingLeft:'5vw',paddingTop:'',paddingBottom:isMobile?'4vh':''}}>
                  <div style={{display:'flex',flexDirection:'column',height:'100%',justifyContent:'center'}}>
                    <p style={{fontSize:isMobile?'1.7rem':'2.4rem',fontWeight:'400',color:'white'}}>A proven track record</p>
                    <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'300',lineHeight:isMobile?'1.2rem':'1.5rem', color:'#ffeaee',marginTop:'2px'}}>Our proven track record reflects years of successful delivery across complex banking and financial environments. We have consistently supported institutions in implementing, enhancing, and stabilizing their Avaloq platforms—meeting tight timelines, navigating regulatory requirements, and ensuring seamless integrations.</p>
                  </div>
                </div>
            </div>
        </div>
 

                    <div style={{paddingTop:'4vw',paddingBottom:'12vh',paddingLeft:'5vw', paddingRight:'5vw',backgroundColor:'rgb(228, 228, 228)'}}>
                          <p style={{fontSize:isMobile?'1.1rem':'1.8rem',paddingBottom:'3vh', fontWeight:'600',color:'#cf1b39',textAlign:'center'}}>Our Project Success History</p>
                  
                        <div className='success-show' style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap',gap:'1rem', justifyContent:'center', width:'100%',alignContent:'center'}}>
                            <TileHeader title='Indonesian Bank'
                                img='ID'
                                tasks={['Implementation','Release Upgrade']}
                                story='Implemented Secondary Bond functionality by configuring Avaloq components to support end-to-end trade processing and reporting. We also delivered Avaloq release upgrades through structured impact analysis and testing, ensuring a smooth transition while maintaining platform stability.'
                                order={1}
                            /> 
                            <TileHeader title='Singapore Bank'
                                img='SG'
                                tasks={['Run the Bank','Change the Bank']}
                                story='We supported both Run the Bank and Change the Bank initiatives for Singaporean banks by ensuring stable daily Avaloq operations while delivering controlled enhancements aligned with evolving business needs. This approach enabled continuous improvement and regulatory readiness.'
                                order={2}
                            /> 
                            <TileHeader title='Taiwanese Bank'
                                img='TW'
                                tasks={['SIT Support','UAT Support','INTF Enhancement']}
                                story='We provided SIT and UAT support for Taiwanese banks, ensuring smooth validation of Avaloq solutions and readiness for production. In parallel, we delivered interface component enhancements that improved system integration, data accuracy, and overall operational efficiency.'
                                order={3}
                            /> 
                            <TileHeader title='Philippine Bank'
                                img='PH'
                                tasks={['UAT Support','PGL Support','Web Services']}
                                story='We supported UAT and PGL activities for Philippine banks, ensuring solutions were fully validated and ready for production use. In addition, we implemented Avaloq web services to enhance system connectivity, streamline integrations, and support reliable end-to-end business processes.'
                                order={4}
                            /> 
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
