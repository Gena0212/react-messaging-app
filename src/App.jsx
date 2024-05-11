import React from "react"
import './App.css'
import Split from "react-split"
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat/Chat"
import Login from "./components/Login/Login"
import Autheticate from "./components/Authenticate/Authenticate"



import { onSnapshot } from "firebase/firestore"

export default function App() {
  
  const user = false

  return (
      <>
        {user ? (<Split className = "split"><Sidebar/><Chat/></Split>) : 
        (<Autheticate />)}
      </>
  )
}
