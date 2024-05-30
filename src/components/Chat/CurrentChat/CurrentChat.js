import "./CurrentChat.css"


export default function CurrentChat(props) {
    console.log('CurrentChat.js', props.chatStarted)
    return (
        <div className = 'current-chat'>
            <div className="chat-header">            
                {
                props.chatStarted ? props.messageReceiver : ''
                }
            </div>
            {props.chatStarted ? <div className="message-area">Messages here</div> : null}
            {props.chatStarted ? 
                 <div>
                    <textarea/>
                    <button>Send</button>
                </div> : null
            }
        </div>
        
    )
} 