import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
             <nav className="navbar navbar-expand-lg container">

                    <Link className="navbar-brand" to="/">Pixel Exchange</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse main-nav" id="navbarSupportedContent">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="prices">Prices</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Company
                             </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Earn crypto</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-get">Get $171+</button>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <div className="nav-items-2">
                                <li className="nav-item ">
                                    <Link className="nav-link signin-link" to="signin">Log in</Link>
                                </li>
                                <li className="nav-item ">
                                    <button type="button" className="btn btn-success btn-getstarted"><Link to="getStarted">Get started</Link></button>
                                </li>
                            </div>
                        </ul>

                    </div>
                </nav>
        </>
    )
}

export default Navbar
