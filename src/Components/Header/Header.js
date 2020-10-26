import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Navbar from './Navbar/Navbar'
function Header() {
    return (
        <>
            <div className="header-bg">
               <Navbar/>
                <div className="header-headings">
                    <div className="header-txt">
                        <h1>Buy and sell cryptocurrency</h1>
                    </div>
                    <div className="header-para">
                        <p>PixelExchange is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</p>
                    </div>
                    <div className="header-search-bar">

                        <form class="form-inline">
                            <input class="form-control mr-sm-2 header-search-bar" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success my-2 my-sm-0 search-btn" type="submit">Get Started</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
