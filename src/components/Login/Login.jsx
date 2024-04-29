import React from "react"
import noProfilePic from "./noprofilepic.png"
import './Login.css'

export default function Login() {
    const [profilePic, setProfilePic] = React.useState({
        file: null, 
        url:""
    })

    function changeProfilePic(event){
        console.log(event.target.files[0])
        if (event.target.files[0]){
            setProfilePic({
                file: event.targe.files[0],
                url: URL.createObjectURL(event.target.files[0])
            })
        }  
    }
    
    const [loginData, setLoginData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: ""
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


    return (
        <div className="loginPage">
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
                    name="password"
                    />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="seperator"></div>
            <div className="signUp">
                <h2>Create An Account</h2>
                <form>
                    <label htmlFor="file">
                        <img className = "login-image" src = {profilePic.url || noProfilePic} />
                        Upload a Picture
                    </label>
                    <input 
                    type = "file"
                    id = "file"
                    style={{display:"none"}}
                    onChange={changeProfilePic}
                    />
                    <input
                    type="text"
                    placeholder="First Name"
                    name = "firstName"
                    />
                    <input
                    type="text"
                    placeholder="Last Name"
                    name = "lastName"
                    />
                    <input
                    type="email"
                    placeholder="Email"
                    name = "email"
                    />
                    <input
                    type = "password"
                    placeholder="Password"
                    name="password"
                    />
                    <button>Sign Up</button>
                </form>
            </div>
            
        </div>
        
    )
    
}