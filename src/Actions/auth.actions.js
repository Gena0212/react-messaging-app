
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from "../firebase.js"
import { doc, setDoc, updateDoc} from "firebase/firestore"
import { authConstants } from "./Constants.js"

//import { updateDoc  } from "firebase/firestore"



export const signup = (user) => {
    console.log('user is', user)
    return async (dispatch) => {
        dispatch({type: authConstants.USER_LOGIN_REQUEST});
        try {
            const data = await createUserWithEmailAndPassword(auth, user.email, user.password)

            console.log(data)
            console.log(user.name, data.user.uid)

            await setDoc(doc(db, "users", data.user.uid), {
                name: user.username,
                uid: data.user.uid,  
                createdAt: new Date(),
                isOnline:true
            });


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

export const signin = (user) => {
    
    // const email = user.email
    // const password = user.password

    console.log(user, 'object from auth.action.js')
    //console.log(email, password, 'from auth.action.js')

    return async dispatch => {
        dispatch({ type: authConstants.USER_LOGIN_REQUEST });
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then(async (data)=>{
            console.log(data);
            
            await updateDoc(doc(db, "users", data.user.uid), {
                isOnline: true
            });

            // const name = data.user.displayName.split("")
            // const firstName = name[0]
            // const lastName = name[1]

            const loggedInUser = { 
                name: user.username,
                email: data.user.email, 
                uid: data.user.uid
            }

            localStorage.setItem('user', JSON.stringify(loggedInUser));

            dispatch({
                type: authConstants.USER_LOGIN_SUCCESS, 
                payload: { user:loggedInUser }
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: authConstants.USER_LOGIN_FAILURE, 
                payload: { error }
            })
        })
    }

}

export const isLoggedInUser = () => {
    return async dispatch => {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')): null;

        if (user){
            dispatch({
                type: authConstants.USER_LOGIN_SUCCESS, 
                payload: {user}
            })
        } else {
            dispatch({
                type: authConstants.USER_LOGIN_FAILURE,
                payload: { error: 'Login again please'}
            })
        }
    }
}

export const logout = (prop) => {
    console.log('prop of logout function is', prop)
    return async dispatch => {
        dispatch({ type: authConstants.USER_LOGOUT_REQUEST });
        

        //await setDoc(doc(db, "users", prop.uid), {...prop, isOnline: false});

        await updateDoc(doc(db, "users", prop.uid), {
         isOnline: false
        });

        signOut(auth).then(() => {
            localStorage.clear();
            dispatch({
                type: authConstants.USER_LOGOUT_SUCCESS
            });
        })
        .catch((error) => {
            console.log(error)
            dispatch({ 
                type: authConstants.USER_LOGOUT_FAILURE, 
                payload: { error }
            })
        })

    }
}

