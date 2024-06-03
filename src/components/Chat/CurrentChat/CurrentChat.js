import { updateMessage } from "../../../Actions/user.actions.js";
import "./CurrentChat.css"
import { useState } from "react"
import { useDispatch} from 'react-redux';



export default function CurrentChat(props) {
    const dispatch = useDispatch();


    const [message, setMessage] = useState('');

    function sendMessage() {
        const messageInfo = {
            user1_uid: props.auth.uid,
            user2_uid: props.userUID, 
            message 
        }

        if (message !== ''){
            dispatch(updateMessage(messageInfo))
            .then(() => {
                setMessage('')
            })
        }

        console.log(messageInfo)
    }
    
    return (
        <div className = 'current-chat'>
            <div className="chat-header">            
                {
                props.chatStarted ? props.messageReceiver : ''
                }
            </div>
            <div className="message-area">
                {
                    props.chatStarted ? 
                    props.user.convos.map(convo =>
                        (<div key = {convo.id}
                            style = {{textAlign: convo.user1_uid == props.auth.uid ? 'right': 'left'}} 
                            className= 'message'>

                                {convo.message}

                        </div>)
                    )
                    : null
                    
                }
            </div>

            { props.chatStarted ? 
                 <div>
                    <textarea
                        value =  {message}
                        onChange = {(event) => setMessage(event.target.value)} 
                        placeholder="Send a message"
                    />
                    <button onClick = {sendMessage}>Send</button>
                </div> : null
            }
        </div>
        
    )
} 