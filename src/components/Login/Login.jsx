import React, {useState} from "react";
import './Login.css';
import {signInWithEmailAndPassword} from 'firebase/auth';




export default function Login() {
    const [loginData, setLoginData] = React.useState(
        {
            email: "", 
            password: ""
        }
    )


    function handleChange(event){
        const {name, value} = event.target
        setLoginData(prevLoginData => {
            return {
                ...prevLoginData, 
                [name]: value
            }
        })
    }

    async function handleLogin() {
        try {
            const user = await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="login">
            <h2>Log In</h2>
            <form>
                <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name = "email"
                value = {loginData.email}
                />
                <input
                type = "password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value = {loginData.password}
                />
                <button onClick={handleLogin} >Sign In</button>
            </form>
        </div>
    )
}