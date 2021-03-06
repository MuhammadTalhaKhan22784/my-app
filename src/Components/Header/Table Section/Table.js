import React from 'react'
import './Table.css'
import chart from '../../../Images/sparklineChart.png'

const Table = ({ coins }) => {
    return (
        <>
            <div className="table-container container">
                <table class="table asset-table" data-aos="flip-left" data-aos-delay="80" data-aos-duration="3000">
                    <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th className="th-name" scope="col">Name</th>
                            <th className="th-name" scope="col">Price</th>
                            <th className="th-name" scope="col">Change</th>
                            <th className="th-name" scope="col">Chart</th>
                            <th className="th-name" scope="col">Trade</th>

                        </tr>
                    </thead>
                    <tbody>

                        {(coins.length > 0) ? coins.map((coins) => {
                            return (
                                <tr key={coins.id}>
                                    <td className="coin-icon"><img src={coins.image}></img>
                                        <h5>{coins.name}</h5>
                                    </td> 
                                    <td className="td-white">
                                        ${coins.current_price}
                                    </td >
                                    {
                                        coins.price_change_percentage_24h < 0 ? (
                                            <td className='coin-percent red'>{coins.price_change_percentage_24h.toFixed(2)}%</td>
                                        ) : (
                                                <td className='coin-percent green'>+{coins.price_change_percentage_24h.toFixed(2)}%</td>
                                            )
                                    }
                                    <td><img className="spark-chart" src={chart}></img></td>
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
