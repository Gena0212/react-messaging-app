import React from "react";
import './Login.css';
import { useDispatch } from "react-redux";
import { signin } from "../../Actions/auth.actions.js";





export default function Login() {
    const [loginData, setLoginData] = React.useState(
        {
            email: "", 
            password: ""
        }
    )

    const dispatch = useDispatch();
    //const auth = useSelector (state => state.auth);


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
        console.log("User is signed in?")

    }

    // async function handleLogin(event) {
    //     event.preventDefault();

    //     const formData = new FormData(event.target)
    //     const { email, password } = Object.fromEntries(formData);

    //     try {
    //         await signInWithEmailAndPassword(auth, email, password)
    //     } catch (error) {
    //         console.log(error)
    //     }
    
    // }

    

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