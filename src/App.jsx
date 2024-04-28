import React from "react"
import { useState } from 'react'
import './App.css'
import Split from "react-split"
import Login from "./components/Login"
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"


export default function App() {
  
  const user = true

  return (
    <div>
      {user ? (<Split className = "split"><Sidebar/><Chat/></Split>) : (<Login/>)}
    </div>
  )
}
