<<<<<<< HEAD
import React from "react";
import './Register.css';


import { signup } from '../../Actions/Actions';
import { useDispatch } from "react-redux";


export default function Register() {

    const [registerData, setRegisterData] = React.useState(
        {
            username: "",
            email: "", 
            password: "",
            passwordConfirm: ""
        }
    )

    const dispatch = useDispatch();

    function handleRegisterChange(event){
        const {name, value} = event.target
        setRegisterData(prevRegisterData => ({
            ...prevRegisterData, 
            [name]: value
        }))
    }

    async function handleRegister(e) {
        
        e.preventDefault();
        
        const username = registerData.username
        const email = registerData.email
        const password = registerData.password
        const passwordConfirm = registerData.passwordConfirm

        const user = {
            username, email, password
        }

        
        // const formData = new FormData(e.target);

        // const { username, email, password, passwordConfirm } = Object.fromEntries(formData);
        
        if (password === passwordConfirm) {
            if (email === '' || password === ''){
                console.log("Email and password are mandatory")
                return
            } else {

                dispatch(signup(user))
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
                    <button>Sign Up</button>
                </form>
        </div>
        
    )
}
||||||| empty tree
=======
import React from "react";



import './Register.css';


import { signup } from '../../Actions/Actions.js';

import { useDispatch } from "react-redux";


export default function Register() {

    const [registerData, setRegisterData] = React.useState(
        {
            username: "",
            email: "", 
            password: "",
            passwordConfirm: ""
        }
    )

    const dispatch = useDispatch();

    function handleRegisterChange(event){
        const {name, value} = event.target
        setRegisterData(prevRegisterData => ({
            ...prevRegisterData, 
            [name]: value
        }))
    }

    async function handleRegister(e) {
        
        e.preventDefault();
        
        const username = registerData.username
        const email = registerData.email
        const password = registerData.password
        const passwordConfirm = registerData.passwordConfirm

        const user = {
            username, email, password
        }

        
        // const formData = new FormData(e.target);

        // const { username, email, password, passwordConfirm } = Object.fromEntries(formData);
        
        if (password === passwordConfirm) {
            if (email === '' || password === ''){
                console.log("Email and password are mandatory")
                return
            } else {

                dispatch(signup(user))
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
                    <button>Sign Up</button>
                </form>
        </div>
        
    )
}
>>>>>>> new-branch
