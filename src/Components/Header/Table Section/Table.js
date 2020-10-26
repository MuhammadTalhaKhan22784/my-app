import React from 'react'
import './Table.css'
import Bitcoin from '../../../Images/bitcoinIcon.png';
import Ethcoin from '../../../Images/ethCoinIcon.png';
import bitcoinCashIcon from '../../../Images/bitcoinCashIcon.png';
import liteCoinIcon from '../../../Images/liteCoinIcon.webp';
import chart from '../../../Images/sparklineChart.png'

const Table = ({ coins }) => {
    return (
        <>
            <div className="container">
                <table class="table asset-table">
                    <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th className="th-name" scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Change</th>
                            <th scope="col">Chart</th>
                            <th scope="col">Trade</th>

                        </tr>
                    </thead>
                    <tbody>

                        {(coins.length > 0) ? coins.map((coins) => {
                            return (
                                <tr key={coins.id}>
                                    <td className="coin-icon"><img src={coins.image}></img>
                                        <h5>{coins.name}</h5>
                                    </td>
                                    <td>
                                        ${coins.current_price}
                                    </td>
                                    {
                                        coins.price_change_percentage_24h < 0 ? (
                                            <td className='coin-percent red'>{coins.price_change_percentage_24h.toFixed(2)}%</td>
                                        ) : (
                                                <td className='coin-percent green'>{coins.price_change_percentage_24h.toFixed(2)}%</td>
                                            )
                                    }
                                    <td></td>
                                     <td><button className="buy-btn">Buy</button></td>
                                </tr>
                            )
                        })
                            : <tr><td colSpan="5">Loading...</td></tr>}

 

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table
