import { ADD_USER, EDIT_USER, DELETE_USER } from './types';

export const addUser = (user, state) => dispatch => {
    user.id = state.length + 1
    dispatch({
        type: ADD_USER,
        payload: user
    })
}

export const deleteUser = (id) => dispatch => {
    dispatch({
        type: DELETE_USER,
        payload: id
    })
}

export const editUser = () => dispatch => {

}