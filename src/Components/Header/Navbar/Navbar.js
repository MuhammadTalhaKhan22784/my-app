import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({bgColor}) => {
// function Navbar({bgColor}) {


    const handleColorChange = (e)=>{

        bgColor(e.target.value)

    }

    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="side-nav"></div>
              
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse main-nav" id="navbarSupportedContent">
                <Link className="navbar-brand animate__animated animate__bounceInDown animate__delay-1s" to="/">Pixel Exchange</Link>
                    <ul className="navbar-nav home-nav mr-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="prices">Prices</Link>
                        </li>
                    
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Company
                             </a>
                            <div className="dropdown-menu home-dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="rickadvisory">Rick & Advisory</Link>
                                <Link className="dropdown-item" to="privacypolicy">Privacy Policy</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Support</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <div className="nav-items-2">
                            <li className="nav-item ">
                                <Link className="nav-link signin-link" to="signin">Log in</Link>
                            </li>
                            <li className="nav-item ">
                                <button type="button" className="btn btn-getstarted"><Link to="getStarted">Get started</Link></button>
                            </li>
                           
                        </div>
                    </ul>

                </div>

                
                <select className="themes" onChange={handleColorChange}>
                   
                    <option value="purple">Select Themes</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="orange">Orange</option>
                   
                </select>
            </nav>
        
        </>
    )
}

export default Navbar
