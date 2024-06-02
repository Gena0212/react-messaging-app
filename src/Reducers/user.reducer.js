import { userConstants } from "../Actions/Constants.js"

const initState = {
    users: [],
    convos: []
}

export default (state = initState , action) => {
    switch(action.type){
        case userConstants.GET_REALTIME_USERS_REQUEST:
            break;
        case userConstants.GET_REALTIME_USERS_SUCCESS:
            state = {
                ...state, 
                users: action.payload.users
            }
            break;
        case userConstants.GET_REALTIME_MESSAGES:
            state = {
                ...state, 
                convos: action.payload.convos
            }
            break;
        
    }

    return state;


}