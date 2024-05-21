import './App.css'
import Chat from "./components/Chat/Chat"
import { Route, HashRouter as Router } from "react-router-dom"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import PrivateRoute from "./components/PrivateRoute"


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