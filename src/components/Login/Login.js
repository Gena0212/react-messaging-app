import React from "react";
import './Login.css';
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../Actions/auth.actions.js";
import { Redirect } from 'react-router-dom';
import {Link} from "react-router-dom";


export default function Login() {
    const [loginData, setLoginData] = React.useState(
        {
            email: "", 
            password: ""
        }
    )

    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);


    function handleChange(event){
        const {name, value} = event.target
        setLoginData(prevLoginData => {
            return {
                ...prevLoginData, 
                [name]: value
            }
        })
    }

    function handleLogin(event) {
        event.preventDefault();

        const email = loginData.email
        const password = loginData.password

        if (email == ""){
            alert("Email is required");
            return;
        }
        if (password == ""){
            alert("Password is required");
            return;
        }

        dispatch(signin({email , password}));
        // console.log("User is signed in?")

    }
    // console.log('Auth is', auth)
    // console.log(auth.authenticated)

    if ( auth.authenticated ) {
        return <Redirect to={'/'} />
    }

    

    return (
        <div className="login">
            <h1>Log In</h1>
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
                <button className="login-button" >Sign In</button>
            </form>
            <Link to="/register"> Register </Link>
        </div>
    )
}

