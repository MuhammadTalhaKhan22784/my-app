import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="side-nav"></div>
              
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse main-nav" id="navbarSupportedContent">
                <Link className="navbar-brand animate__animated animate__bounceInDown animate__delay-1s" to="/">Pixel Exchange</Link>
                    <ul className="navbar-nav home-nav mr-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="prices">Prices</Link>
                        </li>
                    
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Company
                             </a>
                            <div class="dropdown-menu home-dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
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
            </nav>
        </>
    )
}

export default Navbar
