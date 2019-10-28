import { ADD_USER, DELETE_USER, UPDATE_USER } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case ADD_USER:
            state.push(payload)
            return [
                ...state
            ]
        case DELETE_USER:
            return [
                ...state.filter(user => user.id !== payload)
            ]
        case UPDATE_USER:
            return [
                ...state.map(user => (user.id === payload.id ? payload : user))
            ]
        default:
            return state;
    }
}