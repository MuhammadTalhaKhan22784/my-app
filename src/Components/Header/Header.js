import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Navbar from './Navbar/Navbar'
function Header({bgColor}) {
    return (
        <>
            <div className="header-bg">
               <Navbar bgColor={bgColor} />

                <div className="header-headings">
                    
                <div className="header-txt-1" data-aos="fade-down" data-aos-delay="50" data-aos-duration="2000">
                        <h1>Pixel Exchange</h1>
                    </div>
                    <div className="header-txt-2" data-aos="fade-down" data-aos-delay="70" data-aos-duration="2000">
                        <h1>Buy and sell cryptocurrency</h1>
                    </div>
                    
                    <div className="header-para" data-aos="fade-up" data-aos-delay="60" data-aos-duration="2000">
                        <p>PixelExchange is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</p>
                    </div>
                    <div className="header-search-bar">

                        <form class="form-inline">
                            <input  data-aos="fade-right" data-aos-delay="80" data-aos-duration="2000" class="form-control mr-sm-2 header-search-bar" type="search" placeholder="Search" aria-label="Search"></input>
                            <button data-aos="fade-left" data-aos-delay="80" data-aos-duration="2000" class="btn btn-outline-success my-2 my-sm-0 search-btn" type="submit">Get Started</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
