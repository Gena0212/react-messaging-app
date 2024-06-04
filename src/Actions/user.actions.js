import { db } from "../firebase.js"
import { userConstants } from "./Constants.js"
import { collection, query, onSnapshot, addDoc,  where, orderBy } from "firebase/firestore";




export const getRealtimeUsers = (uid) => {
    return async (dispatch) => {
        dispatch({type: userConstants.GET_REALTIME_USERS_REQUEST})

        const q = query(collection(db, "users"));
        // eslint-disable-next-line
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().uid != uid){
                    users.push(doc.data());
                }
                
            });
            // console.log('users from user.action.js', users);

            dispatch({ 
                type: userConstants.GET_REALTIME_USERS_SUCCESS,
                payload: {users}
            });
        });

        return unsubscribe; 
    }
}

export const updateMessage = (messageInfo) => {
     // eslint-disable-next-line no-unused-vars
    return async dispatch => {
        const docRef = await addDoc(collection(db, "convos"), {
            ...messageInfo, 
            createdAt: new Date()
          });
        console.log("Document written with ID: ", docRef);
    }
}

// eslint-disable-next-line no-unused-vars
export const getRealtimeConvos = (info) => {
    // eslint-disable-next-line no-unused-vars
    return async dispatch => {
        const q = query(collection(db, "convos"), where('user1_uid', 'in', [info.user1_uid, info.user2_uid]), orderBy("createdAt", 'asc'));
        // eslint-disable-next-line no-unused-vars
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const convos = [];
        querySnapshot.forEach((doc) => {
            if ( 
                (doc.data().user1_uid == info.user1_uid && doc.data().user2_uid == info.user2_uid)
                || 
                (doc.data().user1_uid == info.user2_uid && doc.data().user2_uid == info.user1_uid)
            ){
                // console.log('success')
                convos.push(doc.data());
            }
            if(convos.length > 0){
                dispatch({
                    type: userConstants.GET_REALTIME_MESSAGES, 
                    payload: { convos }
                })
            } else {
                dispatch({
                    type: userConstants.GET_REALTIME_MESSAGES_FAILURE,
                    payload: { convos: []}
                })
            }
        });
        // console.log(convos);
        });
    }
}