import { updateMessage } from "../../../Actions/user.actions.js";
import "./CurrentChat.css"
import { useState } from "react"
import { useDispatch} from 'react-redux';



export default function CurrentChat(props) {
    const dispatch = useDispatch();
    // console.log(props.user)

    const [message, setMessage] = useState('');
    // let confirmUserMsgs = false


    function sendMessage() {
        console.log(props.chatStarted)
        const messageInfo = {
            user1_uid: props.auth.uid,
            user2_uid: props.userUID, 
            message 
        }

        // console.log(messageInfo)

        if (message !== ''){
            dispatch(updateMessage(messageInfo))
            .then(() => {
                setMessage('')
            })
        }

        // console.log(messageInfo)
    }
    // console.log('currentchat.js', props.user.convos)
    // console.log(props.chatStarted)

    return (
        <div className = 'current-chat'>
            {(props.chatStarted) ?
                (<div className="chat-header">            
                    {
                    props.chatStarted ? `${props.messageReceiver.firstName} ${props.messageReceiver.lastName}` : ''
                    }
                </div>)
                : null
            }
            <div className="message-area">
                {
                    (props.chatStarted) ? 
                    props.user.convos.map(convo =>
                        ((props.userUID === convo.user1_uid && props.auth.uid === convo.user2_uid) ||
                        (props.userUID === convo.user2_uid && props.auth.uid === convo.user1_uid)) ? 

                            (<div key = {convo.id}
                                // style = {{textAlign: convo.user1_uid == props.auth.uid ? 'right': 'left'}} 
                                className= {
                                    convo.user1_uid == props.auth.uid ? 
                                    'message-own': 'message-theirs'
                                    }>
                        
                                    {convo.message}
                                    
                            </div>) : null
                        )
                        : null
                    // props.chatStarted ? 
                    // props.user.convos.map(convo => {

                        // if (props.userUID === convo.user1_uid && props.auth.uid === convo.user2_uid) {
                        //     confirmUserMsgs = true
                        //     console.log('current.chat.js', confirmUserMsgs)
                        // } else if (props.userUID === convo.user2_uid && props.auth.uid === convo.user1_uid){
                        //     confirmUserMsgs = true
                        //     console.log('current.chat.js', confirmUserMsgs)
                        // }



                        // if (props.chatStarted && confirmUserMsgs){
                            // console.log('in for loop currentchat.js', convo.message);
                            // <div className= 'message'
                            // key = {convo.id}
                            // style = {{textAlign: convo.user1_uid == props.auth.uid ? 'right': 'left'}}>
                            //         <p > {convo.message} </p>
                            // </div> 
                        // }


                        // confirmUserMsgs = false
                    // }
                    // )  
                }
            </div>

            { props.chatStarted ? 
                 <div>
                    <textarea className="typing-message"
                        value =  {message}
                        onChange = {(event) => setMessage(event.target.value)} 
                        placeholder="Send a message"
                    />
                    <button className= 'send-message-button' onClick = {sendMessage}>Send</button>
                </div> : null
            }
        </div>
        
    )
} 