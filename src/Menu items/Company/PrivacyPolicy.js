import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../../Components/Header/Navbar/Navbar'
import './PrivacyPolicy.css'
const PrivacyPolicy = ({bgColor}) => {
    return (
        <>
        
            <div className="privacy-bg">
                <Navbar bgColor={bgColor} />
                <div className="privacy-main container" >
                    <div className="privacy-rights" data-aos="fade-down" data-aos-delay="50" data-aos-duration="2000"><span>Privacy Policy</span></div>
                    <div className="privacy-txt-1"><h2>Privacy Notice</h2></div>
                    <div className="privacy-para-1"><p>This privacy notice discloses the privacy practices for (website address). This privacy notice applies solely to information collected by this website. It will notify you of the following: <br></br>
               What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared. What choices are available to you regarding the use of your data. The security procedures in place to protect the misuse of your information. How you can correct any inaccuracies in the information.
               </p></div>

                    <div className="privacy-txt-2"><h2>Information Collection, Use, and Sharing</h2></div>
                    <div className="privacy-para-2"><p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone. <br></br>
               We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.
               <br></br>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.
               </p></div>


                    <div className="privacy-txt-3"><h2>Your Access to and Control Over Information</h2></div>
                    <div className="privacy-para-3"><p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website: <br></br>
               See what data we have about you, if any. Change/correct any data we have about you. Have us delete any data we have about you. You Express any concern you have about our use of your data.
               </p></div>


                    <div className="privacy-txt-3"><h2>Security</h2></div>
                    <div className="privacy-para-3"><p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. <br></br>
               Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.
               <br></br>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
               <br></br> If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at XXX YYY-ZZZZ or via email.fg

</p></div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
