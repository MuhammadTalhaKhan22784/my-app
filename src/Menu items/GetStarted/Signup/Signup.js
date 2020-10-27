import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import './Signup.css'

export default function Signup(props) {
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
        let { firstname, lastname, middlename, email, country, mobile, password, cPassword, referralId} = form
        axios
      .post(
        'https://node1.pixelexchange.com/api/SignUp', {
            firstname,
            lastname,
            password,
            country,
            email,
            middlename,
            referralId,
            mobile,
            cPassword
        }
      )
      .then(res => {
        history.push('/homedash')
        // localStorage.setItem('currentUser', res.data) 
    })
    .catch(error => console.log(error));
    }


    return (
        <>      <div className="signUp-form">
                <div class="form-group-1">
                    <div>
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="First Name" name="firstname" value={form.firstname} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label for="firstName">Last Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="Last Name" name="lastname" value={form.lastname} onChange={handleChange}></input>
                    </div>
                </div>
                <div class="form-group-2">
                    <label for="exampleDropdownFormEmail2">Email</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" name="email" value={form.email} onChange={handleChange}></input>
                </div>
                <div class="form-group-3">
                    <label for="exampleDropdownFormPassword2">Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" name="password" value={form.password} onChange={handleChange}></input>
                </div>
                <div class="form-group-4">
                    <label for="exampleDropdownFormPassword2">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" name="cPassword" value={form.cPassword} onChange={handleChange}></input>
                </div>
                <div class="form-group-5">
                    <button type="submit" onClick={handleSubmit} class="btn btn-primary signup-btn">Sign up</button>
                </div>
                </div>
        </>
    )
}
