import React from 'react'
import Navbar from '../../Components/Header/Navbar/Navbar'
import './GetStarted.css'
import Signup from './Signup/Signup'

const GetStarted = () => {
    return (
        <>
            <div className="getStarted-Section-bg">
                <Navbar />
                <p className="create-account-text">Create your account</p>
            <Signup/>
            </div>
        </>
    )
}

export default GetStarted
