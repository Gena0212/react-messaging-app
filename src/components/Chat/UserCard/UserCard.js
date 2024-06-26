import './UserCard.css'

export default function UserCard(props) {
    return (
        <div onClick = {() => props.onClick(props.user)} className='user-card'>
            <span>{props.firstName} {props.lastName}</span>
            {
                props.isOnline ? <div className= 'online-status-on'>    </div> : <div className=  'online-status-off'>   </div>
            }
        </div>

    )
} 