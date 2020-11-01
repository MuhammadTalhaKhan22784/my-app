import React from 'react'
import Navbar from '../../Components/Header/Navbar/Navbar'
import './GetStarted.css'
import Footer from '../Footer/Footer'
import Signup from './Signup/Signup'


const GetStarted = ({bgColor}) => {
    return (
        <>
            <div className="getStarted-Section-bg">
                <Navbar bgColor={bgColor} />
                <p className="create-account-text">Create your account</p>
                <Signup/>
            </div>
        </>
    )
}

export default GetStarted
