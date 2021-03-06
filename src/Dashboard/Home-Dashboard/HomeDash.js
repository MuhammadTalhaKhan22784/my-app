import React, { useEffect, useState } from 'react'
import './HomeDash.css'
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import Bitcoin from '../../Images/bitcoinIcon.png';
import LineChart from '../../Components/Common/LineChart'
import Price from '../PricesDash/Price';
import MainDashboard from '../RobinhoodDashboard/MainDashboard';
import PieChart from '../../Components/Common/PieChart';
import axios from 'axios'
import CoinSummaryPage from "../RobinhoodDashboard/pages/CoinSummaryPage";
import { WatchListContextProvider } from "../RobinhoodDashboard/context/watchListContext";
import Portfolio from '../PortfolioDashboard/Portfolio';
import HomeDashNav from './HomeDashNav';

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

    // for checking this api and end poin i write this code here
    const token = '846d3c72-761d-41ce-86cb-70204678ec31'
    useEffect(() => {

        axios.get('https://node1.pixelexchange.com/market/get-market-summary', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'HMAC': `96F3C7EDC46D790ECEB980D743865CCC0AB53B9969EC5A749546500FB8C048D6078D780415FEA40779A0453A6240CC5A2DE8374ED3AF9D0D89F3FC2F7CFBDA18`
                , 'Access-Control-Allow-Origin': '*'
            }
        })
            .then((res) => {
                console.log('abcde: ', res.data)
            })
            .catch((error) => {
                console.error('efg :', error)
            })
    }, []);
   
    return (

        <>
            <div className="HomeDash-bg">
            <HomeDashNav/>

                <div class="tab-content container" id="pills-tabContent">


                    <div class="tab-pane watchlist-dashboard fade show active " data-aos="flip-left" data-aos-delay="80" data-aos-duration="3000" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" >

                        <div className="watchlist-items-1">
                            <div className="watchlist-txt"><h2>Watchlist</h2></div>
                            <div className="watchlist-edit-items">
                                <div><p type="button">Edit</p></div>
                                <ViewModuleIcon className="viewIcon" type="button" /> 
                                <ViewHeadlineIcon className="viewListIcon" type="button" />
                            </div>
                        </div>
                        <div className="Watchlist-Rapper">
                            <div className="Watchlist-chart" >
                                <div className="Watchlist-chart-item-1" >
                                    <div className="waatch-cont">
                                        <div className="Watchlist-chart-txt-img" >
                                            <img className="icon-bitcoin" src={Bitcoin}></img>


                                            <span>Bitcoin</span>

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
                        <div className="home-portfolio container">
                            <div className="hp-div-1 ">

                                <div className="yp-txt">
                                    <h2>Your Portfolio</h2>
                                </div>

                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link yp-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">List</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link yp-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Chart</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" data-aos="flip-right" data-aos-delay="80" data-aos-duration="3000" id="home" role="tabpanel" aria-labelledby="home-tab">.
                                <table class="table yp-table">

                                            <tbody>
                                                <tr>
                                                    <td>Bitcoin</td>
                                                    <td>0%</td>
                                                    <td>0Band</td>
                                                    <td>PKR 0.00</td>
                                                </tr>
                                                <tr>

                                                    <td>Bitcoin</td>
                                                    <td>0%</td>
                                                    <td>0Band</td>
                                                    <td>PKR 0.00</td>
                                                </tr>
                                                <tr>

                                                    <td>Bitcoin</td>
                                                    <td>0%</td>
                                                    <td>0Band</td>
                                                    <td>PKR 0.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Bitcoin</td>
                                                    <td>0%</td>
                                                    <td>0Band</td>
                                                    <td>PKR 0.00</td>
                                                </tr>
                                                <tr>

                                                    <td>Bitcoin</td>
                                                    <td>0%</td>
                                                    <td>0Band</td>
                                                    <td>PKR 0.00</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="pie-div" >
                                        </div> 

                                    </div>
                                    <div className="total-balance-div">
                                        <h2>Total Balance = PKR 0.00</h2>
                                    </div>
                                </div>

                            </div>
                            <div className="hp-div-2 container" data-aos="flip-up" data-aos-delay="80" data-aos-duration="3000">
                                <div className="hp-div-2-txt"><h2>Recent Transactions</h2></div>
                                <div className="hp-div-2-para">
                                    <p>You don’t own any crypto. Send yourself some crypto to get started.</p>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <WatchListContextProvider>
                            <CoinSummaryPage />
                        </WatchListContextProvider>

                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                        <Price />
                    </div>
                    <div class="tab-pane fade" id="pills-portfolio" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <Portfolio/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeDash