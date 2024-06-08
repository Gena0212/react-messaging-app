import { updateMessage } from "../../../Actions/user.actions.js";
import "./CurrentChat.css"
import { useState, useRef, useEffect } from "react"
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
    console.log(props.chatStarted)

    const messageRef = useRef(null);

    useEffect(() => {
      messageRef.current?.scrollIntoView({ 
        behavior: "smooth" 
        // block: "nearest",
        // inline: "start" 
    });
    });
  
    // const AlwaysScrollToBottom = () => {
    //     const elementRef = useRef();
    //     useEffect(() => elementRef.current.scrollIntoView());
    //     return <div ref={elementRef} />;
    //   };

    return (
        <div className = 'current-chat' >
            {(props.chatStarted) ?
                (<div className="user-name" >            
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
                                className= {
                                    convo.user1_uid == props.auth.uid ? 
                                    'message-own': 'message-theirs'
                                    }>
                        
                                    {convo.message}
                                    
                            </div>) : null
                        )
                        : null
                }
                {/* <AlwaysScrollToBottom /> */}
                <div ref={messageRef}></div>
            </div>

            { props.chatStarted ? 
                 <div className="message-sending-section">
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