import React from 'react'
import './CryptoOverview.css'
import DashboardImg from '../../../Images/Dashboard-img.png'
import ManagPortfolio from '../../../Images/manage-portfolio-icon.png'
import ReccuringBuys from '../../../Images/reccuiring-icon.png'
import VaultProtection from '../../../Images/vault-protection-icon.png'
import MobileApps from '../../../Images/mobile-apps-icon.png'


const CryptoOverview = () => {
    return (
        <>
            <div className="Crypto-overview">
                <div className="Crypto-overview-item-1">
                    <div className="Crypto-overview-heading" data-aos="zoom-in-right" data-aos-delay="70" data-aos-duration="3000">
                        <h1>Create your cryptocurrency portfolio today</h1>
                    </div>
                    <div className="Crypto-overview-para" data-aos="zoom-in-up" data-aos-delay="80" data-aos-duration="3000">
                        <p>PixelExchange has a variety of features that make it the best place to start trading</p>
                    </div>
                </div>
                <div className="Crypto-overview-features container">
                    <div className="Crypto-overview-left" data-aos="zoom-in-right" data-aos-delay="80" data-aos-duration="3000">
                        <div className="Crypto-overview-left-items">
                            <div className="co-left-items">
                                <div className="co-left-sub-items">
                                    <img src={ManagPortfolio}></img>
                                </div>
                                <div className="co-left-head">
                                    <div className="co-left-heading"><h2 className="co-left-item-heading">Manage your portfolio</h2></div>
                                    <p className="co-left-item-para">Buy and sell popular digital currencies, keep track of them in the one place.</p>
                                </div>
                            </div>
                            <div className="co-left-items">
                                <div className="co-left-sub-items">
                                    <img src={ReccuringBuys}></img>
                                </div>
                                <div>
                                    <div className="co-left-heading"><h2 className="co-left-item-heading">Recurring buys</h2></div>
                                    <p className="co-left-item-para">Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</p>
                                </div>
                            </div>

                            <div className="co-left-items">
                                <div className="co-left-sub-items">
                                    <img src={VaultProtection}></img></div>
                                <div>
                                   <div className="co-left-heading"><h2 className="co-left-item-heading">Manage your portfolio</h2></div>
                                    <p className="co-left-item-para">For added security, store your funds in a vault with time delayed withdrawals.</p>
                                </div>
                            </div>
                            <div className="co-left-items">
                                <div className="co-left-sub-items">
                                    <img src={MobileApps}></img></div>
                                <div>
                                    <div className="co-left-heading"><h2 className="co-left-item-heading">Mobile apps</h2></div>
                                    <p className="co-left-item-para">Stay on top of the markets with the PixelExchange app for<span> Android</span> or <span>iOS</span>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Crypto-overview-Right" data-aos="zoom-in-up" data-aos-delay="80" data-aos-duration="3000">
                        <img src={DashboardImg}></img>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CryptoOverview
