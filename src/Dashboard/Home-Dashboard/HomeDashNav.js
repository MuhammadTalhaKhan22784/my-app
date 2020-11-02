import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const HomeDashNav = () => {
    return (
        <>
                            <nav class="homeDash-navbar navbar navbar-expand-lg navbar-light  ">
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <a class="navbar-brand navbar-brand-home-dash" href="#">PixelExchange</a>
                        <ul class="nav nav-pills home-dash-nav mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item " role="presentation">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">DashBoard</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Prices</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-portfolio-tab" data-toggle="pill" href="#pills-portfolio" role="tab" aria-controls="pills-portfolio" aria-selected="false">Portfolio</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <div class="dropdown user-menu">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <AccountCircleIcon />
                                    </button>
                                    <div class="dropdown-menu user-item" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">User Name</a>
                                        <a class="dropdown-item" href="#">Settings</a>
                                        <a class="dropdown-item" href="#">Log out</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <hr></hr>
        </>
    )
}

export default HomeDashNav
