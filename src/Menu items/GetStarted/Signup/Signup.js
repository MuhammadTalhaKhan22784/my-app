import React from 'react'
import './Signup.css'
export default function Signup() {
    return (
        <>
            <form class="signUp-form">
                
                <div class="form-group-1">
                    <div>
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="First Name"></input>
                    </div>
                    <div>
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="First Name"></input>
                    </div>
                </div>
                <div class="form-group-2">
                    <label for="exampleDropdownFormEmail2">Email</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"></input>
                </div>
                <div class="form-group-3">
                    <label for="exampleDropdownFormPassword2">Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password"></input>
                </div>
                <div class="form-group-4">
                    <label for="exampleDropdownFormPassword2">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password"></input>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck2"></input>
                    <label class="form-check-label" for="dropdownCheck2">
                        I certify that I am 18 years of age or older, and agree to the <span>User Agreement</span> and <span>Privacy Policy</span>.            </label>
                </div>
                <div class="form-group-5">
                    <button type="submit" class="btn btn-primary signup-btn">Sign up</button>
                </div>
            </form>
        </>
    )
}
