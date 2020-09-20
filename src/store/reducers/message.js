import * as actionTypes from '../actionTypes'

const initialState = {
    message: ['test'],
    showModal: false
}

const messageReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.NEW_MESSAGE:
            return { 
                ...state,
                message: [...state.message,action.msg]
            }
        case actionTypes.DELETE_MESSAGE:
            return {
                
            }
        case actionTypes.FIND_MESSAGE:
            return {
                
            }
        case actionTypes.TOGGLE_MODAL:
            return {
                ...state,
                // showModal: value
            }
        default:
            return state;
    }
}
export default messageReducer ;