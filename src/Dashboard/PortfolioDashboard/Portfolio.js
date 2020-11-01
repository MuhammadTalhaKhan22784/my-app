import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Portfolio.css'


const Portfolio = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            <div className="Portfolio-Section">
                <div className="prt-main">
                    <div className="prt-balance">
                        <span>Portfolio balance</span>
                        <br />
                        <h2>PKR 0.00</h2>
                    </div>
                    <div className="prt-transaction">
                        <div className="prt-btns">

                            <div className="send">

                                <button type="button" class="send-btn-top" data-toggle="modal" data-target="#staticBackdrop">
                                    send
                            </button>

                                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="staticBackdropLabel">Send</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <input className="send-input" type="number" placeholder="USD 0"></input>
                                                <p>You don't have any Bitcoin to send. Try buying some to get started.</p>

                                                <div className="send-body-1">
                                                    <label for="exampleInputEmail1">To</label>
                                                    <input type="email" class="form-control" placeholder="Enter your email address" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="send-body-2">
                                                    <label for="exampleInputEmail2">Note</label>
                                                    <input type="text" class="form-control" placeholder="Optional Message" id="exampleInputEmail2" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="send-body-3">
                                                    <label for="exampleInputEmail3">pay with</label>

                                                    <select>
                                                        {coins.map((coins, index) => {
                                                            return (
                                                                <option >
                                                                    {coins.name}
                                                                </option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn cont-btn">Continue</button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="receive">

                                <button type="button" class=" receive-btn-top" data-toggle="modal" data-target="#staticBackdrop2">
                                    Receive
                            </button>

                                <div class="modal fade" id="staticBackdrop2" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabe2" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="staticBackdropLabel">Receive</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div>

                                                </div>
                                                <div className="send-body-2">
                                                    <label for="exampleInputEmail2">Address</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="recieve-body-3">
                                                    <label for="exampleInputEmail3">currency</label>

                                                    <select>
                                                        {coins.map((coins, index) => {
                                                            return (
                                                                <option >
                                                                    {coins.symbol}
                                                                </option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn cont-btn">Continue</button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="transaction">
                            <h2>Recent transactions</h2>
                            <p>You don’t own any crypto. Send yourself some crypto to get started.</p>
                        </div>
                    </div>

                </div>
                <div className="your-assets">
                    <div className="assets-heading"><h2>Your Assets</h2></div>
                    <table class="table assets-table">
                        <thead>
                            <tr>
                                <th className="th-name" scope="col">S.NO</th>
                                <th className="th-name" scope="col">Asset</th>
                                <th className="th-name" scope="col">Balance</th>
                                <th className="th-name" scope="col">Allocation</th>


                            </tr>
                        </thead>
                        <tbody>

                            {(coins.length > 0) && coins.map((coins, index) => {
                                return (
                                    <tr className="s-no" key={coins.id}>
                                        <td >
                                            {index + 1}
                                        </td>
                                        <td className="coin-icon coin-btn"><img src={coins.image}></img>
                                            <h5>{coins.name}</h5>
                                        </td>
                                        <td >
                                     <span>PKR 0.00 0 <strong>{coins.symbol}</strong> </span>
                                        </td>
                                        <td>
                                            <span>0%</span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Portfolio
