import * as actionTypes from '../actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const loginUser = (email,password,isRegistered) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.REACT_APP_API_KEY
        axios.post(url,authData)
        .then(response => {
            console.log(response)
            dispatch(authSuccess())

        })
        .catch(error => {
            dispatch(authFail(error.response.data.error))
        }) 

    } 
}
export const registerUser = (email,password,isRegistered) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + process.env.REACT_APP_API_KEY
        axios.post(url,authData)
        .then(response => {
            console.log(response)
            dispatch(authSuccess())
        })
        .catch(error => {
            dispatch(authFail(error.response.data.error))
        }) 
    }
}

export const authSuccess = (token,userId) => {
    return {
        type:actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
