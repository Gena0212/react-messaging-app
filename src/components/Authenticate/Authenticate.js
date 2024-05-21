import React from "react"
import './Authenticate.css'

import Login from "../Login/Login"
import Register from "../Register/Register"

export default function Authenticate() {

    return (
        <div className="authenticate">
            <Login />
            <Register />
        </div>
    )
}