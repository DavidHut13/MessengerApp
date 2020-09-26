import { faSleigh } from '@fortawesome/free-solid-svg-icons'
import * as actionTypes from '../actionTypes'


const initialState = {
    idToken: '',
    userId: '',
    refreshToken: '',
    expiresIn: '',
    error: '',
    loading: false,
    isLoggedIn: false,
    registerUser: false,
}

const authStart = (state,action) => {
    return {
        ...state,
        error:null,
        loading:true,
        registerUser: false
    }
}

const authSuccess = (state,action) => {
    return {
        ...state,
        token: action.idToken,
        userId:action.userId,
        error:null,
        loading:false,
        isLoggedIn: true,
    }
}

const authFail = (state,action) => {
    return {
        ...state,
        error: action.error,
        loading:false
    }
}

const authLougout = (state,action) => {
    return {
        ...state,
        token:null,
        urserId:null,
        isLoggedIn: faSleigh
    }
}



const authReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.AUTH_START : return authStart(state,action)
        case actionTypes.AUTH_FAIL : return authFail(state,action)
        case actionTypes.AUTH_SUCCESS : return authSuccess(state,action)
        case actionTypes.AUTH_LOGOUT : return authLougout(state,action)
        default: return state

    }
}

export default authReducer

