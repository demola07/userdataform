import { RECEIVE_USER_DATA } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case RECEIVE_USER_DATA:
            let userArray = []
            if (Object.getOwnPropertyNames(payload).length !== 0) {
                Object.entries(payload).forEach(load => {
                    userArray.push(load[1])
                })
                return userArray;
            }
            return state
        default:
            return state;
    }

}