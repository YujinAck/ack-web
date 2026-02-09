
import HeaderComponent from './HeaderComponent.jsx'
import TileHeader from '../components/TileHeader.jsx'
import FooterComponent from './FooterComponent.jsx'
import AckLogoPng from '../assets/ack-logo.png'
import VicentePort from '../assets/portraits/vicente-img-2b.png'
import VicentePort2 from '../assets/portraits/vicente-img-2a.jpg'
import ShowPic1 from '../assets/portraits/show-pic-1.jpg'
import ShowPic2 from '../assets/portraits/show-pic-2.jpg'
import ShowPic3 from '../assets/portraits/show-pic-3.jpg'
import StreamCash from '../assets/stream_icons/stream_cash.png'
import StreamCredit from '../assets/stream_icons/stream_credit.png'
import StreamIntf from '../assets/stream_icons/stream_interface.png'
import StreamInv from '../assets/stream_icons/stream_investment.png'
import StreamMigr from '../assets/stream_icons/stream_migration.png'
import StreamSecu from '../assets/stream_icons/stream_secu.png'
import { useMediaQuery } from 'react-responsive'
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
function HomePage() {
    
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
   <div style={{}}>
        <HeaderComponent/>
        <div style={{position:'fixed',top:'0',backgroundColor:'green'}}>
            <Desktop>Desktop or laptop</Desktop>
            <Tablet>Tablet</Tablet>
            <Mobile>Mobile</Mobile>
            <Default>Not mobile (desktop or laptop or tablet)</Default>
            <p>{"isMobile: " + isMobile}</p>
        </div>
        <div style={{}}>
            <div style={{height:'90vh',backgroundColor:'gray'}}></div>  {/* welcome photo, pics ng office, etc */}
          
            <div className='opening-slogan' style={{paddingTop:'24px',paddingBottom:'24px'}}>
                <div>
                    <h2 style={{fontWeight:'400', fontSize:isMobile?'1.2rem':'1.65rem',textAlign:'center',marginBottom:'0px'}}>From strategy to delivery - </h2>
                    <h2 style={{fontWeight:'300', fontSize:isMobile?'2.2rem':'3.2rem',textAlign:'center',marginTop:isMobile?'-10px':'-20px'}}>confidence in execution</h2>
                </div>
            </div>
            
            <div style={{backgroundColor:'#00004d',padding:'20px'}}></div>

            <div className='pic-show-grid' style={{display:'flex',height:isMobile?'60vh':'80vh'}}>
                <div style={{ backgroundColor:'#ce1a38',width:'100%',height:'100%',marginRight:'2px'}}>
                    <div style={{ backgroundImage: "url(" + VicentePort2 + ")", opacity:'0.68', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center',width:'100%',height:'100%'}}></div>
                </div>
                <div style={{ backgroundColor:'#ce1a38',width:'100%',height:'100%',marginRight:'2px',marginLeft:'2px'}}>
                    <div style={{ backgroundImage: "url(" + ShowPic2 + ")", opacity:'0.68', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center',width:'100%',height:'100%'}}></div>
                </div>
                <div style={{ backgroundColor:'#ce1a38',width:'100%',height:'100%',marginRight:'2px',marginLeft:'2px'}}>
                    <div style={{ backgroundImage: "url(" + ShowPic3 + ")", opacity:'0.68', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center',width:'100%',height:'100%'}}></div>
                </div>
                <div style={{ backgroundColor:'#ce1a38',width:'100%',height:'100%',marginLeft:'2px'}}>
                    <div style={{ backgroundImage: "url(" + ShowPic1 + ")", opacity:'0.68', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center',width:'100%',height:'100%'}}></div>
                </div>
            </div>

            <div style={{paddingLeft:isMobile?'18px':'10vw',marginBottom:'12vw',display:'flex'}}>
                <div style={{width:isMobile?'90%':'55%',paddingTop:'14vh'}}>
                    <p style={{width:'80%', fontSize:isMobile?'1.4rem':'2rem',fontWeight:isMobile?'480':'420',lineHeight: '2rem'}}>Delivering trusted, reliable services for secure and efficient operations.</p>
                    <p style={{fontSize:isMobile?'0.85rem':'1.1rem',fontWeight:'360',marginTop:'12px'}}>Driving competitiveness, operational efficiency, and superior client experience in providing Avaloq services.</p>
                </div>
                 <div style={{width:'45%',height:'300px',marginRight:'5vw'}}>
                     <img src={AckLogoPng} alt="ACK LOGO ICON" style={{ marginTop:'44px',width: '100%', height: '100%', objectFit:'contain' }} />
                </div>
             </div>

             <div className='success-hist' style={{backgroundColor:'#ce1a38'}}>
                <div>
                    <p style={{marginLeft:isMobile?'18px':'5vw', textAlign:isMobile?'center':'',paddingTop:'10vh',paddingBottom:'8px',fontSize:isMobile?'1.6rem':'2rem',color:'white'}}>Our Project Success History</p>
                    <div style={{paddingTop:'4vw',paddingBottom:'6vh',paddingLeft:'5vw', paddingRight:'5vw',backgroundColor:'rgb(255, 234, 234)'}}>
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
                        <p style={{textAlign:'center',marginTop:'9vh',marginBottom:'11vh',fontWeight:'400',fontSize:'1.2rem'}}>
                            We bring a strong track record of successful banking projects across major regional markets. 
                            {!isMobile&&<p >Driving successful outcomes for leading banks across the region.</p>}
                        </p>
                        
                    </div>
                </div>
             </div>

            {/* Why ACK SOLUTION? */}
            {/* <div style={{ marginBottom:'10vh',height:'200px', marginTop:'10vh'}}>
                <p style={{textAlign:'center', width:'100%', marginBottom:'4vh',fontSize:'2rem',fontWeight:'420',lineHeight: '2rem'}}>Why ACK Solutions?</p>
                 <div className='ack-ronym' style={{justifyContent:'center', width:'100%',alignContent:'center'}}>
                    <div style={{backgroundColor:'#00004d',height:'240px',paddingLeft:'10vw'}}>
                        <div style={{display:'flex',alignItems:'flex-end'}}>
                            <p style={{fontSize:'12rem',fontWeight:'700',lineHeight:'50px',color:'#ce1a38'}}>A</p>
                            <p style={{fontSize:'5rem',fontWeight:'700',lineHeight:'-0px',color:'white'}}>ccelerate</p>
                        </div>
                        <p style={{fontSize:'1.2rem',fontWeight:'400',paddingTop:'28px',paddingLeft:'140px',color:'white'}}>your team by bringing in expertise provided by seasoned Avaloq professionals.</p>
                    </div>

                    <div style={{marginTop:'60px',height:'180px',paddingLeft:'12vw'}}>
                        <div style={{display:'flex',alignItems:'flex-end'}}>
                            <p style={{fontSize:'12rem',fontWeight:'700',lineHeight:'50px',color:'#ce1a38'}}>C</p>
                            <p style={{fontSize:'5rem',fontWeight:'700',lineHeight:'-0px'}}>omplete</p>
                        </div>
                        <p style={{fontSize:'1.2rem',fontWeight:'400',paddingTop:'28px',paddingLeft:'140px'}}>more by ensuring deliverables are in good quality through efficient solutioning.</p>
                    </div>

                    <div style={{marginTop:'60px',backgroundColor:'#e46e81',height:'240px',paddingLeft:'16vw'}}>
                        <div style={{display:'flex',alignItems:'flex-end'}}>
                            <p style={{fontSize:'12rem',fontWeight:'700',lineHeight:'50px',color:'#ce1a38'}}>K</p>
                            <p style={{fontSize:'5rem',fontWeight:'700',lineHeight:'-0px',color:'white'}}>ick Start</p>
                        </div>
                        <p style={{fontSize:'1.2rem',fontWeight:'400',paddingTop:'28px',paddingLeft:'140px'}}>your projects by having professional that can mentor and guide the team.</p>
                    </div>
                 </div>
             </div> */}


             <div className='testi-full-page1' style={{ minHeight:'800px', backgroundSize: 'cover',backgroundImage: "url(" + VicentePort + ")"}}>
                <div style={{ paddingTop:'16vh',paddingBottom:'8vh'}}>
                    <div  style={{backgroundColor:'#f6f7f8', borderTopRightRadius:'18px',borderBottomRightRadius:'18px',width:isMobile?'95vw':'52vw',minWidth:isMobile?'':'500px', height:'100%'}}>
                        <div style={{padding:'4vw'}}>
                            <p style={{fontWeight:'500',fontSize:isMobile?'1.2rem':'1.5rem',color:'#cf1b39'}}>Why ACK Solutions Inc.</p>
                            <p style={{fontWeight:'700',fontSize:isMobile?'2rem':'2.5rem',color:'#cf1b39'}}>From strategy to delivery</p>
                            <p style={{fontWeight:'400',fontSize:isMobile?'1rem':'1.2rem',color:'rgb(60,60,60)',marginTop:'2vw'}}>ACK Solutions Inc. empowers organizations to move faster and deliver with confidence by reinforcing teams with highly experienced Avaloq specialists. We help teams achieve more by applying smart, efficient approaches that drive consistent, high-quality outcomes. Choosing ACK Solutions means gaining a reliable partner committed to performance, quality, and sustainable growth.</p>

                            <div style={{display:'flex',marginTop:'4vw'}}>
                                <div className='ack-a scale-hover-0' style={{margin:'6px', backgroundColor:'white',width:'100%',borderRadius:'10px',maxWidth:'220px',padding:isMobile?'8px':'16px'}}>
                                    <p style={{fontSize:'1.2rem',fontWeight:'500',marginBottom:'6px'}}>
                                        <span style={{color:'#cf1b39',fontWeight:'600',fontSize:'1.8rem'}}>A</span>
                                        <span>ccelerate</span>
                                    </p>
                                    <p style={{fontSize:'0.75rem',fontWeight:'500',color:'rgb(60,60,60)'}}>Enables your team by bringing in expertise provided by seasoned Avaloq professionals.</p>
                                </div>

                                <div className='ack-b scale-hover-0' style={{margin:'6px',backgroundColor:'white',width:'100%',borderRadius:'10px',maxWidth:'220px',padding:isMobile?'8px':'16px'}}>
                                    <p style={{fontSize:'1.2rem',fontWeight:'500',marginBottom:'6px'}}>
                                        <span style={{color:'#cf1b39',fontWeight:'600',fontSize:'1.8rem'}}>C</span>
                                        <span>omplete</span>
                                    </p>
                                    <p style={{fontSize:'0.75rem',fontWeight:'500',color:'rgb(60,60,60)'}}>Accomplish more by ensuring deliverables are in good quality through efficient solutioning.</p>
                                </div>

                                <div className='ack-c scale-hover-0' style={{margin:'6px',backgroundColor:'white',width:'100%',borderRadius:'10px',maxWidth:'220px',padding:isMobile?'8px':'16px'}}>
                                    <p style={{fontSize:'1.2rem',fontWeight:'500',marginBottom:'6px'}}>
                                        <span style={{color:'#cf1b39',fontWeight:'700',fontSize:'1.8rem'}}>K</span>
                                        <span>ick Start</span>
                                    </p>
                                    <p style={{fontSize:'0.75rem',fontWeight:'500',color:'rgb(60,60,60)'}}>Kick start your projects by having professional that can mentor and guide the team.</p>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                </div>
             </div>


             <div className='services-offered-full-page'  style={{height:'100%', minHeight:isMobile?'60vh':'800px', backgroundColor:'#f7f7f7',paddingBottom:'6vh'}}>
                <p style={{fontSize:isMobile?'1.9rem':'2.3rem',fontWeight:'700',textAlign:'center',paddingTop:'8vh',color:'#3a4149'}}>Avaloq Services offered</p>
                <p style={{ textAlign:'center', paddingLeft:'10vw', paddingBottom:'5vh', paddingRight:'10vw',fontWeight:'400',fontSize:isMobile?'1rem':'1.2rem',color:'rgb(60,60,60)'}}>We deliver comprehensive services covering consulting, training, customization, and ongoing maintenance. Our experts help organizations design the right solutions, build capable teams, tailor Avaloq to business needs, and ensure long-term platform stability.</p>
                <div className='show-grid' style={{display:'flex', justifyContent:'center', minHeight:isMobile?'80vh':'100%', flexDirection: 'row', flexWrap: 'wrap',height:isMobile?'80%':'70%', justifyContent:'center', paddingLeft:isMobile?'12px':'6vw',paddingRight:isMobile?'12px':'6vw'}}>
                   
                    <div className='service-1' style={{ width:'100%', height:'60vh',minHeight:isMobile?'60vh':'500px', marginRight:'6px',maxWidth:isMobile?'42vw':'300px',marginTop:'12px'}}>
                        <div style={{backgroundColor:'gainsboro', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundImage: "url(" + VicentePort + ")",borderRadius:'24px',width:'100%',height:'100%',overflow:'hidden', display: 'flex',flexDirection:'column'}}>
                            <div style={{backgroundColor:'#cf1b39',padding:'8px',width:isMobile?'fit-content':'70%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px',paddingRight:'12px'}}>CONSULTING</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{padding:isMobile?'12px':'18px', fontSize:isMobile?'1rem':'1.1rem', fontWeight:'500',color:'white'}}>We analyze and design business requirements into effective, technology-driven solutions.</p>
                        </div>
                    </div>

                    <div className='service-2' style={{ width:'100%',height:'60vh',minHeight:isMobile?'60vh':'500px', marginLeft:'6px',marginRight:'6px',maxWidth:isMobile?'42vw':'300px',marginTop:'12px'}}>
                        <div style={{backgroundColor:'gainsboro', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundImage: "url(" + VicentePort + ")",borderRadius:'24px',width:'100%',height:'100%',overflow:'hidden', display: 'flex',flexDirection:'column'}}>
                            <div style={{backgroundColor:'#cf1b39',padding:'8px',width:isMobile?'fit-content':'70%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px',paddingRight:'12px'}}>TRAINING</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{padding:isMobile?'12px':'18px', fontSize:isMobile?'1rem':'1.1rem', fontWeight:'500',color:'white'}}>We provide in-house Avaloq training to upskill the bank’s developers with practical platform knowledge and best practices.</p>
                        </div>
                    </div>

                    <div className='service-3' style={{ width:'100%', height:'60vh',minHeight:isMobile?'60vh':'500px', marginLeft:'6px',marginRight:'6px',maxWidth:isMobile?'42vw':'300px',marginTop:'12px'}}>
                        <div style={{backgroundColor:'gainsboro', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundImage: "url(" + VicentePort + ")",borderRadius:'24px',width:'100%',height:'100%',overflow:'hidden', display: 'flex',flexDirection:'column'}}>
                            <div style={{backgroundColor:'#cf1b39',padding:'8px',width:isMobile?'fit-content':'70%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px',paddingRight:'12px'}}>CUSTOMIZATION</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{padding:isMobile?'12px':'18px', fontSize:isMobile?'1rem':'1.1rem', fontWeight:'500',color:'white'}}>We support Change the Bank through controlled Avaloq customizations and reliable project support aligned with platform standards.</p>
                        </div>
                    </div>

                    <div className='service-4' style={{ width:'100%', height:'60vh',minHeight:isMobile?'60vh':'500px', marginLeft:'6px',maxWidth:isMobile?'42vw':'300px',marginTop:'12px'}}>
                        <div style={{backgroundColor:'gainsboro', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundImage: "url(" + VicentePort + ")",borderRadius:'24px',width:'100%',height:'100%',overflow:'hidden', display: 'flex',flexDirection:'column'}}>
                            <div style={{backgroundColor:'#cf1b39',padding:'8px',width:isMobile?'fit-content':'70%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:isMobile?'1rem':'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px',paddingRight:'12px'}}>MAINTENANCE</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{padding:isMobile?'12px':'18px', fontSize:isMobile?'1rem':'1.1rem', fontWeight:'500',color:'white'}}>We ensure stable Run the Bank operations through reliable Avaloq maintenance and ongoing end-user support.</p>
                        </div>
                    </div>

                </div>
             </div>

            <div className='our-avq-streams-full' style={{height:'100%'}}>
                <p style={{paddingLeft:isMobile?'18px':'5vw', textAlign:isMobile?'center':'',backgroundColor:'#cf1b39',paddingTop:'10vh',paddingBottom:'8px',fontSize:isMobile?'1.6rem':'2rem',color:'white'}}>Supported Avaloq Streams</p>
                <div style={{padding:'5vh 5vw', paddingTop:'6vw', paddingBottom:'5vw',display:'flex',justifyContent:'center',flexDirection: 'row', flexWrap: 'wrap',backgroundColor:'#ffeaea'}}>
                    <div className='scale-hover-2' style={{width:'200px',height:'200px', margin:'8px', borderRadius:'12px', overlow:'hidden',display: 'flex',flexDirection:'column'}}>
                        <div style={{ backgroundImage: "url(" + StreamInv + ")", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center',width:'100%',height:'100%'}}></div>
                        <p style={{fontSize:'1.1rem',fontWeight:'500', lineHeight:'1.2rem', marginTop:'6px',padding:'4px',textAlign:'center',backgroundColor:'#cf1b39',color:'white'}}>
                             Investment Related Transactions​
                        </p>
                    </div>

                    <div className='scale-hover-2' style={{width:'200px',height:'200px', cursor:'pointer', margin:'8px', borderRadius:'12px', overlow:'hidden',display: 'flex',flexDirection:'column'}}>
                        <div style={{ backgroundImage: "url(" + StreamCash + ")", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center',width:'100%',height:'100%'}}></div>
                        <p style={{fontSize:'1.1rem',fontWeight:'500',lineHeight:'1.2rem',marginTop:'6px',padding:'4px',textAlign:'center',backgroundColor:'#cf1b39',color:'white'}}>
                             Cash Related Transaction​
                        </p>
                    </div>

                    <div className='scale-hover-2' style={{width:'200px',height:'200px', cursor:'pointer', margin:'8px', borderRadius:'12px', overlow:'hidden',display: 'flex',flexDirection:'column'}}>
                        <div style={{ backgroundImage: "url(" + StreamCredit + ")", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center',width:'100%',height:'100%'}}></div>
                        <p style={{fontSize:'1.1rem',fontWeight:'500',marginTop:'6px',padding:'4px',textAlign:'center',backgroundColor:'#cf1b39',color:'white'}}>
                            Credit
                        </p>
                    </div>

                    <div className='scale-hover-2' style={{width:'200px',height:'200px', cursor:'pointer', margin:'8px', borderRadius:'12px', overlow:'hidden',display: 'flex',flexDirection:'column'}}>
                        <div style={{ backgroundImage: "url(" + StreamIntf + ")", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center',width:'100%',height:'100%'}}></div>
                        <p style={{fontSize:'1.1rem',fontWeight:'500',marginTop:'6px',padding:'4px',textAlign:'center',backgroundColor:'#cf1b39',color:'white'}}>
                            Interfaces​
                        </p>
                    </div>

                    <div className='scale-hover-2' style={{width:'200px',height:'200px', cursor:'pointer', margin:'8px', borderRadius:'12px', overlow:'hidden',display: 'flex',flexDirection:'column'}}>
                        <div style={{ backgroundImage: "url(" + StreamSecu + ")", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center',width:'100%',height:'100%'}}></div>
                        <p style={{fontSize:'1.1rem',fontWeight:'500',marginTop:'6px',padding:'4px',textAlign:'center',backgroundColor:'#cf1b39',color:'white'}}>
                            Security​
                        </p>
                    </div>

                    <div className='scale-hover-2' style={{width:'200px',height:'200px', cursor:'pointer', margin:'8px', borderRadius:'12px', overlow:'hidden',display: 'flex',flexDirection:'column'}}>
                        <div style={{ backgroundImage: "url(" + StreamMigr + ")", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center',width:'100%',height:'100%'}}></div>
                        <p style={{fontSize:'1.1rem',fontWeight:'500',marginTop:'6px',padding:'4px',textAlign:'center',backgroundColor:'#cf1b39',color:'white'}}>
                            Migration​
                        </p>
                    </div>
                     <p style={{backgroundColor:'#ffeaea',fontWeight:'400',fontSize:isMobile?'1rem':'1.2rem',color:'rgb(60,60,60)',textAlign:'center', paddingLeft:isMobile?'18px':'5vw',paddingRight:isMobile?'18px':'5vw',paddingTop:'18px'}}>
                        We support a broad range of Avaloq streams, our engagement ensured end-to-end stability and consistency across front-to-back processes, enabling seamless transaction processing, secure system integration, and reliable data movement.
                       {!isMobile&& <span> By addressing both functional and technical aspects of these streams, we helped banks maintain operational resilience while supporting ongoing change and regulatory demands.</span>}
                        </p>
               

                </div>                   
            </div>
        </div>
        <FooterComponent/>
   </div>
  );
}

export default HomePage;
