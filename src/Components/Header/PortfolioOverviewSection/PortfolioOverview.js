import React from 'react'
import PortfolioOverviewImg from '../../../Images/bgportfolio.jpeg'
import './PortfolioOverview.css'

const PortfolioOverview = () => {
    return (
        <div>
            <div className="prt-overview-section ">
                
            <div className="prt-overview-right" data-aos="fade-left" data-aos-delay="90" data-aos-duration="2000">
                    <img src={PortfolioOverviewImg}></img>
                </div>
                <div className="prt-overview-left ">
                    <div className="prt-overview-content" data-aos="fade-right" data-aos-delay="90" data-aos-duration="2000">
                        <h1>You can trade, see  <br></br> Buy our products and<br></br>Check Global Prices of Coins</h1>
                    </div>
                </div>

               
            </div>
        </div>
    )
}

export default PortfolioOverview
