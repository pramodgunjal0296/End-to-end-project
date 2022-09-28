import { init } from "../utils/init"
const appReducer=(state=init,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            state={
                ...state,
                isLoggedIn:action.payload
            }
            break;
        case 'LOGOUT':
            state={
                ...state,
                isLoggedIn:false
            }
            break;
    }
    return state
}

export default appReducer

