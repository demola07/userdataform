import { EDIT_USER } from '../actions/types'

const edit = { edit: false }

export default function (state = edit, action) {
    const { type } = action
    switch (type) {
        case EDIT_USER:
            return {
                ...state,
                edit: true
            }
        default:
            return state;
    }
}