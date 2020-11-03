import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SignUpImg from '../../../Images/signup-img.png'
import './Signup.css'

export default function Signup(props) {
    const token = '846d3c72-761d-41ce-86cb-70204678ec31'
    let history = useHistory()
    const [form, setForm] = useState({
        firstname: "",
        middlename: "xxxx",
        lastname: "",
        email: "",
        country: "UK",
        mobile: "44444",
        password: "",
        cPassword: "",
        referralId: 250252
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = () => {
        let { firstname, lastname, middlename, email, country, mobile, password, cPassword, referralId } = form

        axios.post('https://node1.pixelexchange.com/api/SignUp', {
            firstname: "xxxx",
            middlename: "xxxx",
            lastname: "xxxx",
            email: "majaruzuh@rsvhr.com",
            country: "UK",
            mobile: "44444",
            password: "Hell1@o1om",
            referralId: 250252
        }, 
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



        //     axios
        //         .post(
        //             'https://node1.pixelexchange.com/api/SignUp', {
        //             firstname,
        //             lastname,
        //             password,
        //             country,
        //             email,
        //             middlename,
        //             referralId,
        //             mobile,
        //             cPassword
        //         }
        //         )
        //         .then(res => {
        //             history.push('/homedash')
        //             // localStorage.setItem('currentUser', res.data) 
        //         })
        //         .catch(error => console.log(error));
        // }


        return (
            <>
                <div className="signUp-form">
                    <div className="signup-form-group1">
                        <img src={SignUpImg}></img>
                        <h2>Sign up To <br></br>Your Account</h2>
                    </div>
                    <div className="signUp-form-2">

                        <div class="signup-form-group-0">
                            <label for="firstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="First Name" name="firstname" value={form.firstname} onChange={handleChange}></input>
                        </div>
                        <div class="signup-form-group-1">
                            <label for="LastName">Last Name</label>
                            <input type="text" class="form-control" id="LastName" placeholder="Last Name" name="lastname" value={form.lastname} onChange={handleChange}></input>
                        </div>

                        <div class="signup-form-group-2">
                            <label for="exampleDropdownFormEmail2">Email</label>
                            <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" name="email" value={form.email} onChange={handleChange}></input>
                        </div>
                        <div class="signup-form-group-3">
                            <label for="exampleDropdownFormPassword2">Password</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" name="password" value={form.password} onChange={handleChange}></input>
                        </div>
                        <div class="signup-form-group-4">
                            <label for="exampleDropdownFormPassword2">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" name="cPassword" value={form.cPassword} onChange={handleChange}></input>
                        </div>
                        <div class="form-group-5">
                            <button type="submit" onClick={handleSubmit} class="signup-btn">Sign up</button>
                        </div>
                    </div>

                </div>
            </>
        )
    }
