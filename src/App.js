
import './App.css'
import { useEffect} from 'react'
import Chat from "./components/Chat/Chat.js"
import { Route, HashRouter as Router } from "react-router-dom"
import Register from "./components/Register/Register.js"
import Login from "./components/Login/Login.js"
import PrivateRoute from "./components/PrivateRoute.js"
import { useDispatch, useSelector } from 'react-redux'
import { isLoggedInUser } from './Actions/auth.actions.js'


export default function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if (!auth.authenticated){
        dispatch(isLoggedInUser())
    }
}, []);

  return (
        <Router>
          <PrivateRoute path = "/" exact component = {Chat}/>
          <Route path = "/login" component = {Login}/>
          <Route path = "/register" component = {Register}/>
        </Router>
  )
}

