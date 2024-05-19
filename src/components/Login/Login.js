import React from "react";
import './Login.css';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../firebase";




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

    async function handleLogin(event) {
        event.preventDefault();

        const formData = new FormData(event.target)
        const { email, password } = Object.fromEntries(formData);

        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error)
        }
    
    }

    return (
        <div className="login">
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
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
                <button >Sign In</button>
            </form>
        </div>
    )
}