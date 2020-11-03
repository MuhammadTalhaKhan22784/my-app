import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../../Components/Header/Navbar/Navbar'
import './Signin.css'
import SigninImg from '../../Images/signin-img.png'

const Signin = ({ bgColor }) => {
    const token = '846d3c72-761d-41ce-86cb-70204678ec31'
    let history = useHistory()
    
    const [form, setForm] = useState({
        email: "techsupport@modulus.io",
        password: "Abcd@234"
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = () => {
        let { email, password} = form
        axios.post('https://node1.pixelexchange.com/api/AuthenticateUser', {
            email: "techsupport@modulus.io",
            password: "Abcd@234"
        }
        , 
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'HMAC': `96F3C7EDC46D790ECEB980D743865CCC0AB53B9969EC5A749546500FB8C048D6078D780415FEA40779A0453A6240CC5A2DE8374ED3AF9D0D89F3FC2F7CFBDA18`
                , 'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res => {
                history.push('/homedash')
                localStorage.setItem('currentUser', res.data)
            })
                .catch(error => console.log(error));
        }
        
    return (
        <>
            <div className="signin-Section-bg">
                <Navbar bgColor={bgColor} />

                <form className="signIn-form">

                    <div className="form-group1">
                        <img src={SigninImg}></img>
                        <h2>Sign in</h2>
                    </div>
                    <div className="signIn-form-2">
                        <div class="form-group-2">
                            <label for="exampleDropdownFormEmail2">Email</label>
                            <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="Email" value={form.firstname} onChange={handleChange}></input>
                        </div>
                        <div class="form-group-3">
                            <label for="exampleDropdownFormPassword2">Password</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" value={form.password} onChange={handleChange}></input>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="dropdownCheck2"></input>
                            <label class="form-check-label" for="dropdownCheck2">
                                Keep me signed in on this computer</label>
                        </div>
                        <div class="form-group-5">
                            <Link to="homedash"><button type="submit" onClick={handleSubmit} class="signin-btn">Sign in</button></Link>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Signin
