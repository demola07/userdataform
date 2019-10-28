import { UPDATE_USER, UPDATE_USER_DATA } from '../actions/types'

const initialFormState = [{ id: null, firstname: '', lastname: '', birthday: '', age: '', hobby: '' }]

export default function (state = initialFormState, action) {
    const { type, payload, payload1, payload2 } = action
    switch (type) {
        case UPDATE_USER_DATA:
            return [
                state = payload
            ]
        case UPDATE_USER:
            return [
                state.map(user => (user.id === payload1 ? payload2 : user))
            ]
        default:
            return state;
    }
}