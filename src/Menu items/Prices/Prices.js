import React from 'react'
import Navbar from '../../Components/Header/Navbar/Navbar'
import Price from '../../Dashboard/PricesDash/Price'
import './Prices.css'
const Prices = () => {
    return (
        <>
        <div className="price-bg">
        <Navbar/>
        <Price/>
        </div>
        </>
    )
}

export default Prices
