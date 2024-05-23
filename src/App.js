import './App.css'
import Chat from "./components/Chat/Chat.js"
import { Route, HashRouter as Router } from "react-router-dom"
import Register from "./components/Register/Register.js"
import Login from "./components/Login/Login.js"
import PrivateRoute from "./components/PrivateRoute.js"




export default function App() {
  
  // const user = false
  // useEffect(() => {
  //   const unSub = onAuthStateChanged(auth, (user) =>{
  //     console.log(user)
  //   })
  //   return () => {
  //     unSub();
  //   }
  // }, [])

  return (
    <div className="App">
        <Router>
          <PrivateRoute path = "/chat" exact component = {Chat}/>
          <Route path = "/login" component = {Login}/>
          <Route path = "/register" component = {Register}/>
        </Router>
    </div>
      // <>
      //   {user ? (<Split className = "split"><Sidebar/><Chat/></Split>) : 
      //   (<Autheticate />)}
      // </>
  )
}