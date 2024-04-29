import React from "react"
import './App.css'
import Split from "react-split"
import Login from "./components/Login/Login"
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat/Chat"

import { onSnapshot } from "firebase/firestore"

export default function App() {
  
  const user = false

  return (
    <div>
      {user ? (<Split className = "split"><Sidebar/><Chat/></Split>) : (<Login/>)}
    </div>
  )
}
