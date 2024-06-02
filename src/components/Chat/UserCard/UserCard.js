import './UserCard.css'

export default function UserCard(props) {
    return (
        <div onClick = {() => props.onClick(props.user)} className='user-card'>
            <span>{props.name} </span>
            {
                props.isOnline ? <div className= 'online-status-on'>    </div> : <div className=  'online-status-off'>   </div>
            }
            {/* <span>{props.isOnline? 'online' : 'offline'}</span> */}
        </div>

    )
} 