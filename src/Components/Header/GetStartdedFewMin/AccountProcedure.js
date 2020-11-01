import React from 'react'
import CreateAccountImg from '../../../Images/create-account-icon.png'
import BankAccountImg from '../../../Images/bank-icon-1.png'
import BuyIconImg from '../../../Images/buy-icon.png'
import './AccountProcedure.css'
const AccountProcedure = () => {
    return (
        <>
            <div className="procedureSection">
                <div className="ps-div-1" data-aos="flip-down" data-aos-delay="80" data-aos-duration="3000">
                    <h2>
                        Get started in a few minutes
            </h2>
                    <p>PixelExchange supports a variety of the most popular digital currencies.</p>
                </div>
                <div className="ps-div-2" data-aos="fade-up" data-aos-delay="80" data-aos-duration="3000">
                    <div>
                    <img src={CreateAccountImg}></img>
                   <div className="cr-txt"> <span>Create an account</span></div>
                    </div>
                    <div>
                        <img src={BankAccountImg}></img>
                        <br></br>
                   <div className="cr-txt"><span>Link your bank account</span></div> 
                    </div>

                    <div>
                        <img src={BuyIconImg}></img><br></br>
                    <div className="cr-txt"><span>Start buying and selling</span></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AccountProcedure
