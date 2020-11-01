import React from 'react'
import Navbar from '../../Components/Header/Navbar/Navbar'
import Price from '../../Dashboard/PricesDash/Price'
import Footer from '../Footer/Footer'
import './Prices.css'

const Prices = ({bgColor}) => {
    return (
        <>
        <div className="price-bg"> 
        <Navbar bgColor={bgColor}/>
        <Price/>
      
        </div>
        </>
    )
}

export default Prices
