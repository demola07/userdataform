import { combineReducers } from 'redux'
import form from './form'
import edit from './EditUser'
import updateform from './UpdateUser'

export default combineReducers({
    form,
    edit,
    updateform
})