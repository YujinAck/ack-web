
import FooterComponent from '../FooterComponent.jsx';
import { useMediaQuery } from 'react-responsive'
import HeaderComponent from '../HeaderComponent.jsx'
export default function LegalNoticePage({}){
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
   <div className='legal-notice-page'  style={{backgroundColor:'#f5f5f5',minHeight:'100vh'}}>
      <HeaderComponent/>
    <div style={{padding:'30px 10vw',display:'flex',justifyContent:'center',marginBottom:'20px'}}>
        <div style={{width:isMobile?'90vw':'800px'}}>
            <h1 className='hdr-1'>Legal Notice</h1>
            This website is operated by ACK Solutions Inc. By accessing and using this website, you agree to comply with the following terms and conditions.
            <br/><br/>
            <h2 className='hdr-2'>1. Company Information</h2>
            <p>ACK Solutions Inc is a professional services firm providing consulting, customization, implementation, and support services related to the Avaloq banking platform and other financial technology solutions. For inquiries regarding this website, you may contact us through the official contact channels provided on this site.</p>
        
            <br/>
            <h2 className='hdr-2'>2. Intellectual Property</h2>
            <p>All content on this website—including but not limited to text, graphics, logos, images, documents, and software—is the property of ACK Solutions Inc unless otherwise stated. Unauthorized reproduction, distribution, modification, or republication of any materials without prior written consent is strictly prohibited.</p>

            <br/>
            <h2 className='hdr-2'>3. Disclaimer of Liability</h2>
            <p>The information provided on this website is for general informational purposes only. While we strive to ensure that all information is accurate and up to date, ACK Solutions Inc makes no warranties or representations regarding the completeness, accuracy, reliability, or suitability of the information contained herein.
            <br/> ACK Solutions Inc shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, this website or any linked third-party websites.
            </p>

            <br/>
            <h2 className='hdr-2'>4. External Links</h2>
            <p>This website may contain links to third-party websites. ACK Solutions Inc has no control over the content, policies, or practices of such websites and assumes no responsibility for them. Access to third-party websites is at your own risk.</p>

            <br/>
            <h2 className='hdr-2'>5. Confidentiality</h2>
            <p>Any information submitted through this website (including contact forms) will be handled with reasonable care. However, submission of information through the internet may not be entirely secure, and users assume this risk when transmitting information electronically.</p>

            <br/>
            <h2 className='hdr-2'>6. Governing Law</h2>
            <p>This Legal Notice shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law principles. Any disputes, claims, or controversies arising out of or in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts of the Philippines.</p>

            <br/>
            <h2 className='hdr-2'>7. Amendments</h2>
            <p>ACK Solutions Inc reserves the right to modify or update this Legal Notice at any time without prior notice. Continued use of the website after changes are posted constitutes acceptance of the updated terms.</p>
            
            <br/><br/>
            <p style={{fontSize:'0.8rem',opacity:'0.85'}}>Last updated: February 17, 2026</p>
        </div>
    </div>
      <FooterComponent/>
   </div>
  )
}
