import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../Components/Header/Header'
import Table from '../../Components/Header/Table Section/Table'
import CryptoOverview from '../../Components/Header/cryptoPortfolioSection/CryptoOverview';
import Footer from '../Footer/Footer';

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
            <Header></Header>
            <Table coins={coins}></Table>
            <CryptoOverview/>
            <Footer/>
        </>
    )
}
export default Home