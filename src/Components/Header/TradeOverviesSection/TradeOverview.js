import React from 'react'
import './TradeOverview.css'
import TradeImg from '../../../Images/bg-Trade.jpeg'
const TradeOverview = () => {
    return (
        <>
        <div className="trade-overview-section ">
            <div className="trade-overview-left ">
                <div className="trade-overview-content" data-aos="fade-right" data-aos-delay="80" data-aos-duration="3000">
                <h1>You can trade here <br></br> Buy our products and<br></br>Check Global Prices of Coins</h1>
                </div>
            </div>

            <div className="trade-overview-right" data-aos="fade-left" data-aos-delay="80" data-aos-duration="2000">
                <img src={TradeImg}></img>
            </div>
        </div>
    </>
    )
}

export default TradeOverview
