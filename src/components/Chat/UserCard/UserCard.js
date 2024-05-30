export default function UserCard(props) {
    return (
        <div onClick = {() => props.onClick(props.user)}>
            <span>{props.name} </span>
            <span>{props.isOnline? 'online' : 'offline'}</span>
        </div>
    )
} 