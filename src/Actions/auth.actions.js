import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebase"
import { addDoc, collection } from "firebase/firestore"
import { authConstants } from "./Constants"


export const signup = (user) => {
    console.log('user is', user)
    return async (dispatch) => {
        dispatch({type: authConstants.USER_LOGIN_REQUEST});
        try {
            const data = await createUserWithEmailAndPassword(auth, user.email, user.password)

            console.log(data)
            console.log(user.name, data.user.uid)

            const docRef = await addDoc(collection(db, "users"), {
                name: user.username,
                uid: data.user.uid, 
                createdAt: new Date()
            });

            console.log("Document written with ID: ", docRef.id);

            const loggedInUser = { 
                name: user.username,
                email: user.email, 
                uid: data.user.uid
            }

            localStorage.setItem('user', JSON.stringify(loggedInUser))

            console.log('User logged in success')

            dispatch({
                type: authConstants.USER_LOGIN_SUCCESS, 
                payload: { user: loggedInUser}
            })

        } catch (error) {
            console.log(error)
            dispatch({ type: authConstants.USER_LOGIN_FAILURE, 
            payload: {error}
            });
        }
        
    }
}