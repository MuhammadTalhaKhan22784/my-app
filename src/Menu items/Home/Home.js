import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../Components/Header/Header'
import Table from '../../Components/Header/Table Section/Table'
import CryptoOverview from '../../Components/Header/cryptoPortfolioSection/CryptoOverview';
import Footer from '../Footer/Footer';
import './Home.css'
import AccountOverview from '../../Components/Header/CryptoAccountSection/AccountOverview';
import PortfolioOverview from '../../Components/Header/PortfolioOverviewSection/PortfolioOverview';
import TradeOverview from '../../Components/Header/TradeOverviesSection/TradeOverview';
const Home = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <div className="main-home">
                <Header></Header>
                <Table coins={coins}></Table>
                <CryptoOverview />
                <AccountOverview/>
                <PortfolioOverview/>
                <TradeOverview/>
                <Footer />

            </div>
        </>
    )
}
export default Home