
import HeaderComponent from './HeaderComponent.jsx'
import TileHeader from '../components/TileHeader.jsx'
import AckLogoPng from '../assets/ack-logo.png'
import VicentePort from '../assets/portraits/vicente-img-2b.png'
function HomePage() {
  return (
   <div>
        <HeaderComponent/>
        <div style={{}}>
            <div style={{height:'90vh',backgroundColor:'gray'}}></div>  {/* welcome photo, pics ng office, etc */}
          
            <div className='opening-slogan' style={{paddingTop:'24px',paddingBottom:'24px'}}>
                <div>
                    <h2 style={{fontWeight:'400', fontSize:'1.65rem',textAlign:'center',marginBottom:'0px'}}>From strategy to delivery - </h2>
                    <h2 style={{fontWeight:'300', fontSize:'3.2rem',textAlign:'center',marginTop:'-20px'}}>confidence in execution</h2>
                </div>
            </div>
            
            <div style={{backgroundColor:'#00004d',padding:'20px'}}></div>

            <div className='pic-show-grid' style={{display:'flex',height:'80vh'}}>
                <div style={{backgroundColor:'blue', width:'100%', height:'100%', marginRight:'2px'}}> </div>
                <div style={{backgroundColor:'green', width:'100%', height:'100%', marginRight:'2px',marginLeft:'2px'}}> </div>
                <div style={{backgroundColor:'orange', width:'100%', height:'100%', marginRight:'2px',marginLeft:'2px'}}> </div>
                <div style={{backgroundColor:'magenta', width:'100%', height:'100%',marginLeft:'2px'}}> </div>
            </div>

            <div style={{paddingLeft:'10vh',marginBottom:'14vh',display:'flex',height:'200px'}}>
                <div style={{width:'55%',paddingTop:'14vh'}}>
                    <p style={{width:'80%', fontSize:'2rem',fontWeight:'420',lineHeight: '2rem'}}>Delivering trusted, reliable services for secure and efficient operations.</p>
                    <p style={{fontSize:'1rem',fontWeight:'360',marginTop:'12px'}}>Driving competitiveness, operational efficiency, and superior client experience in providing Avaloq services.</p>
                </div>
                 <div style={{width:'45%'}}>
                     <img src={AckLogoPng} alt="ACK LOGO ICON" style={{ marginTop:'44px',width: '100%', height: '100%', objectFit:'contain' }} />
                </div>
             </div>

             <div className='success-hist' style={{backgroundColor:'#ce1a38'}}>
                <div>
                    <p style={{marginLeft:'5vw',paddingTop:'10vh',paddingBottom:'8px',fontSize:'2rem',color:'white'}}>Our Project Success History</p>
                    <div style={{paddingTop:'4vw',paddingBottom:'6vh',paddingLeft:'5vw', paddingRight:'5vw',backgroundColor:'rgb(255, 234, 234)'}}>
                        <div className='success-show' style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap',gap:'1rem', justifyContent:'center', width:'100%',alignContent:'center'}}>
                            <TileHeader title='Indonesian Bank'
                                img='ID'
                                line1='- Implementation of Secondary Bond'
                                line2='- Release Upgrade' 
                                line3=''
                                order={1}
                            /> 
                            <TileHeader title='Singapore Bank'
                                img='SG'
                                line1='- Run the Bank'
                                line2='- Change the Bank' 
                                line3=''
                                order={2}
                            /> 
                            <TileHeader title='Taiwanese Bank'
                                img='TW'
                                line1='- SIT / UAT Support'
                                line2='- Interface related Enhancement' 
                                line3=''
                                order={3}
                            /> 
                            <TileHeader title='Philippine Bank'
                                img='PH'
                                line1='- UAT / PGL Support​'
                                line2='- Web Services' 
                                line3=''
                                order={4}
                            /> 
                        </div>
                        <p style={{textAlign:'center',marginTop:'9vh',marginBottom:'11vh',fontWeight:'400',fontSize:'1.2rem'}}>
                            We bring a strong track record of successful banking projects across major regional markets. 
                            <p >Driving successful outcomes for leading banks across the region.</p>
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


             <div className='testi-full-page1' style={{height:'100vh', backgroundSize: 'cover',backgroundImage: "url(" + VicentePort + ")"}}>
                <div style={{ paddingTop:'16vh',paddingBottom:'8vh',height:'100%'}}>
                    <div  style={{backgroundColor:'#f6f7f8', borderTopRightRadius:'18px',borderBottomRightRadius:'18px',width:'52vw',height:'100%'}}>
                        <div style={{padding:'4vw'}}>
                            <p style={{fontWeight:'500',fontSize:'1.5rem',color:'#cf1b39'}}>Why ACK Solutions Inc.</p>
                            <p style={{fontWeight:'700',fontSize:'2.5rem',color:'#cf1b39'}}>From strategy to delivery</p>
                            <p style={{fontWeight:'400',fontSize:'1.2rem',color:'rgb(60,60,60)',marginTop:'2vh'}}>ACK Solutions Inc. empowers organizations to move faster and deliver with confidence by reinforcing teams with highly experienced Avaloq specialists. We help teams achieve more by applying smart, efficient approaches that drive consistent, high-quality outcomes. Choosing ACK Solutions means gaining a reliable partner committed to performance, quality, and sustainable growth.</p>

                            <div style={{display:'flex',marginTop:'4vw'}}>
                                <div className='ack-a scale-hover-0' style={{margin:'6px', backgroundColor:'white',width:'100%',borderRadius:'10px',maxWidth:'220px',padding:'16px'}}>
                                    <p style={{fontSize:'1.2rem',fontWeight:'500',marginBottom:'6px'}}>
                                        <span style={{color:'#cf1b39',fontWeight:'600',fontSize:'1.8rem'}}>A</span>
                                        <span>ccelerate</span>
                                    </p>
                                    <p style={{fontSize:'0.75rem',fontWeight:'500',color:'rgb(60,60,60)'}}>Enables your team by bringing in expertise provided by seasoned Avaloq professionals.</p>
                                </div>

                                <div className='ack-b scale-hover-0' style={{margin:'6px',backgroundColor:'white',width:'100%',borderRadius:'10px',maxWidth:'220px',padding:'16px'}}>
                                    <p style={{fontSize:'1.2rem',fontWeight:'500',marginBottom:'6px'}}>
                                        <span style={{color:'#cf1b39',fontWeight:'600',fontSize:'1.8rem'}}>C</span>
                                        <span>omplete</span>
                                    </p>
                                    <p style={{fontSize:'0.75rem',fontWeight:'500',color:'rgb(60,60,60)'}}>Accomplish more by ensuring deliverables are in good quality through efficient solutioning.</p>
                                </div>

                                <div className='ack-c scale-hover-0' style={{margin:'6px',backgroundColor:'white',width:'100%',borderRadius:'10px',maxWidth:'220px',padding:'16px'}}>
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


             <div className='services-offered-full-page'  style={{height:'100vh',backgroundColor:'#f7f7f7'}}>
                <p style={{fontSize:'2.3rem',fontWeight:'700',textAlign:'center',paddingTop:'8vh',color:'#3a4149'}}>Avaloq Services offered</p>
                <p style={{ textAlign:'center', paddingLeft:'10vw', paddingBottom:'5vh', paddingRight:'10vw',fontWeight:'400',fontSize:'1.1rem',color:'rgb(60,60,60)'}}>We deliver comprehensive services covering consulting, training, customization, and ongoing maintenance. Our experts help organizations design the right solutions, build capable teams, tailor Avaloq to business needs, and ensure long-term platform stability.</p>
                <div className='show-grid' style={{display:'flex',height:'70%',paddingLeft:'6vw',paddingRight:'6vw'}}>
                   
                    <div className='service-1' style={{ width:'100%', height:'100%', marginRight:'6px'}}>
                        <div style={{backgroundColor:'gainsboro', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundImage: "url(" + VicentePort + ")",borderRadius:'24px',width:'100%',height:'100%',overflow:'hidden', display: 'flex',flexDirection:'column'}}>
                            <div style={{backgroundColor:'#cf1b39',padding:'8px',width:'72%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px'}}>CONSULTING</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{padding:'18px', fontSize:'1.1rem', fontWeight:'500',color:'white'}}>We analyze and design business requirements into effective, technology-driven solutions.</p>
                        </div>
                    </div>

                    <div className='service-2' style={{ width:'100%', height:'100%', marginLeft:'6px',marginRight:'6px'}}>
                        <div style={{backgroundColor:'gainsboro', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundImage: "url(" + VicentePort + ")",borderRadius:'24px',width:'100%',height:'100%',overflow:'hidden', display: 'flex',flexDirection:'column'}}>
                            <div style={{backgroundColor:'#cf1b39',padding:'8px',width:'72%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px'}}>TRAINING</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{padding:'18px', fontSize:'1.1rem', fontWeight:'500',color:'white'}}>We provide in-house Avaloq training to upskill the bank’s developers with practical platform knowledge and best practices.</p>
                        </div>
                    </div>

                    <div className='service-3' style={{ width:'100%', height:'100%', marginLeft:'6px',marginRight:'6px'}}>
                        <div style={{backgroundColor:'gainsboro', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundImage: "url(" + VicentePort + ")",borderRadius:'24px',width:'100%',height:'100%',overflow:'hidden', display: 'flex',flexDirection:'column'}}>
                            <div style={{backgroundColor:'#cf1b39',padding:'8px',width:'72%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px'}}>CUSTOMIZATION</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{padding:'18px', fontSize:'1.1rem', fontWeight:'500',color:'white'}}>We support Change the Bank through controlled Avaloq customizations and reliable project support aligned with platform standards.</p>
                        </div>
                    </div>

                    <div className='service-4' style={{ width:'100%', height:'100%', marginLeft:'6px'}}>
                        <div style={{backgroundColor:'gainsboro', backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundImage: "url(" + VicentePort + ")",borderRadius:'24px',width:'100%',height:'100%',overflow:'hidden', display: 'flex',flexDirection:'column'}}>
                            <div style={{backgroundColor:'#cf1b39',padding:'8px',width:'72%',borderBottomRightRadius:'24px'}}>
                                <p style={{fontSize:'1.2rem',fontWeight:'600',color:'white',paddingLeft:'12px'}}>MAINTENANCE</p>
                            </div> 
                            <div style={{height:'100%'}}></div>
                            <p style={{padding:'18px', fontSize:'1.1rem', fontWeight:'500',color:'white'}}>We ensure stable Run the Bank operations through reliable Avaloq maintenance and ongoing end-user support.</p>
                        </div>
                    </div>

                </div>
             </div>
        </div>
   </div>
  );
}

export default HomePage;
