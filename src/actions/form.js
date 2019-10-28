import { ADD_USER, EDIT_USER, DELETE_USER, UPDATE_USER, UPDATE_USER_DATA } from './types';

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

export const editUser = (user) => dispatch => {
    dispatch({
        type: EDIT_USER
    })
    dispatch({
        type: UPDATE_USER_DATA,
        payload: user
    })
}

export const updateUser = (id, user) => dispatch => {
    dispatch({
        type: UPDATE_USER,
        payload1: id,
        payload2: user
    })

}