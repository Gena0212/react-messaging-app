
import { Link } from 'react-router-dom'
import { logout } from "../../Actions/auth.actions.js";
import "./Chat.css"
import CurrentChat from "./CurrentChat/CurrentChat.js";
import OtherUsers from "./OtherUsers/OtherUsers.js";
import { useDispatch } from 'react-redux';

export default function Chat() {

    const dispatch = useDispatch();

    // const logout = () => {
    //     dispatch(logout())
    // }

    return (
        <div className="chat">
            <header>
                <Link to = {'#'} onClick = {() => {
                    dispatch(logout())
                }}>Logout</Link>
            </header>
            <OtherUsers/>
            <CurrentChat/>
        </div>

    )
}

