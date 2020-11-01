import React from 'react'
import Navbar from '../../Components/Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
// import Navbar from '../../Components/Header/Navbar/Navbar'
import './RickAdvisory.css'
const RickAdvisory = ({bgColor}) => {
    return (
        <>
            <div className="rickAdvisory-bg">
                <Navbar bgColor={bgColor} />
                <div className="rickAdvisory-main" >
                    <div className="rickAdvisory-rights" data-aos="fade-down" data-aos-delay="50" data-aos-duration="2000"><span>Rick & Advisory</span></div>
                    <div className="rickAdvisory-details" data-aos="flip-down" data-aos-delay="80" data-aos-duration="4000"><p>Digital currencies are not currently backed nor supported by any government or central bank. The value of digital currencies is determined by economy of supply and demand, and they are more volatile than traditional currencies. Trading in digital currencies comes with significant risks, including volatile market price swings or flash crashes, market manipulation, and cybersecurity risks. In addition, digital currency markets and exchanges are not regulated with the same controls or customer protections available in equity, option, futures, or foreign exchange investing. Digital currency trading requires knowledge of digital currency markets. In attempting to profit through digital currency trading, you must compete with traders worldwide. You should have appropriate knowledge and experience before engaging in substantial digital currency trading. Digital currency trading may not generally be appropriate, particularly with funds drawn from retirement savings, student loans, mortgages, emergency funds, or funds set aside for other purposes. Digital currency trading can lead to large and immediate financial losses. Under certain market conditions, you may find it difficult or impossible to liquidate a position quickly at a reasonable price. This can occur, for example, when the market for a particular digital currency suddenly drops, or if trading is halted due to recent news events, unusual trading activity, or changes in the underlying digital currency system. Several federal agencies have also published advisory documents surrounding the risks of virtual currency. For more information see the CFPB’s Consumer Advisory, the CFTC’s Customer Advisory, the SEC’s Investor Alert, and FINRA’s Investor Alert.
Pixel Exchange does not make any investment recommendations. Neither the listing of a digital currency on this website nor any other communication, whether made through this website or in any other way, should be construed as a recommendation to buy or sell any security.</p></div>
                </div>
            </div>

        </>
    )
}

export default RickAdvisory
