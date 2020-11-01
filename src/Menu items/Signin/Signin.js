import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Header/Navbar/Navbar'
import './Signin.css'
import SigninImg from '../../Images/signin-img.png'

const Signin = ({bgColor}) => {
    return (
        <>
            <div className="signin-Section-bg">
                <Navbar bgColor={bgColor}/>
               
                <form className="signIn-form">

                    <div className="form-group1">
                        <img src={SigninImg}></img>
                    <h2>Sign in</h2> 
                    </div>
                    <div className="signIn-form-2">
                        <div class="form-group-2">
                            <label for="exampleDropdownFormEmail2">Email</label>
                            <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="Email"></input>
                        </div>
                        <div class="form-group-3">
                            <label for="exampleDropdownFormPassword2">Password</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password"></input>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="dropdownCheck2"></input>
                            <label class="form-check-label" for="dropdownCheck2">
                                Keep me signed in on this computer</label>
                        </div>
                        <div class="form-group-5">
                            <button type="submit" class="signin-btn"><Link to="homedash">Sign in</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        

        </>
    )
}

export default Signin
