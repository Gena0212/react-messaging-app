
import { Link } from 'react-router-dom'
import { logout } from "../../Actions/auth.actions.js";
import "./Chat.css"
import CurrentChat from "./CurrentChat/CurrentChat.js";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react"
import UserCard from './UserCard/UserCard.js';
import { getRealtimeConvos, getRealtimeUsers } from '../../Actions/user.actions.js';


export default function Chat() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);

    const [chatStarted, setChatStarted] = useState(false)
    const [messageReceiver, setMessageReceiver] = useState('')
    const [userUID, setUserUID] = useState('')

    let unsubscribe;

    useEffect(() => {
        unsubscribe = dispatch(getRealtimeUsers(auth.uid))
        .then(unsubscribe => {
            return unsubscribe; 
        })
        .catch(error => {
            console.log(error);
        })

    }, [])

    useEffect(() => {
        return () => {
             unsubscribe.then(f => f()).catch(error => console.log(error));
        }
    }, [])

    function startMessaging(user) {
        setChatStarted(true)
        console.log('message started', user)
        setMessageReceiver(user.name)
        setUserUID(user.uid)

        dispatch(getRealtimeConvos({user1_uid: auth.uid, user2_uid: user.uid}))
 
    }
    console.log('chat.js', auth)

    return (
        <div className="chat">
            <header>
                <div>
                    {/* {auth.authenticated ? 'Hi ${auth.firstName} ${auth.lastName}': ''} */}
                </div>
                <Link to = {'#'} onClick = {() => {
                    dispatch(logout(auth))
                }}>Logout</Link>
            </header>
            <div className='chat-area'>
                <div className="other-users">
                    {
                        user.users.length > 0 ?
                        user.users.map(item => {
                            return (
                                <UserCard 
                                onClick = {() => startMessaging(item)}
                                key = {item.uid} 
                                {...item}/>
                            )
                        }) : null
                    }
                </div>
                <div className='messages'>
                    <CurrentChat {...{user, auth, userUID, chatStarted, messageReceiver}}/>
                </div>
            </div>
        </div>

    )
}

