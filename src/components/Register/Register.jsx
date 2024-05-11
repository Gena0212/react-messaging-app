import React, {useState} from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '/Users/user/Desktop/React_vite/react-vite-app/src/firebase';

import './Register.css';


export default function Register() {

    const [registerData, setRegisterData] = React.useState(
        {
            username: "",
            email: "", 
            password: "",
            passwordConfirm: ""
        }
    )

    function handleRegisterChange(event){
        const {name, value} = event.target
        setRegisterData(prevRegisterData => ({
            ...prevRegisterData, 
            [name]: value
        }))
    }

    async function handleRegister() {
        
        
        if (registerData.password == registerData.passwordConfirm) {
            if (registerData.email === '' || registerData.password === ''){
                console.log("Email and password are mandatory")
                return
            } else {
                try {
                    const user = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
                    console.log(user)
                } catch (error) {
                    console.log(error.message)
                }
            }

            

        } else {
            console.log("Passwords do not match")
            return
        }
    }


    return (
        <div className="register">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                    type="text"
                    placeholder="Username"
                    onChange={handleRegisterChange}
                    name = "username"
                    value = {registerData.username}
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
                    <button onClick={handleRegister}>Sign Up</button>
                </form>
        </div>
        
    )
}