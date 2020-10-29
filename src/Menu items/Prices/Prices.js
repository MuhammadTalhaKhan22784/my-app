import React from 'react'
import Navbar from '../../Components/Header/Navbar/Navbar'
import Price from '../../Dashboard/PricesDash/Price'
import Footer from '../Footer/Footer'
import './Prices.css'

const Prices = () => {
    return (
        <>
        <div className="price-bg"> 
        <Navbar/>
        <Price/>
        <Footer/>
        </div>
        </>
    )
}

export default Prices
