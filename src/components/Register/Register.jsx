import React, {useState} from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';


import './Register.css';

import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";


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

    async function handleRegister(e) {
        e.preventDefault()
        const formData = new FormData(e.target);

        const { username, email, password, passwordConfirm } = Object.fromEntries(formData);
        
        if (password == passwordConfirm) {
            if (email === '' || password === ''){
                console.log("Email and password are mandatory")
                return
            } else {
                try {
                    const registeredUser = await createUserWithEmailAndPassword(auth, email, password)
                    console.log(registeredUser)

                    await setDoc(doc(db,"users", registeredUser.user.uid), {
                        username, 
                        email, 
                        id: registeredUser.user.uid, 
                        blocked: []
                    })

                    await setDoc(doc(db,"userchats", registeredUser.user.uid), {
                        chats: []
                    })

                } catch (error) {
                    console.log(error.message)
                }
            }

        } else {
            console.log("Passwords do not match")
            return
        }
    }
    
    // const handleRegister = async(e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);

    //     const { username, email, password, passwordConfirm } = Object.fromEntries(formData);

    //     try {
    //         const res = await createUserWithEmailAndPassword(auth, email, password)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // async function handleRegister(event) {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);

    //     const {username, email, password, passwordConfirm} = Object.fromEntries(formData);

        // try {
        //     const createUserResponse = await createUserWithEmailAndPassword(auth, email, password)
            
        //     const userData = {
        //         username,
        //         email,
        //         id: createUserResponse.user.uid,
        //         blocked: []
        //     }
        //     await setDoc(doc(db, "users", createUserResponse.user.uid), userData);
            
        //     await setDoc(doc(db, "chats", createUserResponse.user.uid), {chat: []});

        //     console.log(user)
        // } catch (error) {
        //     console.log(error.message)
        // }

        // if (password == passwordConfirm) {
        //     if (email === '' || password === ''){
        //         console.log("Email and password are mandatory")
        //         return
        //     } else {
                
        //         const currentuser = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
                    
        //         const userData = {
        //             username: registerData.username,
        //             email: registerData.email,
        //             id: currentuser.user.uid,
        //             blocked: []
        //         }
        //         await setDoc(doc(db, "users", currentuser.user.uid), userData);

        //         const chats = {chat: []}

        //         await setDoc(doc(db, "chats", currentuser.user.uid), chats);

        //         console.log(user)
                
                // await auth.createUserWithEmailAndPassword(auth, registerData.email, registerData.password).then(async(userRec)=>{
                //     const user = userRec.user;
                //     await await setDoc(doc(db, "users", user.uid),{
                //         username: registerData.username,
                //         email: registerData.email,
                //         id: currentuser.user.uid,
                //         blocked: []
                //     }).catch((error)=>{
                //         console.log(error);
                //     });
                // }).catch((error)=>{
                //     console.log(error);
                // });


            // }

            

    //     } else {
    //         console.log("Passwords do not match")
    //         return
    //     }
    // }


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