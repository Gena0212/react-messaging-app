import React from "react"

export default function Login() {
    return (
        <form>
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
        </form>
    )
    
}