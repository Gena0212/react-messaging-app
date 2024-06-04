import React from "react";
import './Register.css';

import { signup } from '../../Actions/Actions.js';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


export default function Register() {

    const [registerData, setRegisterData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "", 
            password: "",
            passwordConfirm: ""
        }
    )

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)

    function handleRegisterChange(event){
        const {name, value} = event.target
        setRegisterData(prevRegisterData => ({
            ...prevRegisterData, 
            [name]: value
        }))
    }

    async function handleRegister(e) {
        
        e.preventDefault();
        
        const firstName = registerData.firstName
        const lastName = registerData.lastName
        const email = registerData.email
        const password = registerData.password
        const passwordConfirm = registerData.passwordConfirm

        const user = {
            firstName, lastName, email, password
        }

        
        if (password === passwordConfirm) {
            if (email === '' || password === ''){
                // console.log("Email and password are mandatory")
                return
            } else {

                dispatch(signup(user))
            }

        } else {
            // console.log("Passwords do not match")
            return
        }
    }

    if ( auth.authenticated ) {
        return <Redirect to={'/'} />
    }

    return (
        <div className="register">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleRegisterChange}
                    name = "firstName"
                    value = {registerData.firstName}
                    />
                    <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleRegisterChange}
                    name = "lastName"
                    value = {registerData.lastName}
                    />
                    <input
                    type="email"
                    placeholder="Email"
                    onChange={handleRegisterChange}
                    name = "email"
                    value = {registerData.email}
                    />
                    <input
                    type = "password"
                    placeholder="Password"
                    onChange={handleRegisterChange}
                    name="password"
                    value = {registerData.password}
                    />
                    <input
                    type = "password"
                    placeholder="Password"
                    onChange={handleRegisterChange}
                    name="passwordConfirm"
                    value = {registerData.passwordConfirm}
                    />
                    <button>Sign Up</button>
                </form>
        </div>
        
    )
}

