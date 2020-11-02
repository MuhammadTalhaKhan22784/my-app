import React from 'react'
import './AccountOverview.css'
import AccountOverviewImg from '../../../Images/bg-account.png'
const AccountOverview = () => {
    return (
        <>
            <div className="acc-overview-section ">
                <div className="acc-overview-left ">
                    <div className="acc-overview-content" data-aos="fade-right" data-aos-delay="80" data-aos-duration="3000">
                        <h1>Manage Your Account Become Your Own <br></br> Local Bank And Open<br></br> An Crypto Account</h1>
                    </div>
                </div>

                <div className="acc-overview-right" data-aos="fade-left" data-aos-delay="80" data-aos-duration="2000">
                    <img src={AccountOverviewImg}></img>
                </div>
            </div>
        </>
    )
}

export default AccountOverview
