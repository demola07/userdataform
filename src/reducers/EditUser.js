import { EDIT_USER, CANCEL_EDIT } from '../actions/types'

const edit = { edit: false }

export default function (state = edit, action) {
    const { type } = action
    switch (type) {
        case EDIT_USER:
            return {
                ...state,
                edit: true
            }
        case CANCEL_EDIT:
            return {
                ...state,
                edit: false
            }
        default:
            return state;
    }
}