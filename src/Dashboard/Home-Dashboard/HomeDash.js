import React, { useEffect, useState } from 'react'
import Apis from '../../apis/Apis'
import './HomeDash.css'
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import Bitcoin from '../../Images/bitcoinIcon.png';
import LineChart from '../../Components/Common/LineChart'
import Price from '../PricesDash/Price';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// export const CoinData = (props) => {
//     const [coin, setCoin] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await Apis.get("/coins/markets", {
//                 params: {
//                     vs_currency: "usd",
//                     id: "bitcoin"
//                 },
//             });
//         setCoin(response.data);
//         };

//         fetchData();
//     }, []);
//     return (
//         <></>
//     )
// }


const HomeDash = () => {
    const [coin, setCoin] = useState([]);
    // let currentUser = localStorage.getItem('currentUser')
    useEffect(() => {
        const fetchData = async () => {
            const response = await Apis.get("/market/get-market-summary'", {
                params: {
                    vs_currency: "usd",
                    id: "bitcoin"
                },
            });
            setCoin(response.data);
            console.log(response.data)
        };

        fetchData();
    }, []);
    return (

        <>
            <div className="HomeDash-bg">
                <nav class="homeDash-navbar navbar navbar-expand-lg navbar-light  ">
                    <a class="navbar-brand navbar-brand-home-dash" href="#">PixelExchange</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                                <div class="dropdown user-menu">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       <AccountCircleIcon/>
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

                <div class="tab-content container" id="pills-tabContent">


                    <div class="tab-pane watchlist-dashboard fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                        <div className="watchlist-items-1">
                            <div className="watchlist-txt"><h2>Watchlist</h2></div>
                            <div className="watchlist-edit-items">
                                <div><p type="button">Edit</p></div>
                                <ViewModuleIcon className="viewIcon" type="button" />
                                <ViewHeadlineIcon className="viewListIcon" type="button" />
                            </div>
                        </div>
                        <div className="Watchlist-Rapper">
                            <div className="Watchlist-chart">
                                <div className="Watchlist-chart-item-1">
                                    <div className="waatch-cont">
                                        <div className="Watchlist-chart-txt-img">
                                            <img className="icon-bitcoin" src={Bitcoin}></img>

                                         return(
                                         <span>{coin.id}</span>)

                                    </div>
                                        <div><p type="button">24h</p></div>
                                    </div>
                                    <div>
                                        <LineChart />
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div className="Discover-asset">
                                <a >Discover more assets </a>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                        <Price />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeDash