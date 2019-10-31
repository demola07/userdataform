import { RECEIVE_USER_DATA, SEND_USER_DATA } from './types';

export const sendUserData = (data) => ({
    type: SEND_USER_DATA,
    payload: data
})

export const receiveUserData = (data) => ({
    type: RECEIVE_USER_DATA,
    payload: data
})