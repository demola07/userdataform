import { ADD_USER, EDIT_USER, DELETE_USER } from '../actions/types';

const initialState = [{ id: 1, firstname: 'Payton', lastname: 'Sawyer', birthday: '2011-23-43', age: '23', hobby: 'boxing' },
{ id: 2, firstname: 'lucas', lastname: 'scott', birthday: '1992-28-02', age: '34', hobby: 'reading' },
{ id: 3, firstname: 'Brook', lastname: 'Davis', birthday: '1992-09-02', age: '12', hobby: 'fashion' }];

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
        case EDIT_USER:
            return [...state]
        default:
            return state;
    }
}