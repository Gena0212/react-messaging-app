import { authConstants } from "../Actions/Constants";

const initState = {
    name: '', 
    email: '',
    authenticating: false,
    authenticated: false, 
    error: null
}

export default (state = initState, action) => {
    switch(action.type){
        case authConstants.USER_LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.USER_LOGIN_SUCCESS:
            state = {
                ...state,
                ...action.payload.user,   
                authenticating:false, 
                authenticated:true
            }
            break;
        case authConstants.USER_LOGIN_FAILURE:
            state = {
                ...state,
                authenticated: false, 
                authenticating: false,
                error: action.payload.error
            }
            break;
    }
    return state;
}