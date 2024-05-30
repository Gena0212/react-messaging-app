import { db } from "../firebase.js"
import { userConstants } from "./Constants.js"
import { collection, query, onSnapshot } from "firebase/firestore";


export const getRealtimeUsers = (uid) => {
    return async (dispatch) => {
        dispatch({type: userConstants.GET_REALTIME_USERS_REQUEST})

        // collection(db, 'users')
        // .onSnapshot((querySnapshot)=>{
        //     const users = [];
        //     querySnapshot.forEach(function(doc) {
        //         users.push(doc.data());
        //     });
        //     console.log('users from user.action.js', users);
        // });

        const q = query(collection(db, "users"));
        // eslint-disable-next-line
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().uid != uid){
                    users.push(doc.data());
                }
                
            });
            console.log('users from user.action.js', users);

            dispatch({ 
                type: userConstants.GET_REALTIME_USERS_SUCCESS,
                payload: {users}
            });
        });

        return unsubscribe; 
    }
}