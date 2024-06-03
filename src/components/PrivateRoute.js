import { Route, Redirect } from 'react-router-dom';


export default function PrivateRoute({component: Component, ...rest}) {
    console.log('localStorage privateroute', localStorage)
    return (
        <Route {...rest} component = {(props) => {
            const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
            console.log('Private route user is', user)
            if (user){
                return <Component {...props}/>
            } else {
                return < Redirect to = {'/login'}/>
            }
        }} />
    ) 
}