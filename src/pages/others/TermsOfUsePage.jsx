
import FooterComponent from '../FooterComponent.jsx';
import { useMediaQuery } from 'react-responsive'
import HeaderComponent from '../HeaderComponent.jsx'
export default function TermsOfUsePage({}){
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
   <div className='legal-notice-page'  style={{backgroundColor:'#f5f5f5',minHeight:'100vh'}}>
      <HeaderComponent/>
    <div style={{padding:'30px 10vw',display:'flex',justifyContent:'center',marginBottom:'20px'}}>
        <div style={{width:isMobile?'90vw':'800px'}}>
            <h1 className='hdr-1'>Terms of Use</h1> 
            Welcome to the website of ACK Solutions. By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please discontinue use of the website.
            <br/><br/>
            <h2 className='hdr-2'>1. Acceptance of Terms</h2>
            <p>By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to comply with these Terms of Use and all applicable laws and regulations.</p>
        
            <br/>
            <h2 className='hdr-2'>2. Permitted Use</h2>
            <p>This website is provided for informational purposes about ACK Solutions, its services, and its capabilities.</p>
            <p>You agree to use this website only for lawful purposes and in a manner that does not disrupt or interfere with its normal operation. You may not attempt to access restricted areas of the website, interfere with its security features, or use the website in a way that could harm ACK Solutions or other users.</p>

            <br/>
            <h2 className='hdr-2'>3. Intellectual Property Rights</h2>
            <p>All content on this website—including text, graphics, logos, images, service descriptions, and other materials is the property of ACK Solutions or its licensors and is protected by applicable intellectual property laws. <br/> No part of this website may be reproduced, distributed, modified, or republished without prior written consent from ACK Solutions.</p>

            <br/>
            <h2 className='hdr-2'>4. No Professional Advice</h2>
            <p>The information provided on this website is for general informational purposes only and does not constitute professional, legal, financial, or technical advice. Any reliance on information from this website is at your own risk.</p>

            <br/>
            <h2 className='hdr-2'>5. Third-Party Links</h2>
            <p>This website may contain links to external websites that are not controlled or operated by ACK Solutions. We are not responsible for the content, policies, or practices of third-party websites.</p>

            <br/>
            <h2 className='hdr-2'>6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, ACK Solutions shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or related to your use of this website.</p>

            <br/>
            <h2 className='hdr-2'>7. Indemnification</h2>
            <p>You agree to indemnify and hold harmless ACK Solutions, its officers, employees, and affiliates from any claims, liabilities, damages, losses, or expenses arising from your violation of these Terms of Use or misuse of the website.</p>

            <br/>
            <h2 className='hdr-2'>8. Privacy</h2>
            <p>Your use of this website is also subject to our Privacy Policy, which explains how we collect, use, and protect personal information.</p>

            
            <br/>
            <h2 className='hdr-2'>9. Governing Law</h2>
            <p>These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts of the Philippines.</p>

            
            <br/>
            <h2 className='hdr-2'>10. Modifications</h2>
            <p>ACK Solutions reserves the right to update or modify these Terms of Use at any time without prior notice. Continued use of the website following any changes constitutes acceptance of the revised terms.</p>


            <br/>
            <h2 className='hdr-2'>11. Contact Information</h2>
            <p>If you have any questions regarding these Terms of Use, please contact us through the official contact details provided on this website.</p>

            <br/>
            <br/>
            <br/>
            <h2 className='hdr-2'>Contact Us</h2>
           For inquiries, concerns, or additional information regarding this website or its use, please contact us at info@acksolutionsinc.com
            <br/><br/>
            <p style={{fontSize:'0.8rem',opacity:'0.85'}}>Last updated: February 17, 2026</p>
        </div>
    </div>
      <FooterComponent/>
   </div>
  )
}
