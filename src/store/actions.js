import * as actionTypes from './actionTypes'


export const newMessage = (message) => {
    return {
        type: actionTypes.NEW_MESSAGE,
        msg: message,
    }
}

export const toggleModal = (value) => {
    return {
        type: actionTypes.TOGGLE_MODAL,
        value: value
    }
}